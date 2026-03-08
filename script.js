/**
 * GESTION DU MENU BURGER
 */
const navSlide = () => {
    const burger = document.querySelector('#burger');
    const nav = document.querySelector('#nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    // Fonction pour basculer le menu
    const toggleMenu = () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');

        // Animation des liens
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    };

    burger.addEventListener('click', toggleMenu);

    // Fermeture automatique au clic sur un lien (mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('nav-active')) {
                toggleMenu();
            }
        });
    });
}

/**
 * SCROLL REVEAL (Apparition au défilement)
 */
const initScrollReveal = () => {
    const observerOptions = {
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
            }
        });
    }, observerOptions);

    // On applique l'observateur à chaque section
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('reveal-hidden');
        observer.observe(section);
    });
};

// Lancement des fonctions au chargement du DOM
document.addEventListener('DOMContentLoaded', () => {
    navSlide();
    initScrollReveal();
});
