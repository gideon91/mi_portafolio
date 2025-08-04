// Animación fade-in para secciones al cargar y al hacer scroll
function revealOnScroll() {
    const reveals = document.querySelectorAll('section, .project-item');
    for (const el of reveals) {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 120;
        if (elementTop < windowHeight - elementVisible) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    }
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', () => {
    revealOnScroll();
    // Animación inicial fade-in del body
    document.body.style.opacity = 0;
    setTimeout(() => {
        document.body.style.transition = 'opacity 1.2s cubic-bezier(.4,0,.2,1)';
        document.body.style.opacity = 1;
    }, 50);

    // Navegación suave para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
