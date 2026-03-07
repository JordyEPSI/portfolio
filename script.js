// Fonction pour l'effet d'apparition (ton code actuel)
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;

    reveals.forEach(element => {
        const revealTop = element.getBoundingClientRect().top;
        if (revealTop < windowHeight - 100) {
            element.classList.add('active');
        }
    });
}

// Optionnel : Changement de style de la Navbar au scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.padding = "5px 0";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,0.5)";
    } else {
        header.style.padding = "10px 0";
        header.style.boxShadow = "none";
    }
    reveal(); // Appel de la fonction reveal pendant le scroll
});

// Lancer au chargement
window.addEventListener('load', reveal);
