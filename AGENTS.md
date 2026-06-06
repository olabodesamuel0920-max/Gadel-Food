# Gadel Foods Website Project — Agent Context

## Project Overview
Build the complete official website for Gadel Foods, a premium foodstuff concierge service for FUTA (Federal University of Technology, Akure) students. The website replaces the current preview at https://gadel-food.vercel.app/ with a production-ready, custom-domain deployment at gadelfoods.com.

## Business Context
- Client: Gadel Foods (Nigeria)
- Target Users: FUTA students
- Ordering Method: WhatsApp-first (no website checkout)
- Domain: gadelfoods.com (custom domain selected)
- Contact: 0815 762 2574 / WhatsApp +2348157622574

## Tech Stack
- Frontend: HTML5, CSS3 (custom, no frameworks), Vanilla JS
- Backend: Python (Flask-compatible structure, adaptable to any framework)
- Templating: Jinja2
- Icons: Font Awesome 6.4.0
- Fonts: Google Fonts (Playfair Display + Inter)
- Images: Web-optimized JPEGs with warm backgrounds

## File Structure
```
gadel_foods/
├── app.py                    # Main application (routes, data)
├── requirements.txt          # Python dependencies
├── README.md                 # Documentation
├── ANTIPROMPT.md             # Full implementation spec
├── AGENTS.md                 # This file — agent context
├── static/
│   ├── css/                  # (optional external styles)
│   ├── js/                   # (optional external scripts)
│   ├── images/               # 14 processed product photos
│   ├── favicon/              # Favicon set (all sizes)
│   ├── og/                   # Open Graph social images
│   ├── sitemap.xml           # SEO sitemap
│   ├── robots.txt            # Search crawler rules
│   └── site.webmanifest      # PWA manifest
└── templates/
    ├── index.html            # Home page
    ├── products.html         # Product catalog
    ├── packages.html         # Student packages
    ├── about.html            # About/Story/Vision
    ├── contact.html          # Contact/Form
    ├── 404.html              # Error page
    └── 500.html              # Error page
```

## Key Implementation Notes
1. All pages share the same navbar and footer structure
2. WhatsApp integration is CRITICAL — every product/package has order button
3. Prices are real but NOT statutory — add disclaimer
4. Mobile-first responsive design (test on iOS Safari + Android Chrome)
5. SEO: meta descriptions, OG tags, structured data, sitemap
6. Performance: lazy loading, optimized images, fast load (<2s)
7. Accessibility: semantic HTML, alt text, keyboard navigation

## Data Sources
All business data is in app.py:
- BUSINESS_DATA: brand info, colors, contact
- PRODUCTS: 16 items with real prices
- PACKAGES: 2 student bundles with item breakdowns
- VISION_MISSION: story, vision, mission, why_choose
- SERVICE_AREAS: FUTA locations
- OPENING_HOURS: operating schedule

## Design System
- Colors: Primary #1B4D3E (green), Secondary #D4AF37 (gold), Light #FAFAF5
- Fonts: Playfair Display (headings), Inter (body)
- Border radius: 12-25px
- Shadows: subtle, layered
- Animations: fade-in on scroll, hover lift effects
- Breakpoints: 968px (tablet), 640px (mobile)

## WhatsApp Links Format
- Base: https://wa.me/2348157622574
- With message: https://wa.me/2348157622574?text=Hi%2C%20I%27m%20interested%20in...
- Pre-fill product name and price in message

## Images
All 14 product images are in static/images/:
- Processed: enhanced colors, warm background, 800x800px
- Named descriptively: rice_bucket.jpg, beans.jpg, garri.jpg, etc.
- Logo: favicon/android-chrome-512x512.png (green circle, gold G)

## Deployment
- Custom domain: gadelfoods.com
- SSL: required (HTTPS)
- Hosting: Vercel, Heroku, or PythonAnywhere
- Environment: production settings, error logging
