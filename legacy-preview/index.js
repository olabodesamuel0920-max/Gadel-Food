/**
 * Gadel Foods Premium Landing Page - Core JavaScript
 * Handles dynamic interactions, navigation triggers, Budget Simulator, and Pack Configurator
 */

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initBudgetSimulator();
    initFutaMap();
    initScrollReveal();
    
    // Developer screenshot helper
    const urlParams = new URLSearchParams(window.location.search);
    const focus = urlParams.get('focus');
    if (focus) {
        document.documentElement.style.scrollBehavior = 'auto';
        const element = document.getElementById(focus === 'budget' ? 'budget-consult' : (focus === 'bundles' ? 'bundles' : ''));
        if (element) {
            window.scrollTo(0, element.offsetTop);
        }
    }
});

/* ==========================================================================
   1. Navigation & Mobile Menu Functionality
   ========================================================================== */
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinks = document.getElementById('nav-links');
    const navItems = document.querySelectorAll('.nav-item');

    // 1a. Sticky scroll blur effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Dynamic Active State Highlight on Scroll
        highlightActiveNavOnScroll();
    });

    // 1b. Mobile menu drawer toggle
    mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileToggle.classList.toggle('mobile-toggle-active');
    });

    // 1c. Close mobile drawer on link click
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileToggle.classList.remove('mobile-toggle-active');
        });
    });

    // Scroll active highlights logic
    function highlightActiveNavOnScroll() {
        const sections = document.querySelectorAll('section');
        const scrollPos = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('href') === `#${sectionId}`) {
                        item.classList.add('active');
                    }
                });
            }
        });
    }
}


/* ==========================================================================
   2. Budget Simulator Tool
   ========================================================================== */
// Data mapping budgets to foodstuff configurations
const BUDGET_DATABASE = {
    // 15k - 20k
    low: {
        staples: {
            name: "Starter Pack (Staples Edition)",
            grains: "Rice (3kg), Beans (2kg), Garri (2kg)",
            liquids: "Vegetable Oil (1L)",
            extras: "Seasoning Cubes, Spaghetti (2pcs), Eggs (1/3 Crate)"
        },
        swallows: {
            name: "Basic swallow Pack",
            grains: "White Garri (4kg), Elubo Yam Flour (2kg)",
            liquids: "Palm Oil (1L)",
            extras: "Soup Spices Pack, Seasoning Cubes, Smoked Fish (1pc)"
        },
        quick: {
            name: "Quick Student Pack",
            grains: "Rice (2.5kg), Noodles (10pcs)",
            liquids: "Vegetable Oil (1L)",
            extras: "Spaghetti (4pcs), Custom Spices Pack"
        }
    },
    // 25k - 35k
    medium: {
        staples: {
            name: "Weekly Foodstuff Pack (Standard)",
            grains: "Rice (5kg), Beans (3kg), Garri (3kg), Sweet Potatoes (3kg)",
            liquids: "Vegetable Oil (1.5L), Palm Oil (1L)",
            extras: "Eggs (1/2 Crate), Spaghetti (4pcs), Seasoning Cube Pack"
        },
        swallows: {
            name: "Classic swallow & Soups Bundle",
            grains: "Semo (3kg), Garri (5kg), Yam Flour (3kg), Yam (2 Tubers)",
            liquids: "Palm Oil (2L)",
            extras: "Crayfish Pack, Seasoning Pack, Pepper & Tomato Mix (Fresh)"
        },
        quick: {
            name: "Fast Cook Student Bundle",
            grains: "Rice (5kg), Spaghetti (6pcs), Noodles (1 Carton)",
            liquids: "Vegetable Oil (2L)",
            extras: "Eggs (1/2 Crate), Seasoning Cubes, Canned Tomatoes (2pcs)"
        }
    },
    // 40k+
    high: {
        staples: {
            name: "Roommate Bulk Pack (Premium Share)",
            grains: "Rice (10kg Sack), Beans (5kg Sack), Garri (5kg), Yam (3 Tubers)",
            liquids: "Vegetable Oil (3L), Palm Oil (2L)",
            extras: "Eggs (1 Crate), Spaghetti (1 Carton), Full Seasoning Box"
        },
        swallows: {
            name: "Supreme Swallow & Yam Feast",
            grains: "Yam (5 Tubers), Garri (10kg), Semo (5kg), Yam Flour (5kg)",
            liquids: "Palm Oil (4L)",
            extras: "Premium Crayfish (Big Pack), Smoked Fish Box, Full Fresh Pepper Mix"
        },
        quick: {
            name: "Mega Fast Foodstuff Supply",
            grains: "Rice (10kg Sack), Spaghetti (1.5 Cartons), Noodles (1.5 Cartons)",
            liquids: "Vegetable Oil (4L)",
            extras: "Eggs (1 Crate), Canned Tomato Carton, Seasoning Box"
        }
    }
};

function initBudgetSimulator() {
    const budgetSlider = document.getElementById('budget-slider');
    const budgetDisplay = document.getElementById('budget-display');
    const preferenceRadios = document.getElementsByName('preference');
    const arrangementRadios = document.getElementsByName('arrangement');
    
    // Output DOM elements
    const recBlueprintName = document.getElementById('rec-blueprint-name');
    const recGrains = document.getElementById('rec-grains');
    const recLiquids = document.getElementById('rec-liquids');
    const recExtras = document.getElementById('rec-extras');
    const calcWhatsappCta = document.getElementById('calc-whatsapp-cta');

    const whatsappNumber = "2348157622574";

    // Update displays and recalculate links
    function updateSimulation() {
        const budgetValue = parseInt(budgetSlider.value);
        budgetDisplay.textContent = `₦${budgetValue.toLocaleString()}`;

        // Determine budget tier
        let tier = 'medium';
        if (budgetValue <= 20000) {
            tier = 'low';
        } else if (budgetValue >= 40000) {
            tier = 'high';
        }

        // Get selected values
        let preference = 'staples';
        for (const radio of preferenceRadios) {
            if (radio.checked) {
                preference = radio.value;
                // Add active styling
                radio.parentElement.classList.add('active');
            } else {
                radio.parentElement.classList.remove('active');
            }
        }

        let arrangement = 'solo';
        for (const radio of arrangementRadios) {
            if (radio.checked) {
                arrangement = radio.value;
                // Add active styling
                radio.parentElement.classList.add('active');
            } else {
                radio.parentElement.classList.remove('active');
            }
        }

        // Fetch matched layout
        const layout = BUDGET_DATABASE[tier][preference];
        
        // Adjust display for arrangement (Duo multiplier simulation)
        let displayName = layout.name;
        if (arrangement === 'duo') {
            displayName = displayName.replace("Starter Pack", "Duo Starter Pack")
                                     .replace("Weekly Foodstuff Pack", "Duo Weekly Pack")
                                     .replace("Roommate Bulk Pack", "Roommate Duo Pack");
        }

        // Render recommended setup details
        recBlueprintName.textContent = `${displayName}`;
        recGrains.textContent = layout.grains;
        recLiquids.textContent = layout.liquids;
        recExtras.textContent = layout.extras;

        // Compose highly personalized WhatsApp redirect link
        const prefText = preference === 'staples' ? 'Balanced Staples Mix' : (preference === 'swallows' ? 'Swallows & Soups' : 'Rice, Pasta & Fast Cook');
        const arrText = arrangement === 'solo' ? 'Solo Student Setup' : 'Duo Roommate Setup';

        const textMessage = `Hi Gadel Foods! 🌾 I used the Budget Simulator on your page and would like a consultation.
Here are my estimated preferences:
- Target Budget: ₦${budgetValue.toLocaleString()}
- Sharing Arrangement: ${arrText}
- Food Preference: ${prefText}

Suggested Blueprint:
- Recommended Pack: ${displayName}
- Est. Grains & Tubers: ${layout.grains}
- Est. Oils & Condiments: ${layout.liquids}
- Est. Extras: ${layout.extras}

*Please let me know if this estimated setup is feasible, and what the final prices are based on current market rates.*`;

        const encodedMessage = encodeURIComponent(textMessage);
        calcWhatsappCta.href = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    }

    // Attach listeners
    if (budgetSlider) {
        budgetSlider.addEventListener('input', updateSimulation);
        
        // Listeners for Preference Radio card toggles
        const preferenceLabels = document.querySelectorAll('.preference-btn');
        preferenceLabels.forEach(label => {
            const input = label.querySelector('input');
            input.addEventListener('change', () => {
                preferenceLabels.forEach(l => l.classList.remove('active'));
                label.classList.add('active');
                updateSimulation();
            });
        });

        // Listeners for Arrangement Radio card toggles
        const arrangementLabels = document.querySelectorAll('.arrangement-btn');
        arrangementLabels.forEach(label => {
            const input = label.querySelector('input');
            input.addEventListener('change', () => {
                arrangementLabels.forEach(l => l.classList.remove('active'));
                label.classList.add('active');
                updateSimulation();
            });
        });

        // Run initial configuration
        updateSimulation();
    }
}


/* ==========================================================================
   3. Interactive Sample Pack Configurator (Modal Dialog)
   ========================================================================== */
const BUNDLE_ITEMS_DATA = {
    starter: {
        title: "Starter Pack Customizer",
        desc: "Ideal basics for a FUTA student kitchen. Swap, add, or remove sample items below to structure your customized inquiry.",
        items: [
            { id: "st-rice", name: "Clean Local Rice (3kg)", price: 3800, checked: true },
            { id: "st-beans", name: "Premium Oloyin Beans (2kg)", price: 2800, checked: true },
            { id: "st-oil", name: "Vegetable Oil (1 Litre Bottle)", price: 2100, checked: true },
            { id: "st-noodles", name: "Indomie Instant Noodles (5pcs)", price: 1250, checked: true },
            { id: "st-spag", name: "Golden Penny Spaghetti (2pcs)", price: 1400, checked: true },
            { id: "st-seasoning", name: "Knorr Seasoning Cube Box", price: 1150, checked: true }
        ]
    },
    weekly: {
        title: "Weekly Pack Customizer",
        desc: "Thoughtfully balanced grains, plant proteins, and fresh ingredients to power your week of study.",
        items: [
            { id: "wk-rice", name: "Clean Local Rice (5kg)", price: 6300, checked: true },
            { id: "wk-beans", name: "Premium Beans (3kg)", price: 4200, checked: true },
            { id: "wk-palm", name: "Fresh Palm Oil (1 Litre Bottle)", price: 1800, checked: true },
            { id: "wk-garri", name: "Ijebu Garri (3kg)", price: 2500, checked: true },
            { id: "wk-eggs", name: "Fresh Farm Eggs (1/2 Crate)", price: 2200, checked: true },
            { id: "wk-veg", name: "Fresh Tomato & Pepper Mix", price: 3500, checked: true },
            { id: "wk-spag", name: "Golden Penny Spaghetti (5pcs)", price: 3500, checked: false }
        ]
    },
    roommate: {
        title: "Roommate Bulk Customizer",
        desc: "Purchase wholesale and split the bill! Large quantities designed for roommate circles.",
        items: [
            { id: "rm-rice", name: "Clean Rice (10kg sack)", price: 12500, checked: true },
            { id: "rm-beans", name: "Beans Sack (5kg)", price: 6800, checked: true },
            { id: "rm-yam", name: "Large Yam Tubers (5 Tubers)", price: 8500, checked: true },
            { id: "rm-palm", name: "Pure Palm Oil (2 Litres Jerrycan)", price: 3600, checked: true },
            { id: "rm-veg", name: "Vegetable Oil (2 Litres Bottle)", price: 4200, checked: true },
            { id: "rm-spag", name: "Spaghetti Carton (20pcs)", price: 9800, checked: true },
            { id: "rm-eggs", name: "Fresh Farm Eggs (1 Crate)", price: 4100, checked: false }
        ]
    }
};

let activePackId = '';
let activePackItems = [];

window.openConfigurator = function(packId) {
    if (!BUNDLE_ITEMS_DATA[packId]) return;
    
    activePackId = packId;
    activePackItems = JSON.parse(JSON.stringify(BUNDLE_ITEMS_DATA[packId].items)); // Deep clone static data
    
    // Set headers
    document.getElementById('modal-pack-title').textContent = BUNDLE_ITEMS_DATA[packId].title;
    document.getElementById('modal-pack-desc').textContent = BUNDLE_ITEMS_DATA[packId].desc;
    
    renderModalItems();
    
    // Open modal
    const modal = document.getElementById('config-modal');
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Lock main scroll
};

window.closeConfigurator = function() {
    const modal = document.getElementById('config-modal');
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = 'auto'; // Unlock main scroll
};

function renderModalItems() {
    const container = document.getElementById('modal-items-container');
    container.innerHTML = '';
    
    activePackItems.forEach((item, index) => {
        const itemLabel = document.createElement('label');
        itemLabel.className = 'modal-item-checkbox';
        
        const checkboxInput = document.createElement('input');
        checkboxInput.type = 'checkbox';
        checkboxInput.checked = item.checked;
        checkboxInput.addEventListener('change', () => {
            activePackItems[index].checked = checkboxInput.checked;
            updateModalCalculations();
        });
        
        const labelText = document.createElement('span');
        labelText.className = 'modal-item-label-text';
        labelText.textContent = item.name;
        
        const priceTag = document.createElement('span');
        priceTag.className = 'modal-item-price-tag';
        priceTag.textContent = `₦${item.price.toLocaleString()}`;
        
        itemLabel.appendChild(checkboxInput);
        itemLabel.appendChild(labelText);
        itemLabel.appendChild(priceTag);
        
        container.appendChild(itemLabel);
    });
    
    updateModalCalculations();
}

function updateModalCalculations() {
    const selectedCountEl = document.getElementById('modal-selected-count');
    const estimatedPriceEl = document.getElementById('modal-estimated-price');
    const selectAllBtn = document.getElementById('modal-select-all');
    const modalCta = document.getElementById('modal-whatsapp-inquiry');
    
    let selectedCount = 0;
    let totalPrice = 0;
    let checklistText = '';
    
    activePackItems.forEach(item => {
        if (item.checked) {
            selectedCount++;
            totalPrice += item.price;
            checklistText += `[✓] ${item.name}\n`;
        } else {
            checklistText += `[x] ${item.name} (Swapped/Removed)\n`;
        }
    });
    
    selectedCountEl.textContent = selectedCount;
    estimatedPriceEl.textContent = `₦${totalPrice.toLocaleString()} (Demo Estimate)`;
    
    // Toggle Select All wording
    const allChecked = activePackItems.every(i => i.checked);
    selectAllBtn.textContent = allChecked ? "Deselect All" : "Select All";
    
    // WhatsApp Inquiry compose
    const packName = BUNDLE_ITEMS_DATA[activePackId].title.replace(" Customizer", "");
    const whatsappNumber = "2348157622574";
    
    const textMessage = `Hi Gadel Foods! 🌾 I configured a custom version of the ${packName} on your landing page.

Here is my preferred checklist request:
${checklistText}
Demo Estimated Cost: ₦${totalPrice.toLocaleString()}

*Can you please confirm current stock availability and official price calculations for this configuration?*`;

    const encodedMessage = encodeURIComponent(textMessage);
    modalCta.href = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
}

window.toggleAllItems = function() {
    const allChecked = activePackItems.every(i => i.checked);
    activePackItems.forEach(item => {
        item.checked = !allChecked;
    });
    renderModalItems();
};


/* ==========================================================================
   4. Interactive FUTA Pickup/Delivery Zone Switcher
   ========================================================================== */
const ZONE_DATABASE = {
    north: {
        title: "🏫 North Gate Area (Campus Boundary)",
        desc: "Ideal handover location for students residing in Obanla, North Gate close compounds, or exiting campus after late labs. Easily schedule a pickup on WhatsApp.",
        tag: "Standard North Gate Handover"
    },
    south: {
        title: "🏫 South Gate Area (Hostel Hub)",
        desc: "Excellent pickup point for students living in South Gate hostels, Apatapiti, and close off-campus apartments. Simple handovers coordinated easily on WhatsApp.",
        tag: "Standard South Gate Handover"
    },
    west: {
        title: "🏫 West Gate Area (Residency Hub)",
        desc: "Serves off-campus hostels around West Gate and surrounding residential loops. Inquire on WhatsApp to map out a convenient meeting coordinate.",
        tag: "West Gate Coordination Point"
    },
    offcampus: {
        title: "🏡 Obanla / Apatapiti Core Student Areas",
        desc: "For heavy bulk orders (like the Roommate Bulk Pack), we help coordinate custom drop-off negotiations to hostels near the central off-campus roads. Talk with Gadel Foods on WhatsApp.",
        tag: "Heavy Pack Drop-off Negotiation"
    }
};

window.selectZone = function(zoneId) {
    if (!ZONE_DATABASE[zoneId]) return;
    
    // Update map active class
    const nodes = document.querySelectorAll('.map-node');
    nodes.forEach(node => {
        node.classList.remove('active');
        if (node.classList.contains(`node-${zoneId}`)) {
            node.classList.add('active');
        }
    });
    
    // Update details panel with smooth fade in
    const titleEl = document.getElementById('zone-title');
    const descEl = document.getElementById('zone-description');
    const statusEl = document.getElementById('zone-status');
    const detailsBox = document.getElementById('zone-details-box');
    
    detailsBox.style.opacity = '0.4';
    
    setTimeout(() => {
        titleEl.textContent = ZONE_DATABASE[zoneId].title;
        descEl.textContent = ZONE_DATABASE[zoneId].desc;
        statusEl.textContent = ZONE_DATABASE[zoneId].tag;
        detailsBox.style.opacity = '1';
    }, 150);
};


/* ==========================================================================
   5. Lightweight Scroll Reveal Animations
   ========================================================================== */
function initScrollReveal() {
    // Select elements to reveal
    const revealTargets = document.querySelectorAll('.feature-card, .service-card, .bundle-card, .trust-card, .step-item');
    
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
        // Pre-revealed styling defaults handled by CSS transitions
        target.style.opacity = '0';
        target.style.transform = 'translateY(25px)';
        target.style.transition = 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(target);
    });
    
    // Inject reveal class execution into DOM
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
        .revealed {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(styleSheet);
}
