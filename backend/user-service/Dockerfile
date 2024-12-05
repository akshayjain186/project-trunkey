# Dockerfile for user-service

FROM node:18

WORKDIR /user-service

# Copy package.json files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 3001
EXPOSE 3001

# Set the command to run the migrations and then start the app
CMD ["sh", "-c", "npx sequelize-cli db:migrate && npm start"]
