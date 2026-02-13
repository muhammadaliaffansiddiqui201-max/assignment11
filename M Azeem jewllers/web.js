// --- Navigation Logic ---
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    // Toggle Nav
    if (burger) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            burger.classList.toggle('toggle');

            // Animate Links
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });
        });
    }

    // Close Nav on Link Click (Mobile UX Fix)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
            navLinks.forEach(link => link.style.animation = '');
        });
    });
}

// Invoke function
navSlide();


// --- Product Filtering & Active Link Logic ---
const navItems = document.querySelectorAll('.nav-item');
const dropdownLinks = document.querySelectorAll('.dropdown-menu a');

// Note: productCards needs to be re-queried because they are now dynamic
const getProductCards = () => document.querySelectorAll('.product-card');

// --- Filter & Search Logic ---
const filterProducts = (filterValue, searchText = '') => {
    const cards = getProductCards();
    const lowerSearch = searchText.toLowerCase();

    console.log(`Filtering: category="${filterValue}", search="${searchText}", found ${cards.length} cards`);

    let visibleCount = 0;
    cards.forEach(card => {
        const category = card.getAttribute('data-category') || '';
        const titleElement = card.querySelector('h3');
        const title = titleElement ? titleElement.innerText.toLowerCase() : '';
        const tags = category.split(' '); // Allow multiple categories e.g. "gold mens"

        // Check Category Match
        const categoryMatch = (filterValue === 'all') || tags.includes(filterValue);

        // Check Search Match
        const searchMatch = (searchText === '') || title.includes(lowerSearch) || category.includes(lowerSearch);

        if (categoryMatch && searchMatch) {
            card.style.display = 'flex';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });

    console.log(`Showing ${visibleCount} products`);

    // Update search results counter
    const resultsCounter = document.getElementById('search-results');
    if (resultsCounter) {
        if (searchText !== '' || filterValue !== 'all') {
            resultsCounter.textContent = `${visibleCount} found`;
            resultsCounter.style.display = 'block';
        } else {
            resultsCounter.style.display = 'none';
        }
    }

    // Scroll to products section smoothly after filtering
    const collectionsSection = document.getElementById('collections');
    if (collectionsSection && (filterValue !== 'all' || searchText !== '')) {
        collectionsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};

// Global State
let currentCategory = 'all';

// Initialize filters after a short delay to ensure products are loaded
setTimeout(() => {
    console.log('Initializing filters and search...');

    // Handle Search Input
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        console.log('Search input found');
        searchInput.addEventListener('input', (e) => {
            const searchText = e.target.value;
            console.log('Search input:', searchText);
            filterProducts(currentCategory, searchText);
        });
    } else {
        console.log('Search input NOT found');
    }

    // Add click handler to result counter
    const resultsCounter = document.getElementById('search-results');
    if (resultsCounter) {
        resultsCounter.addEventListener('click', () => {
            // Scroll down to products
            const gridContainer = document.querySelector('.grid-container');
            if (gridContainer) {
                gridContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            // Remove focus from search bar
            if (searchInput) {
                searchInput.blur();
            }
        });
    }

    // Handle Dropdown Clicks
    const dropdownLinks = document.querySelectorAll('.dropdown-menu a');
    console.log(`Found ${dropdownLinks.length} dropdown links`);

    dropdownLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent navigation

            const filter = link.getAttribute('data-filter');
            console.log('Category clicked:', filter);
            currentCategory = filter; // Update global state

            // Clear search when switching categories
            if (searchInput) searchInput.value = '';

            filterProducts(currentCategory, '');

            // 1. Highlight Parent "Collections"
            navItems.forEach(nav => nav.classList.remove('active'));
            const parentLink = link.closest('.dropdown-trigger');
            if (parentLink) {
                const parentNavItem = parentLink.querySelector('.nav-item');
                if (parentNavItem) parentNavItem.classList.add('active');
            }

            // 2. Highlight Specific Dropdown Item
            dropdownLinks.forEach(d => d.style.color = '');
            link.style.color = 'var(--primary-gold)';

            // Close Mobile Menu
            const nav = document.querySelector('.nav-links');
            const burger = document.querySelector('.burger');
            if (nav && burger && nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
            }
        });
    });

    console.log('Filters initialized successfully');
}, 200);

// Handle Main Nav Clicks (Home, About, Contact)
navItems.forEach(link => {
    link.addEventListener('click', function () {
        // Remove active from all
        navItems.forEach(nav => nav.classList.remove('active'));
        // Add active to clicked
        this.classList.add('active');

        // If "Collections" clicked directly, show all
        if (this.getAttribute('href') === '#collections') {
            filterProducts('all');
        }
    });
});

// --- Live Gold Rate Logic ---
const updateGoldRate = async () => {
    try {
        // 1. Fetch Gold Price in USD per Ounce
        const goldResponse = await fetch('https://data-asg.goldprice.org/dbXRates/USD');
        const goldData = await goldResponse.json();
        const goldPriceUSD_oz = goldData.items[0].xauPrice;
        const silverPriceUSD_oz = goldData.items[0].xagPrice;

        // 2. Fetch USD to PKR Exchange Rate
        const currencyResponse = await fetch('https://open.er-api.com/v6/latest/USD');
        const currencyData = await currencyResponse.json();
        const usdToPkr = currencyData.rates.PKR;

        // 3. Conversions
        // 1 Troy Ounce = 31.1035 grams
        // 1 Tola = 11.664 grams
        const goldPriceUSD_gram = goldPriceUSD_oz / 31.1035;
        const goldPricePKR_gram = goldPriceUSD_gram * usdToPkr;
        const goldPricePKR_tola = goldPricePKR_gram * 11.664;
        const silverPriceUSD_gram = silverPriceUSD_oz / 31.1035;
        const silverPricePKR_gram = silverPriceUSD_gram * usdToPkr;
        const silverPricePKR_tola = silverPricePKR_gram * 11.664;

        // Add a small premium for local market difference (e.g., Making/Import/Duty ~2-3%)
        // or just use raw international rate. Let's keep it raw for now or add small buffer.
        const marketRate24k = Math.floor(goldPricePKR_tola);

        // Calculate Purities
        const rate24k = marketRate24k;
        const rate22k = Math.floor(marketRate24k * 0.9166);
        const rate21k = Math.floor(marketRate24k * 0.8750);
        const rate18k = Math.floor(marketRate24k * 0.7500);
        const silverRate = Number.isFinite(silverPricePKR_tola) ? Math.floor(silverPricePKR_tola) : null;

        // Format Number
        const formatCurrency = (num) => {
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        };

        // Update DOM
        const rate24kEl = document.getElementById('rate-24k');
        const rate22kEl = document.getElementById('rate-22k');
        const rate21kEl = document.getElementById('rate-21k');
        const rate18kEl = document.getElementById('rate-18k');
        const silverEl = document.getElementById('silver');
        const timeEl = document.getElementById('rate-time');

        if (rate24kEl) rate24kEl.innerText = `24K Gold: Rs. ${formatCurrency(rate24k)} / Tola`;
        if (rate22kEl) rate22kEl.innerText = `22K Gold: Rs. ${formatCurrency(rate22k)} / Tola`;
        if (rate21kEl) rate21kEl.innerText = `21K Gold: Rs. ${formatCurrency(rate21k)} / Tola`;
        if (rate18kEl) rate18kEl.innerText = `18K Gold: Rs. ${formatCurrency(rate18k)} / Tola`;
        if (silverEl && silverRate !== null) silverEl.innerText = `Silver: Rs. ${formatCurrency(silverRate)} / Tola`;

        // Update Time
        const now = new Date();
        if (timeEl) timeEl.innerText = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    } catch (error) {
        console.error("Error fetching gold rates:", error);
        // Fallback if API fails (approximate values)
        // You can leave old values or show "Error"
    }
};

// Update immediately then every 5 minutes (300000 ms) to avoid rate limits
updateGoldRate();
setInterval(updateGoldRate, 300000);


// --- Buy Now Modal Logic (Simplified) ---
// Global Selection
const modal = document.getElementById('payment-modal');
const closeModal = document.querySelector('.close-modal');
const quantityInput = document.getElementById('quantity');
let selectedUnitPrice = 0;

const formatPKRAmount = (amount) => `Rs. ${Math.round(amount).toLocaleString('en-PK')}`;
const parsePKRAmount = (priceText) => {
    const numeric = (priceText || '').replace(/[^\d]/g, '');
    return numeric ? Number(numeric) : 0;
};

const getProductType = (category, name) => {
    const lowerCategory = (category || '').toLowerCase();
    const lowerName = (name || '').toLowerCase();

    if (lowerCategory === 'gold' || lowerCategory === 'premium') return 'Gold';
    if (lowerCategory === 'silver') return 'Silver';
    if (lowerCategory === 'diamond') return 'Diamond';
    if (lowerCategory === 'artificial') return 'Artificial';

    if (lowerCategory === 'mens collection') {
        if (lowerName.includes('diamond')) return 'Diamond';
        if (lowerName.includes('silver')) return 'Silver';
        if (lowerName.includes('gold') || lowerName.includes('signet')) return 'Gold';
        return 'Artificial';
    }

    return 'Artificial';
};

const getProductCarat = (type, weightText) => {
    if (type === 'Gold') return '22K';
    if (type === 'Silver') return '925';
    if (type === 'Artificial') return 'N/A';

    const diamondMatch = (weightText || '').match(/([\d.]+)\s*ct/i);
    return diamondMatch ? `${diamondMatch[1]} ct` : 'Diamond';
};

const updateModalTotal = (normalizeInput = false) => {
    const totalEl = document.getElementById('modal-product-total');
    if (!totalEl) return;

    const rawValue = quantityInput ? quantityInput.value.trim() : '1';

    if (rawValue === '') {
        if (normalizeInput && quantityInput) {
            quantityInput.value = '1';
            totalEl.innerText = formatPKRAmount(selectedUnitPrice);
            return;
        }
        totalEl.innerText = formatPKRAmount(0);
        return;
    }

    let qty = Number(rawValue);
    if (!Number.isFinite(qty) || qty < 1) {
        if (normalizeInput && quantityInput) {
            quantityInput.value = '1';
            totalEl.innerText = formatPKRAmount(selectedUnitPrice);
            return;
        }
        totalEl.innerText = formatPKRAmount(0);
        return;
    }

    qty = Math.floor(qty);
    if (normalizeInput && quantityInput) quantityInput.value = String(qty);

    totalEl.innerText = formatPKRAmount(selectedUnitPrice * qty);
};

if (quantityInput) {
    quantityInput.addEventListener('input', () => updateModalTotal(false));
    quantityInput.addEventListener('change', () => updateModalTotal(true));
    quantityInput.addEventListener('blur', () => updateModalTotal(true));
}

document.body.addEventListener('click', (e) => {
    // Check if clicked element or its parent is the buy button
    const btn = e.target.closest('.buy-now-btn');

    if (btn) {
        e.preventDefault();
        console.log("Button Clicked");

        if (!modal) {
            alert("System Error: Modal missing");
            return;
        }

        // Force Show Validation
        modal.style.display = 'block';
        modal.style.zIndex = '9999'; // Ensure top validation

        // Find Card Data
        const card = btn.closest('.product-card');
        if (card) {
            const title = card.querySelector('h3').innerText;
            const rawWeight = card.querySelector('.weight')?.innerText;
            const weight = rawWeight && rawWeight.trim() ? rawWeight.trim() : 'N/A';
            const price = card.querySelector('.price').innerText;
            const category = card.getAttribute('data-category') || '';
            const type = getProductType(category, title);
            const carat = getProductCarat(type, weight);

            // Try to get image if valid, else placeholder
            const imgEl = card.querySelector('img');
            let imgSrc = "";
            if (imgEl) {
                imgSrc = imgEl.src;
            } else {
                // If placeholder, we might want a generic icon or keep empty
                imgSrc = "https://via.placeholder.com/150?text=No+Image";
            }

            // Update Text & Image
            const nameEl = document.getElementById('modal-product-name');
            const weightEl = document.getElementById('modal-product-weight');
            const caratEl = document.getElementById('modal-product-carat');
            const typeEl = document.getElementById('modal-product-type');
            const priceEl = document.getElementById('modal-product-price');
            const modalImg = document.getElementById('modal-product-image');

            if (nameEl) nameEl.innerText = title;
            if (weightEl) weightEl.innerText = weight;
            if (caratEl) caratEl.innerText = carat;
            if (typeEl) typeEl.innerText = type;
            if (priceEl) priceEl.innerText = price;
            if (modalImg) modalImg.src = imgSrc;

            selectedUnitPrice = parsePKRAmount(price);
            if (quantityInput) quantityInput.value = 1;
            updateModalTotal();

        } else {
            // Fallback if card not found
            console.warn("Card data not found");
        }
    }
});

// Form Submit & Success State
const form = document.querySelector('.payment-form');
const successMsg = document.querySelector('.order-success');
const closeSuccessBtn = document.querySelector('.close-success-btn');

// Elements to hide on success
const modalTitle = document.querySelector('.modal-content h2');
const preview = document.querySelector('.modal-product-preview');
const summary = document.querySelector('.order-summary');

if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Hide Form Elements
        form.style.display = 'none';
        if (preview) preview.style.display = 'none';
        if (summary) summary.style.display = 'none';
        if (modalTitle) modalTitle.style.display = 'none'; // Hide generic title

        // Show Success
        if (successMsg) successMsg.style.display = 'block';
    });
}

// Reset Modal when closed
const resetModal = () => {
    if (modal) modal.style.display = 'none';

    // Slight delay to reset content for next time
    setTimeout(() => {
        if (form) form.style.display = 'block';
        if (preview) preview.style.display = 'block';
        if (summary) summary.style.display = 'block';
        if (modalTitle) modalTitle.style.display = 'block';
        if (successMsg) successMsg.style.display = 'none';
        if (form) form.reset();
        selectedUnitPrice = 0;
        updateModalTotal();
    }, 300);
}

if (closeSuccessBtn) {
    closeSuccessBtn.addEventListener('click', resetModal);
}

// Update Close Logic to use reset
if (closeModal) {
    closeModal.addEventListener('click', resetModal);
}

window.addEventListener('click', (e) => {
    if (modal && e.target === modal) {
        resetModal();
    }
});
