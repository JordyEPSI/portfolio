// SCROLL SMOOTH

const links = document.querySelectorAll("nav a")

links.forEach(link=>{

link.addEventListener("click",e=>{

e.preventDefault()

const target = document.querySelector(link.getAttribute("href"))

target.scrollIntoView({
behavior:"smooth"
})

})

})


// ANIMATION AU SCROLL

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("active")

}

})

})

document.querySelectorAll("section").forEach(section => {

section.classList.add("reveal")
observer.observe(section)

})


// NAVBAR SHADOW AU SCROLL

window.addEventListener("scroll",()=>{

const header = document.querySelector("header")

if(window.scrollY > 50){

header.style.boxShadow="0 10px 30px rgba(0,0,0,0.4)"

}else{

header.style.boxShadow="none"

}

})
