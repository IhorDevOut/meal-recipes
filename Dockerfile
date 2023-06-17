# Use an official Node.js image as the base for building the React application
FROM node:14-alpine as build

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install --production

# Copy the React application files to the container
COPY . .

# Build the React application
RUN npm run build

# Use an official NGINX image as the base for serving the static files
FROM nginx:alpine

# Copy the built React application files to the NGINX web root directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for incoming HTTP traffic
EXPOSE 80

# Start NGINX server
CMD ["nginx", "-g", "daemon off;"]
