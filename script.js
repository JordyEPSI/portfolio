
window.addEventListener("load",()=>{

document.getElementById("loader").style.display="none"

})


const cursor=document.querySelector(".cursor")

document.addEventListener("mousemove",(e)=>{

cursor.style.top=e.clientY+"px"
cursor.style.left=e.clientX+"px"

})


const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active")

}

})

})


document.querySelectorAll(".reveal").forEach(el=>{

observer.observe(el)

})
