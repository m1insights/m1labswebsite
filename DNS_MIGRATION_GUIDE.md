# DNS Migration Guide: Moving from Webflow to Render

This guide will help you migrate your DNS records from Webflow to Render while preserving important email-related DNS records.

## Step 1: Deploy Your Website on Render

Before changing any DNS records, first deploy your website on Render:

1. Sign up at [render.com](https://render.com/)
2. Create a new Web Service
3. Connect to your GitHub repository: `https://github.com/m1insights/m1labswebsite.git`
4. Configure your service:
   - Name: `m1labs-website` (or any name you prefer)
   - Environment: `Python`
   - Build Command: `pip install -r requirements.txt`
   - Start Command: `gunicorn app:app`
   - Add environment variables:
     - SECRET_KEY: `835b6555d9642e9289efbfbabff76aeeb13573cfcb1125af` (or another secure key)
     - FLASK_ENV: `production`
5. Create the web service and wait for deployment to complete

## Step 2: Add Custom Domain on Render

After your site is deployed:

1. Go to your Web Service dashboard
2. Navigate to "Settings" > "Custom Domain"
3. Click "Add Custom Domain"
4. Enter your domain: `m1labs.io`
5. **Important**: Take note of the DNS records Render provides
   - They will typically give you specific IP addresses for A records
   - And/or a CNAME value for your domain

## Step 3: Manage DNS Records in Google Domains

### Understanding Your Current DNS Records

Based on your description, you have:

1. **Two "@" A records**: Pointing to IP addresses (likely for Webflow)
2. **google._domainkey record**: For email authentication (DKIM)
3. **www CNAME record**: Pointing to Webflow
4. **"@" TXT record**: `v=spf1 include:_spf.google.com ~all` (SPF email authentication)

### DNS Records to Keep (Do Not Modify)

Keep all email-related records:
- **google._domainkey record**: Essential for email authentication
- **"@" TXT record with SPF data**: `v=spf1 include:_spf.google.com ~all`

### DNS Records to Update

1. **A Records**:
   - Delete the existing "@" A records (which point to Webflow)
   - Add new "@" A records with the IP addresses Render provides
   
2. **WWW Record**:
   - Update the www CNAME record to point to your Render URL instead of Webflow
   - Format: `www.m1labs.io` should point to something like `m1labs-website.onrender.com`

## Step 4: Detailed Steps to Update DNS in Google Domains

1. Log in to [Google Domains](https://domains.google.com/)

2. Select m1labs.io domain

3. Navigate to DNS or Domain Settings

4. Find the "Custom resource records" or "DNS records" section

5. **Update A Records**:
   - Delete the existing "@" A records
   - Add new A records:
     - Type: A
     - Host: @ (leave blank or use @)
     - TTL: 3600 (default)
     - Data: [IP Address provided by Render]
     - Add multiple A records if Render provides multiple IPs

6. **Update WWW Record**:
   - Find the existing www CNAME record
   - Update it to point to your Render URL:
     - Type: CNAME
     - Host: www
     - TTL: 3600 (default)
     - Data: [Your Render URL, e.g., m1labs-website.onrender.com]

7. **Leave Email Records Untouched**:
   - Do not modify the google._domainkey record
   - Do not modify the SPF record (`v=spf1 include:_spf.google.com ~all`)

8. Save your changes

## Step 5: Verify and Wait for DNS Propagation

1. Return to Render and verify your domain
2. Wait for DNS propagation (can take 24-48 hours, but often completes within a few hours)
3. Test your website by visiting m1labs.io
4. Also test that email functionality still works

## Troubleshooting

If your website doesn't load after DNS propagation:
- Check Render logs for any errors
- Verify DNS settings match what Render provides
- Use DNS lookup tools like [dnschecker.org](https://dnschecker.org/) to verify propagation

If email stops working:
- Verify that you didn't accidentally delete or modify the email-related DNS records
- Add back any missing SPF or DKIM records

## Need More Help?

- Render Support: [https://render.com/help](https://render.com/help)
- Google Domains Help: [https://support.google.com/domains/](https://support.google.com/domains/)
