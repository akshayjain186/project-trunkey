# Use Node.js image
FROM node:18

# Set working directory
WORKDIR /GUI_TKY

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy all the source code
COPY . .

# Expose port (this should match the port your app listens on)
EXPOSE 3000

# Command to start the app
CMD ["npm", "start"]