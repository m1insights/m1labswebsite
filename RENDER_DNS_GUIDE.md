# How to Get DNS Records from Render.com

This step-by-step guide with screenshots will show you how to obtain the necessary DNS records from Render.com after deploying your website.

## Step 1: Deploy Your Website on Render

First, make sure your website is deployed on Render.com by following the steps in the DEPLOYMENT_GUIDE.md file.

## Step 2: Navigate to Your Web Service Dashboard

After logging into Render.com:

1. Click on your web service (likely named "m1labs-website" or similar)
2. You'll be taken to the dashboard for that service

## Step 3: Access the Custom Domain Settings

1. In the left sidebar, click on "Settings"
2. Then click on "Custom Domain" in the settings menu

![Render Settings Menu](https://render-examples.onrender.com/static/docs/custom-domains-menu.png)

## Step 4: Add Your Custom Domain

1. Click the "Add Custom Domain" button
2. Enter your domain: `m1labs.io`
3. Click "Save"

![Add Custom Domain](https://render-examples.onrender.com/static/docs/add-custom-domain.png)

## Step 5: View DNS Configuration Instructions

After adding your domain, Render will display the DNS configuration panel with specific instructions:

![DNS Configuration](https://render-examples.onrender.com/static/docs/dns-configuration.png)

**This is where you'll find the A records and/or CNAME records you need.**

## Step 6: Copy the DNS Records

Render typically provides one of two configurations:

### Option A: A Records
If Render provides A records, you'll see:
- Record Type: A
- Name/Host: @ (or blank)
- Value: [IP Address provided by Render]

Render might provide multiple IP addresses for redundancy. You should copy all of them.

### Option B: CNAME Record
Sometimes Render will recommend using a CNAME record:
- Record Type: CNAME
- Name/Host: @ (or blank)  
- Value: [something].render.com

## Important Notes

1. **Record the values exactly as shown in Render's interface**
   - The specific IP addresses or CNAME values are unique to your deployment

2. **Render provides verification instructions**
   - Follow these to confirm your DNS is set up correctly

3. **SSL Certificate**
   - After DNS is configured, Render will automatically provision an SSL certificate

## Example of What You'll See

Here's an example of what the DNS configuration screen might look like:

```
To point m1labs.io to this service:

A RECORD:
        Host: @ (or leave blank)
        Value: 75.2.60.5
        TTL: 3600 (or default)

For www.m1labs.io, add:
CNAME RECORD:
        Host: www
        Value: m1labs-website.onrender.com
        TTL: 3600 (or default)
```

The actual values will be specific to your deployment.

## Troubleshooting

If you don't see DNS information:
1. Make sure your service is fully deployed (not still building)
2. Try refreshing the page
3. Ensure you've completed the "Add Custom Domain" step
4. Contact Render support if the information doesn't appear

Remember to update only the records mentioned in the DNS_MIGRATION_GUIDE.md file, keeping your email-related records intact.
