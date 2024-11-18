const swaggerJsdoc = require('swagger-jsdoc');

// Swagger definition
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'TurnKey Project Api Documentation',
    version: '1.0.0',
    description: 'API documentation for TurnKey',
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Development server',
    },
  ],
  components: {
    securitySchemes: {
      BearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
  security: [
    {
      BearerAuth: [],
    },
  ],
};

// Options for the Swagger docs
const options = {
  swaggerDefinition,
  apis: ['./src/routes/*.js', './src/Swagger/*.js'], // Path to the API docs
};

// Initialize Swagger JSDoc
const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
