@echo off
REM Gadel Foods — Quick Deployment Script (Windows)
REM Usage: deploy.bat [environment]
REM =============================================================================

set ENV=%1
if "%ENV%"=="" set ENV=development

echo 🚀 Gadel Foods Deployment — Environment: %ENV%
echo ================================================================

REM Check Python
python --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Python not found. Please install Python 3.8+ first.
    exit /b 1
)

REM Create virtual environment
if not exist "venv" (
    echo 📦 Creating virtual environment...
    python -m venv venv
)

REM Activate virtual environment
echo 🔌 Activating virtual environment...
call venv\Scripts\activate.bat

REM Upgrade pip
echo ⬆️  Upgrading pip...
python -m pip install --upgrade pip

REM Install dependencies
echo 📥 Installing dependencies...
pip install -r requirements.txt

REM Set environment
set FLASK_APP=app.py
set FLASK_ENV=%ENV%

if "%ENV%"=="production" (
    echo 🛡️  Production mode selected
    echo ⚠️  For production, consider using waitress or waitress-serve
    echo 🚀 To start: waitress-serve --port=8000 app:app
) else (
    echo 🛠️  Development mode
    echo 🚀 To start: python app.py
    echo 🌐 Site: http://localhost:5000
)

echo.
echo 📋 Next Steps:
echo    1. Configure domain (gadelfoods.com)
echo    2. Set up SSL certificate
echo    3. Test WhatsApp links
echo.
pause
