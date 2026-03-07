window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        if (revealTop < windowHeight - 100) {
            reveals[i].classList.add('active');
        }
    }
}
// Initialiser au chargement
window.addEventListener('load', reveal);
