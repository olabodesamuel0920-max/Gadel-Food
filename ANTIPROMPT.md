# ANTIPROMPT: Gadel Foods Official Website — Complete Implementation Spec
# Target: antigravity (AI-powered agent IDE) / Any Python web framework
# Status: Production-ready for gadelfoods.com
# =============================================================================

## 🎯 PROJECT GOAL
Build the complete official website for Gadel Foods — a premium foodstuff concierge 
service for FUTA (Federal University of Technology, Akure) students. Replace the 
current preview at https://gadel-food.vercel.app/ with a production-ready deployment 
at the custom domain gadelfoods.com.

## 🏢 BRAND IDENTITY
```
Name:        Gadel Foods
Tagline:     "Premium Foodstuff Concierge for FUTA Students"
Description: "Gadel Foods exists to make foodstuff purchase affordability and 
              availability the least worries of students in Nigerian tertiary 
              institutions."
Domain:      gadelfoods.com (custom domain — SELECTED)
Contact:     0815 762 2574
WhatsApp:    +234 815 762 2574
Email:       info@gadelfoods.com
```

### Color Palette
- Primary:   #1B4D3E (Deep Green) — brand color, buttons, headers
- Secondary: #D4AF37 (Gold) — accents, highlights, prices
- Accent:    #F5F5DC (Beige) — subtle backgrounds
- Dark:      #0F2E25 (Dark Green) — footer, hover states
- Light:     #FAFAF5 (Off-white) — page backgrounds

### Typography
- Headings:  Playfair Display (Google Fonts) — elegant, serif
- Body:      Inter (Google Fonts) — clean, modern, sans-serif
- Icons:     Font Awesome 6.4.0

### Logo
- Circular green icon with gold "G" letter
- Favicon set: 16x16, 32x32, 180x180 (Apple), 192x192, 512x512 (Android)
- OG Image: 1200x630 (Facebook/Twitter), 1080x1080 (Instagram)

## 📦 REAL PRODUCTS & PRICES (FROM CLIENT)
All prices in Nigerian Naira (₦). Sold per "congo" (local market measurement).

### GRAINS
- Foreign Rice:              ₦2,500/congo
- Nigerian Rice:             ₦2,200/congo
- White Beans:               ₦1,800/congo
- Garri:                     ₦600/congo

### PASTA
- Golden Penny Spaghetti:    ₦1,100/pack
- Crown Spaghetti:           ₦1,100/pack
- Auntie B Spaghetti:        ₦900/pack
- Mama's Pride Spaghetti:    ₦900/pack

### NOODLES
- Indomie Table (Carton):    ₦11,000/carton

### SEASONING
- Curry (1 roll):            ₦900
- Thyme (1 roll):            ₦900
- Maggi Chicken Flavour:     ₦600/pack
- Salt:                      ₦300/pack
- Hot Pepper (1 roll):       ₦700

### OIL
- Palm Oil (1 bottle):       ₦1,500
- Groundnut Oil (1 bottle):  ₦2,100

## 🎁 STUDENT PACKAGES (REAL)

### STARTER PACK — Single Student (₦10,100)
| Item                    | Qty      | Price  |
|-------------------------|----------|--------|
| Nigerian Rice           | 2 congos | ₦4,400 |
| Garri                   | 2 congos | ₦1,200 |
| Spaghetti (Mama's Pride)| 2 packs  | ₦1,800 |
| Groundnut Oil           | 1 bottle | ₦2,100 |
| Salt                    | 1 pack   | ₦300   |
| Maggi (Terra Small)     | 1 pack   | ₦300   |
| **TOTAL**               |          | **₦10,100** |

### ROOMMATE BUNDLE — Shared Living (₦21,900)
| Item                    | Qty      | Price  |
|-------------------------|----------|--------|
| Nigerian Rice           | 5 congos | ₦11,000|
| Garri                   | 4 congos | ₦2,400 |
| Noodles (Half Carton)   | 1 half   | ₦5,500 |
| Groundnut Oil           | 1 bottle | ₦2,100 |
| Salt                    | 1 pack   | ₦300   |
| Maggi (Chicken Flavour) | 1 pack   | ₦600   |
| **TOTAL**               |          | **₦21,900** |

## 📍 SERVICE AREAS
- FUTA North Gate  — Pickup
- FUTA South Gate  — Pickup
- Obanla           — Delivery
- Apatapiti        — Delivery

## 🕐 OPENING HOURS
- Monday–Friday: 8am – 7pm
- Saturday:      9am – 6pm
- Sunday:        Closed

## 📖 COMPANY STORY
"We realized the challenges most students face when they are sent money to get foodstuffs:
1. What to buy in terms of what they need
2. Where to buy at a good price
3. The transport fare to Oja and the stress of carrying loads
4. When to buy due to time factor
5. The problem of foodstuffs finishing towards exam period which destabilizes most students

These were the problems we spotted and these were what formulated our vision and mission."

### Vision
"To build an ecosystem in Nigeria Tertiary institution where foodstuffs purchase is the least worry of students."

### Mission
"Gadel Foods exists to make Foodstuffs easily and readily available to students in Nigeria Tertiary institution through creative ideas and innovation."

### Why Choose Gadel Foods?
1. Affordable pricing tailored for student budgets
2. Convenient delivery around FUTA campus
3. Quality foodstuffs sourced from trusted suppliers
4. WhatsApp-first ordering for easy communication
5. Bulk buying options to save money

## 🌐 WEBSITE PAGES

### 1. HOME PAGE (/)
```
SECTIONS (top to bottom):
├── Navigation Bar
│   ├── Logo (G icon + "Gadel Foods")
│   ├── Links: Home, Products, Packages, About, Contact
│   └── WhatsApp CTA button
│
├── Hero Section
│   ├── Headline: "Foodstuff Shopping, Made Easier for FUTA Students"
│   ├── Subtitle: Bulk buying, budget guidance, stress-free ordering
│   ├── Feature tags: Built for FUTA | Budget-friendly | Bulk Buying | WhatsApp-first
│   └── CTAs: "View Packages" + "Chat on WhatsApp"
│
├── Services Section (4 cards)
│   ├── Bulk Foodstuff Buying
│   ├── Budget Consultation
│   ├── Student-Friendly Bundles
│   └── WhatsApp Ordering
│
├── Products Showcase (8 featured)
│   ├── Product cards with image, name, price, WhatsApp order button
│   └── "View All Products" link
│
├── Student Packages (2 cards)
│   ├── Starter Pack — ₦10,100
│   └── Roommate Bundle — ₦21,900
│
├── How It Works (4 steps)
│   ├── 1. Submit Your Budget
│   ├── 2. Select a Package
│   ├── 3. Confirm Price
│   └── 4. Campus Handover
│
├── Why Choose Us (5 cards with icons)
│   ├── Reduces Market Stress
│   ├── Helps You Plan Better
│   ├── Supports Bulk Buying
│   ├── Saves Academic Time
│   └── Human Concierge
│
├── Location / Service Areas
│   ├── 4 location cards (North Gate, South Gate, Obanla, Apatapiti)
│   └── Opening Hours box
│
├── CTA Banner
│   └── "Ready to Shop?" + WhatsApp button
│
└── Footer
    ├── Brand info + social links
    ├── Quick Links
    ├── Services
    └── Contact info
```

### 2. PRODUCTS PAGE (/products)
```
├── Page Header (green gradient)
│   └── "Our Products" + description
│
├── Category Filter Bar
│   └── All | Grains | Pasta | Noodles | Seasoning | Oil
│
├── Product Grid (16 items)
│   └── Card: image, category badge, name, description, price, WhatsApp order
│
└── Footer
```

### 3. PACKAGES PAGE (/packages)
```
├── Page Header
│   └── "Student Packages" + description
│
├── Package Cards (2)
│   ├── Header: name, subtitle, price
│   ├── Body: item list with quantities and prices
│   └── Footer: WhatsApp order button
│
├── Custom Package Section
│   └── "Need a Custom Package?" + WhatsApp request button
│
└── Footer
```

### 4. ABOUT PAGE (/about)
```
├── Page Header
│
├── The Story (5 problems identified)
│
├── Vision Box (green gradient)
│
├── Mission Box (white with gold border)
│
├── Why Choose Us (5 cards)
│
├── Service Areas (4 location cards)
│
├── Opening Hours
│
└── Footer
```

### 5. CONTACT PAGE (/contact)
```
├── Page Header
│
├── Contact Grid (2 columns)
│   ├── Left: Contact cards
│   │   ├── WhatsApp
│   │   ├── Phone
│   │   ├── Email
│   │   └── Location
│   ├── WhatsApp CTA Banner (green)
│   └── Right: Contact Form
│       ├── Name, Email, Phone, Subject, Message
│       └── Submit button
│
└── Footer
```

## 🎨 DESIGN SPECIFICATIONS

### Visual Style
- Premium, clean, modern aesthetic
- Mobile-first responsive (breakpoints: 968px tablet, 640px mobile)
- Smooth scroll animations (fade-in on scroll via IntersectionObserver)
- Floating cards in hero section with subtle animation
- Gradient backgrounds: green primary, gold accents
- Card-based layouts with layered shadows
- Rounded corners: 12-25px radius
- Consistent spacing: 8px grid system

### Interactions & Animations
```
NAVBAR:
- Fixed position, glassmorphism backdrop (blur 20px)
- Shadow appears on scroll (>50px)
- Mobile: hamburger menu, slide-down animation

PRODUCT CARDS:
- Hover: translateY(-8px) + shadow increase + image scale(1.05)
- Transition: all 0.3s ease

PACKAGE CARDS:
- Hover: border-color change to gold + translateY(-5px)
- Transition: all 0.3s ease

SERVICE/WHY CARDS:
- Hover: translateY(-5px) + shadow
- Transition: all 0.3s ease

BUTTONS:
- Hover: translateY(-2px) + shadow
- Active: scale(0.98)

SCROLL ANIMATIONS:
- Elements fade in + translateY(30px → 0)
- Trigger: IntersectionObserver at 10% threshold
- Duration: 0.6s ease
```

### WhatsApp Integration (CRITICAL)
- Every product card has "Order on WhatsApp" button
- Every package has "Order on WhatsApp" button
- Pre-filled messages include product/package name
- WhatsApp link format: `https://wa.me/2348157622574?text=...`
- Green WhatsApp styling throughout

## 💻 TECHNICAL REQUIREMENTS

### Backend
```python
# Framework: Flask (adaptable to Django/FastAPI/antigravity)
# Routes:
GET  /              → index.html (Home)
GET  /products      → products.html (with ?category filter)
GET  /packages      → packages.html
GET  /about         → about.html
GET  /contact       → contact.html
GET  /api/products  → JSON product list
GET  /api/packages  → JSON package list
GET  /api/business  → JSON business info
GET  /sitemap.xml   → SEO sitemap
GET  /robots.txt    → Crawler rules
GET  /site.webmanifest → PWA manifest
GET  /favicon.ico   → Favicon
```

### Frontend
- HTML5 semantic structure
- Custom CSS (NO Bootstrap/Tailwind — hand-crafted)
- Vanilla JavaScript (no frameworks)
- Google Fonts: Playfair Display + Inter
- Font Awesome 6.4.0 icons
- Intersection Observer API for scroll animations

### SEO & Meta Tags (ALL PAGES)
```html
<!-- Standard -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="...">

<!-- Open Graph (Facebook/LinkedIn) -->
<meta property="og:title" content="Gadel Foods — Premium Foodstuff Concierge">
<meta property="og:description" content="...">
<meta property="og:image" content="/static/og/og-image.png">
<meta property="og:url" content="https://gadelfoods.com/">
<meta property="og:type" content="website">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Gadel Foods">
<meta name="twitter:image" content="/static/og/twitter-card.png">

<!-- Favicon -->
<link rel="icon" type="image/x-icon" href="/favicon.ico">
<link rel="apple-touch-icon" sizes="180x180" href="/static/favicon/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/static/favicon/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/static/favicon/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">
```

### Performance
- Lazy loading for images below fold (`loading="lazy"`)
- Web-optimized images (JPEG quality 90, ~100KB each)
- Minified CSS/JS for production
- Target: < 2 seconds page load
- Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1

### Accessibility
- Semantic HTML (header, nav, main, section, footer)
- Alt text for all images
- ARIA labels where needed
- Keyboard navigation support
- Color contrast ratio ≥ 4.5:1
- Focus indicators on interactive elements

## 📁 FILE STRUCTURE
```
gadel_foods/
├── app.py                          # Main application
├── requirements.txt                # Dependencies (Flask, Pillow, Werkzeug, Jinja2)
├── README.md                       # Documentation
├── ANTIPROMPT.md                   # This spec
├── AGENTS.md                       # Agent context for antigravity
├── static/
│   ├── images/                     # 14 processed product photos
│   │   ├── spaghetti_auntie_b.jpg
│   │   ├── rice_bucket.jpg
│   │   ├── rice_variety.jpg
│   │   ├── gino_tomato.jpg
│   │   ├── gino_peppered_chicken.jpg
│   │   ├── gino_pepper_onion.jpg
│   │   ├── gino_party_jollof.jpg
│   │   ├── tasty_cubes.jpg
│   │   ├── garri.jpg
│   │   ├── indomie.jpg
│   │   ├── groundnut_oil.jpg
│   │   ├── palm_oil.jpg
│   │   ├── beans.jpg
│   │   └── golden_penny_spaghetti.jpg
│   ├── favicon/
│   │   ├── favicon.ico             # Multi-size ICO
│   │   ├── favicon-16x16.png
│   │   ├── favicon-32x32.png
│   │   ├── apple-touch-icon.png    # 180x180
│   │   ├── android-chrome-192x192.png
│   │   └── android-chrome-512x512.png
│   ├── og/
│   │   ├── og-image.png            # 1200x630 (Facebook/LinkedIn)
│   │   ├── twitter-card.png        # 1200x600 (Twitter)
│   │   └── instagram-post.png      # 1080x1080 (Instagram)
│   ├── sitemap.xml                 # SEO sitemap
│   ├── robots.txt                  # Search crawler rules
│   └── site.webmanifest            # PWA manifest
└── templates/
    ├── index.html                  # Home page
    ├── products.html               # Product catalog
    ├── packages.html               # Student packages
    ├── about.html                  # About/Story/Vision
    ├── contact.html                # Contact/Form
    ├── 404.html                    # Error page
    └── 500.html                    # Error page
```

## 🚀 DEPLOYMENT CHECKLIST
- [ ] Set FLASK_ENV=production
- [ ] Configure custom domain (gadelfoods.com)
- [ ] Set up SSL certificate (HTTPS mandatory)
- [ ] Use production WSGI server (Gunicorn/uWSGI)
- [ ] Configure environment variables (SECRET_KEY, etc.)
- [ ] Set up error logging (Sentry or similar)
- [ ] Test all WhatsApp links (pre-filled messages)
- [ ] Verify mobile responsiveness (iOS Safari, Android Chrome)
- [ ] Test page load speed (target < 2s)
- [ ] Submit sitemap to Google Search Console
- [ ] Verify OG tags with Facebook Debugger
- [ ] Test Twitter Cards with Card Validator
- [ ] Enable Google Analytics (optional)
- [ ] Set up business email (info@gadelfoods.com)

## ⚠️ CRITICAL NOTES
1. **Prices are NOT statutory** — add disclaimer: "Prices subject to market rates. Confirm on WhatsApp."
2. **WhatsApp-first ordering** — no checkout/payment on website. All orders go through WhatsApp.
3. **"Congo" unit** — Nigerian market measurement. Explain if needed for non-Nigerian audience.
4. **Custom domain** — gadelfoods.com is the primary recommendation (already selected by client).
5. **Package pricing** — The $100/$250 proposal pricing is for WEBSITE DEVELOPMENT, not product prices.
6. **Image authenticity** — All photos are real product images from Gadel Foods store.
7. **Brand consistency** — Use exact colors, fonts, and tone throughout.
8. **Student focus** — Language, pricing, and UX must resonate with FUTA students.

## 🤖 ANTIGRAVITY-SPECIFIC INSTRUCTIONS
If implementing via antigravity (Google's agent-first IDE):
1. Upload all files from the provided ZIP as project context
2. Use AGENTS.md as the primary context document
3. All business data is in app.py — reference it for accuracy
4. Images are in static/images/ — use them in templates
5. Follow the design system exactly (colors, fonts, spacing)
6. Ensure WhatsApp links work correctly with pre-filled messages
7. Test mobile responsiveness at every step
8. Verify all 5 pages render correctly before deployment
9. Use the OG images and favicon set for social sharing
10. Deploy to gadelfoods.com with SSL enabled

## 📞 CLIENT CONTACT
- Name: Gadel Foods Team
- WhatsApp: +234 815 762 2574
- Phone: 0815 762 2574
- Location: Akure, Ondo State, Nigeria
- Service: FUTA Campus Area
