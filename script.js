/* =====================================
   PORTFOLIO JAVASCRIPT
   Hoàng Gia Khải
=====================================*/


/* ================================
   Smooth Navbar Background
================================ */

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if(window.scrollY > 60){

        navbar.style.background = "rgba(15,23,42,.96)";
        navbar.style.boxShadow = "0 8px 25px rgba(0,0,0,.15)";

    }

    else{

        navbar.style.background = "rgba(15,23,42,.82)";
        navbar.style.boxShadow = "none";

    }

});



/* ================================
   Active Menu
================================ */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".menu a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop-120;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")=="#"+current){

            link.classList.add("active");

        }

    });

});



/* ================================
   Fade In Animation
================================ */

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.15
});

document.querySelectorAll(".project-card,.skill-card,.stat-card,.experience")
.forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});



/* ================================
   Counter Animation
================================ */

const counters = document.querySelectorAll(".counter");

const speed = 60;

const counterObserver = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter = entry.target;

const target = +counter.dataset.target;

let count = 0;

const update = ()=>{

const increment = target/speed;

if(count < target){

count += increment;

counter.innerText = Math.ceil(count);

requestAnimationFrame(update);

}

else{

counter.innerText = target;

}

}

update();

}

});

});

counters.forEach(counter=>{

counterObserver.observe(counter);

});



/* ================================
   Typing Effect
================================ */

const text = "Turning Data Into Business Insights";

const typing = document.querySelector(".typing");

if(typing){

let i = 0;

function type(){

if(i < text.length){

typing.innerHTML += text.charAt(i);

i++;

setTimeout(type,70);

}

}

type();

}



/* ================================
   Scroll To Top Button
================================ */

const topBtn = document.querySelector("#topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY > 500){

topBtn.classList.add("show-top");

}

else{

topBtn.classList.remove("show-top");

}

});

if(topBtn){

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}



/* ================================
   Card Hover Tilt
================================ */

const cards = document.querySelectorAll(".project-card");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect = card.getBoundingClientRect();

const x = e.clientX - rect.left;

const y = e.clientY - rect.top;

const rotateY = (x-rect.width/2)/20;

const rotateX = -(y-rect.height/2)/20;

card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="rotateX(0) rotateY(0)";

});

});



/* ================================
   Current Year
================================ */

const year = document.querySelector("#year");

if(year){

year.innerHTML = new Date().getFullYear();

}