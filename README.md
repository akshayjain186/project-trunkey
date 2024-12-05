# turnKey
## Project Directory Structure
```cmd
/turnKey
├── backend
│   ├── services
│   └── user-service
├── docker-compose.yml
├── frontend
│   └── GUI_TKY
├── README.md
└── shared
    ├── config
    └── utils
```

# 1. Create a MySQL Database and Configure the Environment File
## Path to Add the .env File:
```/turnKey/shared/config/.env```

## Example ```.env``` Configuration File:
```cmd
# MySQL Database Configuration
DB_NAME=turnKey
DB_USER=root
DB_PASSWORD=website
DB_HOST=localhost

# Microservices Base URL
USERS_SERVICE_URL=http://localhost:3001/api/

# Environment Variable
ENV_NAME=World

# JWT Secret for API Authentication
JWT_SECRET=53b9a337c0a66d92f4dd42f3c92214d00f3c62212de9f1d4358118f9cd3068dcd488814ee81a21828dfa05090960011e0c1728504d72312a7b790a248b1afffa
```

# 2. Run the Project
Use the following command to start the project. This command runs the shell script, which sets up the application using Docker containers:
```cmd
# Make the script executable by running:
chmod +x run.sh

# Run the project by executing:
./run.sh
```

# Post-Deployment Details:
## Backend Services:
* Runs on ports: 3001 and 33002
## Frontend Service:
* Accessible at: http://localhost:3000
Navigate to the frontend URL in your browser to access the application.

