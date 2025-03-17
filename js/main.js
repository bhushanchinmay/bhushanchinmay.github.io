document.addEventListener('DOMContentLoaded', () => {
    initializeUI();
});

const initializeUI = () => {
    initBackToTopButton();
    initCardAnimations();
};

const initBackToTopButton = () => {
    const button = createBackToTopButton();
    handleScrollBehavior(button);
};

const createBackToTopButton = () => {
    const button = document.createElement('a');
    button.href = '#';
    button.className = 'back-to-top';
    button.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(button);
    return button;
};

const handleScrollBehavior = (button) => {
    window.addEventListener('scroll', () => {
        button.classList.toggle('show', window.pageYOffset > 300);
    });

    button.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
};

const initCardAnimations = () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px)';
            const icon = card.querySelector('.card-icon');
            if (icon) icon.style.transform = 'scale(1.1)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            const icon = card.querySelector('.card-icon');
            if (icon) icon.style.transform = 'scale(1)';
        });
    });
};