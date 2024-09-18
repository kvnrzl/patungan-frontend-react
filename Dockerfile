# Stage 1: Build React App
FROM node:18-alpine AS build

# Set working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

RUN apk update && apk add git

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Nginx to serve the built React app
FROM nginx:alpine

# Copy custom Nginx configuration (optional, but recommended)
# COPY nginx.conf /etc/nginx/nginx.conf

# Copy build output from the first stage to Nginx's web root
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 to access the web app
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
