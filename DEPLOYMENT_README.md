# M1Labs Website Deployment

## Changes Made to Prepare for Deployment

1. **Modified app.py**
   - Added secret key configuration
   - Updated run configuration to use environment variables
   - Set host to '0.0.0.0' to allow external access

2. **Created Procfile**
   - Added configuration for Gunicorn to serve the Flask app

3. **Updated requirements.txt**
   - Ensured all necessary dependencies are included

4. **Created .gitignore**
   - Set up proper ignores for Python/Flask projects

5. **Created Deployment Guides**
   - DEPLOYMENT_GUIDE.md: Detailed step-by-step instructions
   - deploy_init.sh: Helper script to initialize Git repository

## Next Steps to Deploy Your Website

### Option 1: Render.com (Recommended)

Follow the instructions in DEPLOYMENT_GUIDE.md for a complete walkthrough of deploying to Render.com and connecting your Google Domains.

1. Run the helper script to initialize deployment:
   ```bash
   ./deploy_init.sh
   ```

2. Push your code to GitHub

3. Deploy on Render.com
   - Connect to your GitHub repository
   - Configure as a Web Service
   - Use build command: `pip install -r requirements.txt`
   - Use start command: `gunicorn app:app`

4. Update DNS in Google Domains
   - Follow Render's instructions to add the appropriate DNS records
   - Point m1labs.io to your Render service

### Option 2: Other Hosting Providers

The site is now configured to work with most Python web hosting services including:

- Heroku
- PythonAnywhere
- DigitalOcean App Platform
- AWS Elastic Beanstalk

## Important Notes

1. **Google Domains DNS Change**
   - Changing DNS from Webflow will make your current site unavailable during propagation
   - DNS changes can take 24-48 hours to fully propagate
   - Plan this transition during a low-traffic period

2. **Contact Form**
   - The current contact form implementation redirects to the main page with a success parameter
   - For production, you should implement proper email sending or database storage

3. **Environment Variables**
   - Always use a strong SECRET_KEY in production (the deploy_init.sh script generates one for you)
   - Set FLASK_ENV to 'production' in your hosting environment

4. **Testing**
   - After deployment, thoroughly test all site functionality
   - Check for any broken links or missing assets

## Backup Plan

If anything goes wrong during deployment, you can always revert your DNS settings in Google Domains to point back to Webflow until issues are resolved.

## Need Further Assistance?

If you encounter any issues during deployment, the following resources may help:

- Render.com Documentation: https://render.com/docs
- Flask Deployment Documentation: https://flask.palletsprojects.com/en/2.2.x/deploying/
- Google Domains Help: https://support.google.com/domains/
