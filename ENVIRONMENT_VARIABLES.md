# Environment Variables for M1Labs Website Deployment

When deploying your Flask application to a hosting service like Render.com, you'll need to set up environment variables to properly configure your application for production. Here are the environment variables you should set:

## Required Environment Variables

### 1. SECRET_KEY
- **Purpose**: Used by Flask for cryptographically signing session cookies and other security features
- **Value**: A long, random string (at least 24 characters)
- **Example**: `b9c7f46a3c8d7e6f9a2b5c8d7e6f9a2b`
- **Importance**: CRITICAL - Without a strong, unique secret key, your application is vulnerable to security exploits

### 2. FLASK_ENV
- **Purpose**: Determines whether Flask runs in development or production mode
- **Value**: `production`
- **Importance**: HIGH - This disables debug mode, which should never be enabled in production

## Optional Environment Variables

### 3. PORT
- **Purpose**: The port your application will listen on
- **Value**: Usually set automatically by your hosting provider
- **Note**: Most hosting providers like Render.com handle this for you

## How to Set Environment Variables on Render.com

1. Navigate to your service on the Render dashboard
2. Click on "Environment" in the left sidebar
3. Under "Environment Variables", click "Add Environment Variable"
4. Add each variable:
   - KEY: `SECRET_KEY` | VALUE: (a long random string)
   - KEY: `FLASK_ENV` | VALUE: `production`
5. Click "Save Changes"

### Generating a Secure SECRET_KEY

You can generate a secure random string for your SECRET_KEY using Python:

```python
import secrets
print(secrets.token_hex(24))  # Generates a 48-character hex string
```

Or using the terminal:

```bash
openssl rand -hex 24
```

## Security Notes

1. Never hardcode sensitive environment variables like SECRET_KEY in your code
2. Don't store environment variables in files that are committed to version control
3. Regularly rotate your SECRET_KEY for enhanced security
4. Use different SECRET_KEY values for development and production environments

## Additional Environment Variables for Future Features

As your application grows, you might need to add more environment variables for:

- Database connections (DATABASE_URL)
- Email service credentials (SMTP_USER, SMTP_PASSWORD)
- API keys for third-party services
- Storage service credentials (AWS_ACCESS_KEY, etc.)
