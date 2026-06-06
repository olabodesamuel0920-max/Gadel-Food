/**
 * Gadel Foods - Core Frontend Actions JavaScript
 * Handles shared functionalities like navigation scrolling, mobile menu toggle, and scroll reveals
 */

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initScrollReveal();
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
