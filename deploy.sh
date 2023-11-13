#!/bin/bash -l

# Log start of the script
echo "Starting deployment script..."

# Define the project directory as a variable
PROJECT_DIR="/var/www/portfolio"

# Navigate to your project directory
cd $PROJECT_DIR

# Print current user
echo "Running as user: $(whoami)"

#nvm use 16.20.2

# Print Node.js and Yarn versions
echo "Node version: $(node -v)"
echo "Yarn version: $(yarn -v)"

# Log environment variables (optional, be cautious with sensitive data)
# env

# Pull the latest changes from the main branch
echo "Pulling latest changes from Git..."
git pull origin main

# Install dependencies
echo "Installing dependencies..."
yarn install

# Build your project (assuming your project has a build script)
echo "Building the project..."
yarn build

# Check for build success
if [ $? -eq 0 ]; then
    echo "Build succeeded."
else
    echo "Build failed. Exiting..."
    exit 1
fi

# Empty the /var/www/html directory
echo "Cleaning the deployment directory..."
sudo rm -rf /var/www/html/*

# Copy the build artifacts to /var/www/html
echo "Copying build artifacts to the deployment directory..."
cp -R $PROJECT_DIR/build/* /var/www/html/

echo "Deployment script finished."
