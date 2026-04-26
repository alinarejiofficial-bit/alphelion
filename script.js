// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 20) {
        header.style.padding = '0.75rem 0';
        header.style.boxShadow = '0 10px 15px -3px rgb(0 0 0 / 0.1)';
    } else {
        header.style.padding = '1.25rem 0';
        header.style.boxShadow = 'none';
    }
});

// Mobile menu toggle (simple version)
const menuToggle = document.querySelector('.mobile-menu-toggle');
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        alert('Mobile menu functionality would go here.');
    });
}

// Reveal on scroll
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Once revealed, no need to observe anymore
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));


