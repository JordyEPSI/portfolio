// GESTION DU MENU BURGER
const navSlide = () => {
    const burger = document.querySelector('#burger');
    const nav = document.querySelector('#nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    const toggleMenu = () => {
        // Alterne la classe pour afficher le menu
        nav.classList.toggle('nav-active');
        
        // Alterne l'animation du burger (X)
        burger.classList.toggle('toggle');

        // Animation des liens (apparition un par un)
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    };

    burger.addEventListener('click', toggleMenu);

    // Ferme le menu quand on clique sur un lien (pour mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('nav-active')) {
                toggleMenu();
            }
        });
    });
}

// SCROLL REVEAL (Apparition fluide au défilement)
const initScrollReveal = () => {
    const observerOptions = {
        threshold: 0.15 // Déclenche quand 15% de la section est visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
            }
        });
    }, observerOptions);

    // Applique l'effet à toutes les sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('reveal-hidden');
        observer.observe(section);
    });
};

// Lancement au chargement du document
document.addEventListener('DOMContentLoaded', () => {
    navSlide();
    initScrollReveal();
});
