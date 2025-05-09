#!/bin/bash
# Helper script to initialize deployment for M1Labs website

echo "Initializing deployment for M1Labs website..."

# Check if Git is installed
if ! command -v git &> /dev/null; then
    echo "Git is not installed. Please install Git first."
    exit 1
fi

# Initialize Git repository if not already initialized
if [ ! -d .git ]; then
    echo "Initializing Git repository..."
    git init
    echo "Git repository initialized."
else
    echo "Git repository already initialized."
fi

# Ask for GitHub username
read -p "Enter your GitHub username: " github_username

# Create .gitignore if it doesn't exist
if [ ! -f .gitignore ]; then
    echo "Creating .gitignore file..."
    echo "venv/
__pycache__/
*.py[cod]
*$py.class
.env
.DS_Store
.vscode/" > .gitignore
    echo ".gitignore file created."
else
    echo ".gitignore file already exists."
fi

# Add files to Git
echo "Adding files to Git..."
git add .
echo "Files added to Git."

# Commit changes
echo "Committing changes..."
git commit -m "Initial commit for deployment"
echo "Changes committed."

# Help setting up remote repository
echo ""
echo "Next steps:"
echo "1. Create a new repository on GitHub (https://github.com/new)"
echo "2. Name it something like 'm1labs-website'"
echo "3. Do not initialize with README, .gitignore, or license"
echo "4. Run the following commands to push your code:"
echo ""
echo "   git remote add origin https://github.com/$github_username/m1labs-website.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "5. Follow the DEPLOYMENT_GUIDE.md for next steps to deploy on Render.com"
echo ""

# Generate a random SECRET_KEY for the app
echo "Generated a random SECRET_KEY for your Flask app:"
SECRET_KEY=$(openssl rand -hex 24)
echo "SECRET_KEY=$SECRET_KEY"
echo "Add this to your environment variables in Render.com"

echo ""
echo "Initialization complete! Happy deploying!"
