# Gadel Foods — Official Website

A premium foodstuff concierge website built for FUTA students.

## Features

- **Home Page**: Hero section, services, products showcase, packages, how it works, why choose us, location info
- **Products Page**: Full product catalog with filtering by category
- **Packages Page**: Student bundles (Starter Pack, Roommate Bundle) + custom package request
- **About Page**: Company story, vision, mission, service areas, opening hours
- **Contact Page**: Contact info, WhatsApp integration, contact form
- **WhatsApp Integration**: One-click ordering via WhatsApp throughout the site

## Tech Stack

- Python 3.8+
- Flask (web framework)
- Jinja2 (templating)
- Custom CSS (no external CSS frameworks)
- Google Fonts (Playfair Display + Inter)
- Font Awesome icons

## Installation

```bash
# Clone or extract the project
cd gadel_foods

# Create virtual environment
python -m venv venv

# Activate virtual environment
# Windows: venv\Scripts\activate
# Mac/Linux: source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run the application
python app.py
```

The site will be available at `http://localhost:5000`

## Real Business Data

All content is populated with real data from the Gadel Foods WhatsApp conversation:
- Actual product prices (Rice ₦2,200-2,500, Beans ₦1,800, Garri ₦600, etc.)
- Real student packages (Starter Pack ₦10,100, Roommate Bundle ₦21,900)
- Authentic business description and vision/mission statements
- Correct contact info: 0815 762 2574
- Service areas: FUTA North Gate, South Gate, Obanla, Apatapiti

## Images

All product images have been professionally processed:
- Enhanced colors and sharpness
- Warm off-white background canvas
- Consistent sizing (800x800px)
- Web-optimized JPEG quality

## Deployment

For production deployment:
1. Set `FLASK_ENV=production`
2. Use a production WSGI server (Gunicorn)
3. Configure a custom domain (gadelfoods.com recommended)
4. Set up SSL certificate

## Contact

Gadel Foods
- WhatsApp: +234 815 762 2574
- Phone: 0815 762 2574
- Email: info@gadelfoods.com
