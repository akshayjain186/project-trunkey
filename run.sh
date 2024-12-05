#!/bin/bash

# Ensure the script stops if any command fails
set -e

docker-compose down

# Function to display a message
echo_message() {
  echo "====================================="
  echo "$1"
  echo "====================================="
}

# Step 1: Build and start the Docker containers
echo_message "Starting the project with Docker Compose..."
docker-compose up --build -d

# Step 2: Confirm that the containers are running
echo_message "Checking the status of Docker containers..."
docker ps

# Step 3: Provide feedback to the user
echo_message "The project is now running."
echo "Frontend: http://localhost:3000"
echo "Backend user-service: http://localhost:3001"
echo "Backend services: http://localhost:3002"
