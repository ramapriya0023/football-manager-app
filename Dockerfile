# Step 1: Use an official Node.js runtime as a base image
FROM node:18 AS build

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json files
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the entire project
COPY . .

# Step 6: Build the React app for production
RUN npm run build

# Step 7: Use a lightweight server to serve the built app
FROM nginx:alpine

# Step 8: Copy the build folder to the nginx html folder
COPY --from=build /app/build /usr/share/nginx/html

# Step 9: Expose port 80 to access the app
EXPOSE 80

# Step 10: Run nginx server
CMD ["nginx", "-g", "daemon off;"]
