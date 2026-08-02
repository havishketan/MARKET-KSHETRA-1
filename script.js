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
/* =========================================
   PART 4 - 3D PARTICLE BACKGROUND
========================================= */

const canvas = document.getElementById("bg");

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
);

camera.position.z = 12;

const renderer = new THREE.WebGLRenderer({

canvas:canvas,

alpha:true,

antialias:true

});

renderer.setSize(window.innerWidth,window.innerHeight);

renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));


// -----------------------
// PARTICLES
// -----------------------

const particleGeometry = new THREE.BufferGeometry();

const particleCount = 1800;

const positions = new Float32Array(particleCount*3);

for(let i=0;i<particleCount*3;i++){

positions[i]=(Math.random()-0.5)*40;

}

particleGeometry.setAttribute(

'position',

new THREE.BufferAttribute(positions,3)

);

const particleMaterial = new THREE.PointsMaterial({

color:0x8b5cf6,

size:0.05,

transparent:true,

opacity:0.8

});

const particles = new THREE.Points(

particleGeometry,

particleMaterial

);

scene.add(particles);


// -----------------------
// LIGHT
// -----------------------

const ambientLight = new THREE.AmbientLight(

0xffffff,

0.6

);

scene.add(ambientLight);


// -----------------------
// MOUSE
// -----------------------

let mx = 0;
let my = 0;

window.addEventListener("mousemove",(e)=>{

mx=(e.clientX/window.innerWidth-.5);

my=(e.clientY/window.innerHeight-.5);

});


// -----------------------
// ANIMATION
// -----------------------

function renderScene(){

requestAnimationFrame(renderScene);

particles.rotation.y +=0.0008;

particles.rotation.x +=0.0003;

camera.position.x+=(mx*2-camera.position.x)*0.03;

camera.position.y+=(-my*2-camera.position.y)*0.03;

renderer.render(scene,camera);

}

renderScene();


// -----------------------
// RESIZE
// -----------------------

window.addEventListener("resize",()=>{

camera.aspect=window.innerWidth/window.innerHeight;

camera.updateProjectionMatrix();

renderer.setSize(window.innerWidth,window.innerHeight);

});
