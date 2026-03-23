document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.glass-card');

    // Staggered entry animation
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';

        setTimeout(() => {
            card.style.transition = 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 * (index + 1));
    });
});
