/* =========================================
   MARKET KSHETRA
   PART 3 - GSAP ANIMATIONS
========================================= */

// Hero Animation

gsap.from(".logo",{

    y:-40,
    opacity:0,
    duration:1,
    ease:"power3.out"

});

gsap.from("nav a",{

    y:-30,
    opacity:0,

    stagger:0.12,

    duration:1,

    delay:.3,

    ease:"power3.out"

});

gsap.from(".tag",{

    y:40,
    opacity:0,

    duration:1,

    delay:.5,

    ease:"power3.out"

});

gsap.from(".hero h1",{

    y:80,
    opacity:0,

    duration:1.2,

    delay:.7,

    ease:"power4.out"

});

gsap.from(".subtitle",{

    y:40,
    opacity:0,

    duration:1,

    delay:1,

    ease:"power3.out"

});

gsap.from(".buttons button",{

    y:40,
    opacity:0,

    stagger:.15,

    duration:.8,

    delay:1.2,

    ease:"power3.out"

});


/* ===========================
   BUTTON HOVER EFFECT
=========================== */

document.querySelectorAll(".buttons button").forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        gsap.to(button,{
            scale:1.05,
            duration:.25
        });

    });

    button.addEventListener("mouseleave",()=>{

        gsap.to(button,{
            scale:1,
            duration:.25
        });

    });

});


/* ===========================
   PARALLAX HERO
=========================== */

window.addEventListener("mousemove",(e)=>{

    const x=(e.clientX/window.innerWidth-.5)*25;
    const y=(e.clientY/window.innerHeight-.5)*25;

    gsap.to(".hero-content",{

        x:x,

        y:y,

        duration:1.5,

        ease:"power2.out"

    });

});
