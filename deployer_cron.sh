#!/bin/bash

# Define the repository and branch
REPO_DIR="https://github.com/faisalmalik47/portfolio"
BRANCH="main"

# Navigate to the repository directory
cd $REPO_DIR

# Fetch the latest changes from the repository
git fetch

# Check if the local copy is behind
if [[ $(git rev-parse HEAD) != $(git rev-parse @{u}) ]]; then
  # Pull the latest changes
  git pull origin $BRANCH

  # Run your deployment script
  /var/www/portfolio/deploy.sh
fi
