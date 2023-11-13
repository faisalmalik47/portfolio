#!/bin/bash -l
echo "Started at $(date)"
echo "################################################################################################"
echo
echo
# Define the repository and branch
REPO_DIR="/var/www/portfolio"
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
echo
echo "################################################################################################"
echo
echo "Finished at $(date)"