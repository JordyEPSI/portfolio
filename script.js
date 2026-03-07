document.addEventListener("DOMContentLoaded", () => {

    const burger = document.querySelector("#burger");
    const nav = document.querySelector("#nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    // BURGER MENU
    burger.addEventListener("click", () => {

        nav.classList.toggle("nav-active");
        burger.classList.toggle("toggle");

        navLinks.forEach((link, index) => {

            if(link.style.animation){
                link.style.animation = "";
            } else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }

        });

    });


    // FERMER MENU AU CLICK
    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("nav-active");
            burger.classList.remove("toggle");

            navLinks.forEach(link=>{
                link.style.animation="";
            })

        });

    });


    // SCROLL REVEAL
    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{
        threshold:0.15
    });

    document.querySelectorAll("section").forEach(section => {

        section.classList.add("hidden");
        observer.observe(section);

    });

});


// ANIMATION NAV LINKS
const style = document.createElement("style");

style.innerHTML = `
@keyframes navLinkFade{
from{
opacity:0;
transform:translateX(50px);
}
to{
opacity:1;
transform:translateX(0);
}
}
`;

document.head.appendChild(style);
