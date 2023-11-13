#!/bin/bash

# Define the project directory as a variable
PROJECT_DIR="/var/www/portfolio"

# Navigate to your project directory
cd $PROJECT_DIR

# Pull the latest changes from the main branch
git pull origin main

# Install dependencies
npm install

# Build your project (assuming your project has a build script)
npm run build

# Empty the /var/www/html directory
sudo rm -rf /var/www/html/*

# Copy the build artifacts to /var/www/html
# Adjust the following line according to the actual directory where your build artifacts are generated
cp -R $PROJECT_DIR/build/* /var/www/html/
