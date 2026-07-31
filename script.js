/* ==========================================
   MENU FIXO COM SOMBRA AO ROLAR
========================================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(255,255,255,0.95)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";

    } else {

        header.style.background = "rgba(255,255,255,.75)";
        header.style.boxShadow = "none";

    }

});


/* ==========================================
   ANIMAÇÃO AO ROLAR
========================================== */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: .15

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});


/* ==========================================
   BOTÃO WHATSAPP
========================================== */

const whatsapp = document.querySelector(".whatsapp-button");

whatsapp.addEventListener("mouseenter", () => {

    whatsapp.style.transform = "scale(1.15)";

});

whatsapp.addEventListener("mouseleave", () => {

    whatsapp.style.transform = "scale(1)";

});


/* ==========================================
   CONTADOR ANIMADO
========================================== */

const counters = document.querySelectorAll(".stat h2");

let started = false;

function runCounter() {

    if (started) return;

    started = true;

    counters.forEach(counter => {

        const text = counter.innerText.replace("+", "").replace("%", "");

        const target = parseInt(text);

        let value = 0;

        const speed = target / 80;

        const update = () => {

            value += speed;

            if (value < target) {

                if (counter.innerText.includes("%")) {

                    counter.innerText = Math.floor(value) + "%";

                } else {

                    counter.innerText = "+" + Math.floor(value);

                }

                requestAnimationFrame(update);

            } else {

                if (counter.innerText.includes("%")) {

                    counter.innerText = target + "%";

                } else {

                    counter.innerText = "+" + target;

                }

            }

        }

        update();

    });

}

const stats = document.querySelector(".statistics");

const statObserver = new IntersectionObserver((entries)=>{

    if(entries[0].isIntersecting){

        runCounter();

    }

});

if(stats){

    statObserver.observe(stats);

}


/* ==========================================
   SCROLL SUAVE
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const id = this.getAttribute("href");

        const section = document.querySelector(id);

        if(section){

            section.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});
/* ==========================================
                 FAQ
========================================== */

const faq = document.querySelectorAll(".faq-item");

faq.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        item.classList.toggle("active");

    });

});
