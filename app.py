
from flask import Flask, render_template, request, jsonify, send_from_directory, abort
import os
from datetime import datetime

app = Flask(__name__)
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', 'gadel-foods-secret-key-2026')

# =============================================================================
# BUSINESS DATA (REAL — FROM WHATSAPP CONVERSATION)
# =============================================================================

BUSINESS_DATA = {
    "name": "Gadel Foods",
    "tagline": "Premium Foodstuff Concierge for FUTA Students",
    "description": "Gadel Foods exists to make foodstuff purchase affordability and availability the least worries of students in Nigerian tertiary institutions.",
    "contact": "0815 762 2574",
    "whatsapp": "2348157622574",
    "email": "info@gadelfoods.com",
    "domain": "gadelfoods.com",
    "brand_colors": {
        "primary": "#1B4D3E",
        "secondary": "#D4AF37",
        "accent": "#F5F5DC",
        "dark": "#0F2E25",
        "light": "#FAFAF5"
    }
}

# =============================================================================
# PRODUCTS (WITH REAL PRICES FROM CLIENT)
# =============================================================================

PRODUCTS = [
    {"id": 1, "name": "Foreign Rice", "price": 2500, "unit": "per congo", "image": "foreign-rice.png", "category": "grains", "description": "Premium foreign rice, perfect for students"},
    {"id": 2, "name": "Nigerian Rice", "price": 2200, "unit": "per congo", "image": "nigerian-rice.png", "category": "grains", "description": "Local Nigerian rice, affordable and nutritious"},
    {"id": 3, "name": "White Beans", "price": 1800, "unit": "per congo", "image": "white-beans.png", "category": "grains", "description": "Clean white beans for your daily meals"},
    {"id": 4, "name": "Garri", "price": 600, "unit": "per congo", "image": "garri.png", "category": "grains", "description": "Premium garri for eba and soaking"},
    {"id": 5, "name": "Golden Penny Spaghetti", "price": 1100, "unit": "per pack", "image": "golden-penny-spaghetti.jpg", "category": "pasta", "description": "Quality spaghetti from Golden Penny"},
    {"id": 6, "name": "Crown Spaghetti", "price": 1100, "unit": "per pack", "image": "crown-spaghetti.png", "category": "pasta", "description": "Crown spaghetti, student favorite"},
    {"id": 7, "name": "Auntie B Spaghetti", "price": 900, "unit": "per pack", "image": "auntie-b-spaghetti.png", "category": "pasta", "description": "Affordable Auntie B spaghetti"},
    {"id": 8, "name": "Mama's Pride Spaghetti", "price": 900, "unit": "per pack", "image": "mamas_pride_spaghetti.png", "category": "pasta", "description": "Mama's Pride quality pasta"},
    {"id": 9, "name": "Indomie Table (Carton)", "price": 11000, "unit": "per carton", "image": "indomie.jpg", "category": "noodles", "description": "Full carton of Indomie instant noodles"},
    {"id": 10, "name": "Tomato Seasoning (1 roll)", "price": 900, "unit": "per roll", "image": "tomato-seasoning.png", "category": "seasoning", "description": "Rich tomato seasoning mix for student meals"},
    {"id": 11, "name": "Thyme (1 roll)", "price": 900, "unit": "per roll", "image": "tomato-seasoning.png", "category": "seasoning", "description": "Thyme seasoning for aromatic dishes"},
    {"id": 12, "name": "Maggi Chicken Flavour", "price": 600, "unit": "per pack", "image": "tasty-cubes.png", "category": "seasoning", "description": "Maggi chicken seasoning cubes"},
    {"id": 13, "name": "Salt", "price": 300, "unit": "per pack", "image": "salt.jpg", "category": "seasoning", "description": "Essential cooking salt"},
    {"id": 14, "name": "Hot Pepper (1 roll)", "price": 700, "unit": "per roll", "image": "hot_pepper_powder.jpg", "category": "seasoning", "description": "Hot pepper for spicy dishes"},
    {"id": 15, "name": "Palm Oil (1 bottle)", "price": 1500, "unit": "per bottle", "image": "palm-oil.png", "category": "oil", "description": "Pure palm oil for cooking"},
    {"id": 16, "name": "Groundnut Oil (1 bottle)", "price": 2100, "unit": "per bottle", "image": "groundnut-oil.png", "category": "oil", "description": "Quality groundnut oil"}
]

# =============================================================================
# STUDENT PACKAGES (REAL FROM CLIENT)
# =============================================================================

PACKAGES = [
    {
        "id": "starter",
        "name": "Starter Pack",
        "subtitle": "Single Student",
        "price": 10100,
        "items": [
            {"name": "Nigerian Rice", "qty": "2 congos", "price": 4400, "qty_val": 2, "unit": "congo", "unit_price": 2200},
            {"name": "Garri", "qty": "2 congos", "price": 1200, "qty_val": 2, "unit": "congo", "unit_price": 600},
            {"name": "Spaghetti (Mama's Pride)", "qty": "2 packs", "price": 1800, "qty_val": 2, "unit": "pack", "unit_price": 900},
            {"name": "Groundnut Oil", "qty": "1 bottle", "price": 2100, "qty_val": 1, "unit": "bottle", "unit_price": 2100},
            {"name": "Salt", "qty": "1 pack", "price": 300, "qty_val": 1, "unit": "pack", "unit_price": 300},
            {"name": "Maggi (Terra Small)", "qty": "1 pack", "price": 300, "qty_val": 1, "unit": "pack", "unit_price": 300}
        ],
        "image": "rice_bucket.jpg",
        "description": "Perfect for students who need basic survival staples"
    },
    {
        "id": "roommate",
        "name": "Roommate Bundle",
        "subtitle": "Shared Living",
        "price": 21900,
        "items": [
            {"name": "Nigerian Rice", "qty": "5 congos", "price": 11000, "qty_val": 5, "unit": "congo", "unit_price": 2200},
            {"name": "Garri", "qty": "4 congos", "price": 2400, "qty_val": 4, "unit": "congo", "unit_price": 600},
            {"name": "Noodles (Half Carton)", "qty": "1 half", "price": 5500, "qty_val": 1, "unit": "half", "unit_price": 5500},
            {"name": "Groundnut Oil", "qty": "1 bottle", "price": 2100, "qty_val": 1, "unit": "bottle", "unit_price": 2100},
            {"name": "Salt", "qty": "1 pack", "price": 300, "qty_val": 1, "unit": "pack", "unit_price": 300},
            {"name": "Maggi (Chicken Flavour)", "qty": "1 pack", "price": 600, "qty_val": 1, "unit": "pack", "unit_price": 600}
        ],
        "image": "beans.jpg",
        "description": "Combine budgets with your roommate for better rates"
    }
]

# =============================================================================
# VISION & MISSION (FROM CLIENT)
# =============================================================================

VISION_MISSION = {
    "vision": "To build an ecosystem in Nigeria Tertiary institution where foodstuffs purchase is the least worry of students.",
    "mission": "Gadel Foods exists to make Foodstuffs easily and readily available to students in Nigeria Tertiary institution through creative ideas and innovation.",
    "why_choose": [
        "Affordable pricing tailored for student budgets",
        "Convenient delivery around FUTA campus",
        "Quality foodstuffs sourced from trusted suppliers",
        "WhatsApp-first ordering for easy communication",
        "Bulk buying options to save money"
    ]
}

# =============================================================================
# SERVICE AREAS
# =============================================================================

SERVICE_AREAS = [
    {"name": "FUTA North Gate", "type": "pickup"},
    {"name": "FUTA South Gate", "type": "pickup"},
    {"name": "Obanla", "type": "delivery"},
    {"name": "Apatapiti", "type": "delivery"}
]

# =============================================================================
# OPENING HOURS
# =============================================================================

OPENING_HOURS = {
    "monday_friday": "8am - 7pm",
    "saturday": "9am - 6pm",
    "sunday": "Closed"
}

# =============================================================================
# ROUTES
# =============================================================================

@app.route('/')
def index():
    """Home page — main landing page"""
    return render_template('index.html',
                         business=BUSINESS_DATA,
                         products=PRODUCTS,
                         packages=PACKAGES,
                         vision_mission=VISION_MISSION,
                         service_areas=SERVICE_AREAS,
                         opening_hours=OPENING_HOURS)

@app.route('/products')
def products():
    """Products catalog page with category filtering"""
    category = request.args.get('category', 'all')
    if category != 'all':
        filtered = [p for p in PRODUCTS if p['category'] == category]
    else:
        filtered = PRODUCTS
    return render_template('products.html',
                         business=BUSINESS_DATA,
                         products=filtered,
                         category=category)

@app.route('/packages')
def packages():
    """Student packages page"""
    return render_template('packages.html',
                         business=BUSINESS_DATA,
                         packages=PACKAGES)

@app.route('/about')
def about():
    """About page — company story, vision, mission"""
    return render_template('about.html',
                         business=BUSINESS_DATA,
                         vision_mission=VISION_MISSION,
                         service_areas=SERVICE_AREAS,
                         opening_hours=OPENING_HOURS)

@app.route('/contact')
def contact():
    """Contact page — form and contact info"""
    return render_template('contact.html',
                         business=BUSINESS_DATA)

# =============================================================================
# API ENDPOINTS
# =============================================================================

@app.route('/api/products')
def api_products():
    """JSON API for all products"""
    return jsonify({
        "status": "success",
        "count": len(PRODUCTS),
        "data": PRODUCTS
    })

@app.route('/api/packages')
def api_packages():
    """JSON API for all packages"""
    return jsonify({
        "status": "success",
        "count": len(PACKAGES),
        "data": PACKAGES
    })

@app.route('/api/business')
def api_business():
    """JSON API for business info"""
    return jsonify({
        "status": "success",
        "data": BUSINESS_DATA
    })

# =============================================================================
# STATIC FILES & SEO
# =============================================================================

@app.route('/sitemap.xml')
def sitemap():
    """Serve sitemap.xml"""
    return send_from_directory('static', 'sitemap.xml', mimetype='application/xml')

@app.route('/robots.txt')
def robots():
    """Serve robots.txt"""
    return send_from_directory('static', 'robots.txt', mimetype='text/plain')

@app.route('/site.webmanifest')
def webmanifest():
    """Serve PWA manifest"""
    return send_from_directory('static', 'site.webmanifest', mimetype='application/manifest+json')

@app.route('/favicon.ico')
def favicon():
    """Serve favicon"""
    return send_from_directory('static/favicon', 'favicon.ico', mimetype='image/x-icon')

# =============================================================================
# ERROR HANDLERS
# =============================================================================

@app.errorhandler(404)
def not_found(error):
    """404 error page"""
    return render_template('404.html'), 404

@app.errorhandler(500)
def server_error(error):
    """500 error page"""
    return render_template('500.html'), 500

# =============================================================================
# CONTEXT PROCESSORS
# =============================================================================

@app.context_processor
def inject_globals():
    """Make business data available in all templates"""
    return {
        'business': BUSINESS_DATA,
        'current_year': datetime.now().year
    }

# =============================================================================
# MAIN
# =============================================================================

if __name__ == '__main__':
    # Development server
    app.run(debug=True, host='0.0.0.0', port=5000)
