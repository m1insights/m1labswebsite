# Deployment Guide for M1Labs Website

This guide will walk you through deploying your Flask website to Render.com and connecting it to your m1labs.io domain (currently hosting a Webflow site).

## Step 1: Push Your Code to GitHub

1. Initialize a Git repository (if you haven't already):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. Create a new repository on GitHub
   - Go to github.com and create a new repository (e.g., "m1labs-website")
   - Follow the instructions to push your code to the new repository:
   ```bash
   git remote add origin https://github.com/yourusername/m1labs-website.git
   git branch -M main
   git push -u origin main
   ```

## Step 2: Deploy to Render.com

1. Create a Render.com account
   - Go to https://render.com/ and sign up for an account (you can sign up with your GitHub account)

2. Create a new Web Service
   - Click "New" and select "Web Service"
   - Connect your GitHub repository
   - Select the repository you just created

3. Configure the Web Service
   - Name: m1labs-website
   - Runtime: Python
   - Build Command: `pip install -r requirements.txt`
   - Start Command: `gunicorn app:app`
   - Select the plan (Free tier is fine for starters)
   - Environment Variables (optional):
     - Click "Advanced" and add:
       - SECRET_KEY: [generate a secure random string]
       - FLASK_ENV: production

4. Click "Create Web Service"
   - Render will automatically build and deploy your application
   - This process may take a few minutes

5. Once deployed, Render will provide a URL for your website
   - It will look something like: https://m1labs-website.onrender.com

## Step 3: Configure Custom Domain

1. In your Render dashboard:
   - Navigate to your web service
   - Go to "Settings" > "Custom Domain"
   - Click "Add Custom Domain"
   - Enter your domain: m1labs.io
   - Render will provide you with DNS records to add to Google Domains

2. Log in to Google Domains:
   - Go to domains.google.com and sign in
   - Select m1labs.io from your domains list
   - Navigate to "DNS" or "Domain settings"

3. Update DNS Records for m1labs.io:
   - Find the section for custom resource records or DNS records
   - You need to add the following records (using the values provided by Render):
     - A record: Point @ to the IP address provided by Render
     - CNAME record: Point www to your Render URL (e.g., m1labs-website.onrender.com)

4. Verify Domain on Render:
   - After adding the DNS records, return to Render and click "Verify"
   - DNS propagation may take up to 48 hours, but often completes within a few hours

## Step 4: SSL Certificate

Render automatically provisions SSL certificates for custom domains. Once your domain is verified, your website will be accessible via HTTPS.

## Step 5: Test Your Deployment

1. Wait for DNS propagation (can take a few hours)
2. Visit m1labs.io to verify that your Flask website is now being served instead of the Webflow site
3. Test all functionalities, including the contact form

## Alternative Deployment Options

If you'd prefer a different hosting provider, consider:

1. **Heroku** - Similar to Render but requires a credit card even for free tier
2. **PythonAnywhere** - Easy deployment for Python web apps
3. **DigitalOcean App Platform** - More robust but paid solution
4. **AWS Elastic Beanstalk** - Enterprise-level solution

## Troubleshooting

- If your site isn't loading, check Render logs for errors
- If DNS isn't working, verify you've added the correct records in Google Domains
- If styling is off, verify all static files are being loaded correctly (check browser console)
