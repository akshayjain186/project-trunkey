// Import required modules
const userAccountRoutes = require('./routes/User');
const rolesRoutes = require('./routes/Roles');
const categoriesRoutes = require('./routes/CategoriesRoutes');
const subcategoriesRoutes = require('./routes/SubcategoriesRoutes');
const projectRoutes = require('./routes/ProjectRoutes');
const projectmanageroleRoutes = require('./routes/ProjectmanageroleRoutes');
// const projectSubcategoryRoutes = require('./routes/ProjectSubcategory');


// Import required modules
const express = require('express');
const cluster = require('cluster');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const errorHandler = require('./middlewares/errorHandler');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const passport = require('passport');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./Swagger/swagger');
const path = require('path');
const sequelize = require('./config/databaseConfig'); // Sequelize instance
const config = require('./config/config');

// Initialize Express app
const app = express();

// Initialize Sequelize session store
const sessionStore = new SequelizeStore({
  db: sequelize,
  tableName: 'sessions',
});

// Session configuration
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    cookie: { secure: false, maxAge: 3600000 },
  })
);

sessionStore.sync(); // Sync Sequelize session table

// Passport setup
app.use(passport.initialize());
app.use(passport.session());

// Middleware setup
app.use(helmet());
app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb' }));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
app.use(limiter);
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));
app.use('/categoryimage', express.static(path.join(__dirname, 'categoryimage')));

// Sync Sequelize models and session store
sequelize.sync().then(() => {
  console.log('Database synced');
});

// Define routes
// app.use('/api/v1/service-provider', serviceProviderRoutes);
// Add other routes here as needed

app.use(
  '/swagger',
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, {
    swaggerOptions: {
      requestInterceptor: (req) => {
        const token = localStorage.getItem('authToken');
        if (token) {
          req.headers['Authorization'] = `Bearer ${token}`;
        }
        return req;
      },
    },
  })
);

//Routes
app.use('/api/v1/users', userAccountRoutes);
app.use('/api/v1/roles', rolesRoutes);
app.use('/api/v1/categories', categoriesRoutes);
app.use('/api/v1/subcategories', subcategoriesRoutes);
app.use('/api/v1/project', projectRoutes);
app.use('/api/v1/projectmanagerole', projectmanageroleRoutes);
// app.use('/api/v1/projectsubcategory', projectSubcategoryRoutes);



// Example route
app.get('/', (req, res) => {
  res.send('Welcome to the TurnKey API');
});

// Get the number of CPU cores available
// const numCPUs = os.cpus().length;

const PORT = config.port || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} in ${process.env.NODE_ENV} mode`);
});

// if (cluster.isMaster) { /* Cluster setup as needed */ }
