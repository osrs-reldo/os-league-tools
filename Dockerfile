# Step 1: Use Node.js to build the React app
FROM node:18 as build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the React app for production
RUN npm run build

# Expose the port your application runs on
EXPOSE 3000

# Use CMD to specify the startup command for the container
CMD ["npm", "run", "start"]

