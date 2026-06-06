#!/bin/bash
# Gadel Foods — Quick Deployment Script
# Usage: ./deploy.sh [environment]
# =============================================================================

set -e

ENV=${1:-production}
echo "🚀 Gadel Foods Deployment — Environment: $ENV"
echo "================================================"

# Check Python version
python_version=$(python3 --version 2>&1 | awk '{print $2}')
echo "✓ Python version: $python_version"

# Create virtual environment if not exists
if [ ! -d "venv" ]; then
    echo "📦 Creating virtual environment..."
    python3 -m venv venv
fi

# Activate virtual environment
echo "🔌 Activating virtual environment..."
source venv/bin/activate

# Upgrade pip
echo "⬆️  Upgrading pip..."
pip install --upgrade pip

# Install dependencies
echo "📥 Installing dependencies..."
pip install -r requirements.txt

# Verify installation
echo "🔍 Verifying installation..."
python -c "import flask; print(f'✓ Flask {flask.__version__} installed')"
python -c "import PIL; print(f'✓ Pillow {PIL.__version__} installed')"

# Set environment variables
export FLASK_APP=app.py
export FLASK_ENV=$ENV

if [ "$ENV" = "production" ]; then
    export SECRET_KEY=$(python -c "import secrets; print(secrets.token_hex(32))")
    echo "🔐 Production SECRET_KEY generated"

    # Production checks
    echo "🛡️  Running production checks..."

    # Check if Gunicorn is installed for production
    if ! python -c "import gunicorn" 2>/dev/null; then
        echo "⚠️  Gunicorn not installed. Installing..."
        pip install gunicorn
    fi

    echo ""
    echo "✅ Production setup complete!"
    echo ""
    echo "🚀 To start the production server, run:"
    echo "   gunicorn -w 4 -b 0.0.0.0:8000 app:app"
    echo ""
    echo "📝 Or use a process manager like systemd/supervisor"

else
    echo "🛠️  Development setup complete!"
    echo ""
    echo "🚀 To start the development server, run:"
    echo "   python app.py"
    echo ""
    echo "🌐 The site will be available at: http://localhost:5000"
fi

echo ""
echo "📋 Next Steps:"
echo "   1. Configure your domain (gadelfoods.com)"
echo "   2. Set up SSL certificate (Let's Encrypt)"
echo "   3. Update DNS records"
echo "   4. Test WhatsApp links"
echo "   5. Submit sitemap to Google Search Console"
echo ""
echo "📞 Support: info@gadelfoods.com | +234 815 762 2574"
