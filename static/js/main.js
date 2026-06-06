/**
 * Gadel Foods - Core Frontend Actions JavaScript
 * Handles shared functionalities like navigation scrolling, mobile menu toggle, and scroll reveals
 */

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initScrollReveal();
    initStatsCounter();
});

/* ==========================================================================
   1. Navigation & Mobile Menu Functions
   ========================================================================== */
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinks = document.getElementById('nav-links');
    const navItems = document.querySelectorAll('.nav-item');

    // 1a. Sticky scroll background blur/shadow logic
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 1b. Mobile menu drawer toggle
    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileToggle.classList.toggle('mobile-toggle-active');
        });

        // 1c. Close mobile drawer on item click
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileToggle.classList.remove('mobile-toggle-active');
            });
        });
    }
}

/* ==========================================================================
   2. Scroll Reveal Animations
   ========================================================================== */
function initScrollReveal() {
    const revealTargets = document.querySelectorAll('.fade-in-target');
    
    if (revealTargets.length === 0) return;

    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target); // Reveal only once
            }
        });
    };
    
    const observerOptions = {
        root: null,
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };
    
    const observer = new IntersectionObserver(revealCallback, observerOptions);
    
    revealTargets.forEach(target => {
        observer.observe(target);
    });
}

/* ==========================================================================
   3. Stats Counter Animation
   ========================================================================== */
function initStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number');
    const heroStats = document.querySelector('.hero-stats');
    if (!heroStats || statNumbers.length === 0) return;

    const animateCounter = (el) => {
        const target = el.textContent;
        const numeric = parseInt(target.replace(/\D/g, ''));
        const suffix = target.replace(/[0-9]/g, '');
        if (!numeric) return;

        let current = 0;
        const increment = numeric / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= numeric) {
                el.textContent = numeric + suffix;
                clearInterval(timer);
            } else {
                el.textContent = Math.floor(current) + suffix;
            }
        }, 30);
    };

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                statNumbers.forEach(stat => animateCounter(stat));
                statsObserver.disconnect();
            }
        });
    }, { threshold: 0.5 });

    statsObserver.observe(heroStats);
}
