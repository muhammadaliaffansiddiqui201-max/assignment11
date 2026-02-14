// Trending Products Slider JavaScript
document.addEventListener('DOMContentLoaded', () => {
    const sliderTrack = document.querySelector('.slider-track');
    if (!sliderTrack) return;

    const originalCards = Array.from(sliderTrack.querySelectorAll('.trending-card'));
    if (originalCards.length === 0) return;

    // Duplicate cards once for seamless infinite loop (ensures all products are shown in cycle)
    const clones = document.createDocumentFragment();
    originalCards.forEach((card) => {
        const clone = card.cloneNode(true);
        clone.setAttribute('aria-hidden', 'true'); // Hide from screen readers

        // Make cloned links non-focusable
        const links = clone.querySelectorAll('a');
        links.forEach((link) => {
            link.setAttribute('tabindex', '-1');
        });

        clones.appendChild(clone);
    });
    sliderTrack.appendChild(clones);

    // Optional: Log for debugging (remove in production)
    console.log(`Slider initialized with ${originalCards.length} products, duplicated for loop.`);

    // Card click navigation (except button clicks)
    sliderTrack.addEventListener('click', (e) => {
        if (e.target.closest('.trending-btn')) return; // Let buttons handle their own clicks
        if (!e.target.closest('.trending-card')) return;
        window.location.href = 'collections.html';
    });
});