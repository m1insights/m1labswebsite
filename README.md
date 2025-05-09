# M1 Labs Website

A modern, responsive website for M1 Labs showcasing their core products: Synq and Blyss. Built with Python (Flask) backend and modern front-end technologies.

## Overview

This website serves as the new online presence for M1 Labs, highlighting the company's innovative iOS applications:

- **Synq**: A self-study platform for biohackers that helps users analyze the effectiveness of nootropics, lifestyle practices, and combinations of these on various metrics.
- **Blyss**: A productivity and wellness enhancement tool providing meditation timers, breathing exercises, journaling capabilities, and a flow state game.

## Features

- **Sleek, Modern Design**: Dark-themed interface with gradient accents and futuristic aesthetic
- **Responsive Layout**: Adapts seamlessly to all device sizes
- **Interactive Elements**: Smooth animations and transitions
- **Contact Form**: Built-in form for user inquiries
- **Social Media Integration**: Links to Instagram and TikTok accounts
- **Single-Page Application**: All content accessible via smooth scrolling navigation

## Tech Stack

- **Backend**: Flask (Python)
- **Frontend**: HTML5, CSS3, JavaScript
- **CSS Framework**: Bootstrap 5
- **Icons**: Font Awesome
- **Fonts**: Space Mono (monospace), Inter (sans-serif)
- **JavaScript Libraries**: Alpine.js

## Project Structure

```
m1labsweb/
├── app.py                  # Main Flask application
├── requirements.txt        # Python dependencies
├── static/                 # Static files
│   ├── css/
│   │   └── style.css       # Custom styles
│   ├── js/
│   │   └── main.js         # Custom JavaScript
│   └── images/             # Image assets
│       ├── Logo-01.svg     # M1 Labs logo
│       └── hq1.png         # Hero image
└── templates/              # HTML templates
    ├── base.html           # Base template with common elements
    └── index.html          # Main page content
```

## Setup and Running Locally

1. Create a virtual environment:
   ```
   python -m venv venv
   ```

2. Activate the virtual environment:
   - Windows: `venv\Scripts\activate`
   - macOS/Linux: `source venv/bin/activate`

3. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

4. Run the application:
   ```
   python app.py
   ```

5. Open your browser and navigate to `http://127.0.0.1:5000`

## Deployment

For production deployment, consider using a WSGI server like Gunicorn and a reverse proxy like Nginx:

1. Install Gunicorn (already in requirements.txt)
2. Run with Gunicorn:
   ```
   gunicorn -w 4 app:app
   ```

3. Configure Nginx to proxy requests to Gunicorn

## Future Enhancements

- Add actual app screenshots to replace placeholders
- Implement blog section for company updates
- Add animation for the neural network background
- Integrate analytics for tracking user behavior
- Implement dark/light mode toggle

## License

This project is proprietary and confidential. Unauthorized copying, distribution, or use is strictly prohibited.
