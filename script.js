// Animation au défilement
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// Ajout du style CSS pour l'animation via JS
const style = document.createElement('style');
style.textContent = `
    .reveal { opacity: 0; transform: translateY(30px); transition: all 0.8s ease-out; }
    .show { opacity: 1; transform: translateY(0); }
`;
document.head.appendChild(style);
