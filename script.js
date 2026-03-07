// MENU BURGER

const burger = document.querySelector("#burger")
const nav = document.querySelector("#nav-links")

burger.addEventListener("click", () => {

nav.classList.toggle("nav-active")

burger.classList.toggle("toggle")

})


// NAVBAR SHADOW

window.addEventListener("scroll", () => {

const navbar = document.querySelector(".navbar")

if(window.scrollY > 40){

navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.5)"

}else{

navbar.style.boxShadow = "none"

}

})


// TIMELINE ANIMATION

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show")

}

})

})

document.querySelectorAll(".timeline-item").forEach(item => {

observer.observe(item)

})


// SCROLL REVEAL SECTIONS

const sections = document.querySelectorAll("section")

const revealObserver = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.style.opacity = "1"
entry.target.style.transform = "translateY(0)"

}

})

})

sections.forEach(section => {

section.style.opacity = "0"
section.style.transform = "translateY(40px)"
section.style.transition = "all 0.8s ease"

revealObserver.observe(section)

})
