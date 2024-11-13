# Use an official Node.js image as the base
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Set memory limit to prevent JavaScript heap out of memory error
ENV NODE_OPTIONS="--max-old-space-size=4096"

# Build the app for production
RUN npm run build

# Install 'serve' to serve the build directory
RUN npm install -g serve

# Expose the port that the app will run on
EXPOSE 3000

# Serve the application
CMD ["serve", "-s", "build", "-l", "3000"]

