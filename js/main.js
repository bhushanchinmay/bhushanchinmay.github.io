document.addEventListener('DOMContentLoaded', () => {
    initUI();
});

const initUI = () => {
    initScrollButton();
    initCardEffects();
};

const initScrollButton = () => {
    const btn = createScrollButton();
    handleScroll(btn);
};

const createScrollButton = () => {
    const btn = document.createElement('a');
    btn.href = '#';
    btn.className = 'back-to-top';
    btn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(btn);
    return btn;
};

const handleScroll = (btn) => {
    window.addEventListener('scroll', () => {
        btn.classList.toggle('show', window.pageYOffset > 300);
    });

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
};

const initCardEffects = () => {
    document.querySelectorAll('.card').forEach(card => {
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