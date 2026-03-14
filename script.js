// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            const bars = this.querySelectorAll('.bar');
            if (navMenu.classList.contains('active')) {
                bars[0].style.transform = 'rotate(45deg) translate(4px, 5px)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'rotate(-45deg) translate(4px, -5px)';
            } else {
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });
        
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                const bars = hamburger.querySelectorAll('.bar');
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            });
        });
    }
});

// Services page interactive cards (only if those elements exist)
(function() {
    function setupCategory(gridId, detailId) {
        const grid = document.getElementById(gridId);
        const detailPanel = document.getElementById(detailId);
        if (!grid || !detailPanel) return;

        const titleEl = detailPanel.querySelector('h4');
        const descEl = detailPanel.querySelector('.detail-desc');
        const featuresEl = detailPanel.querySelector('.detail-features');
        const imageEl = detailPanel.querySelector('.detail-image');

        const cards = grid.querySelectorAll('.service-card');
        if (cards.length > 0) {
            cards[0].classList.add('active');
            cards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    cards.forEach(c => c.classList.remove('active'));
                    this.classList.add('active');
                    titleEl.textContent = this.dataset.title;
                    descEl.textContent = this.dataset.desc;
                    const features = this.dataset.features.split('|');
                    featuresEl.innerHTML = '';
                    features.forEach(f => {
                        const span = document.createElement('span');
                        span.textContent = f;
                        featuresEl.appendChild(span);
                    });
                    imageEl.className = 'detail-image ' + this.dataset.imgclass;
                });
            });
        }
    }

    setupCategory('grid-dev', 'detail-dev');
    setupCategory('grid-graphic', 'detail-graphic');
    setupCategory('grid-hybrid', 'detail-hybrid');
})();