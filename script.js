// Floating symbols animation
const canvas = document.getElementById('background');
const ctx = canvas.getContext('2d');
let width, height, symbols = [];

function resize() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
  symbols = Array.from({length: 80}).map(() => ({
    x: Math.random() * width,
    y: Math.random() * height,
    size: Math.random() * 20 + 10,
    speed: Math.random() * 0.5 + 0.3,
    char: Math.random() > 0.5 ? '</>' : '<>'
  }));
}
resize();
window.addEventListener('resize', resize);

function animate() {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = 'rgba(0,255,224,0.1)';
  symbols.forEach(s => {
    ctx.font = `${s.size}px monospace`;
    ctx.fillText(s.char, s.x, s.y);
    s.y += s.speed;
    if (s.y > height + 20) s.y = -20;
  });
  requestAnimationFrame(animate);
}
animate();


// --- Typewriter Effect ---
const text = "We are Xeon Stacks - Powering the next generation of code.";
let i = 0;
function type() {
  if (i < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 60);
  }
}
type();


// --- Responsive Menu Toggle ---
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
  const icon = menuToggle.querySelector("i");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-times");
});


// Section scroll reveal
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 120;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
});

// Glowing cursor follow effect
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.top = e.clientY + "px";
  cursor.style.left = e.clientX + "px";
});

// Cursor grow on click
document.addEventListener("mousedown", () => {
  cursor.style.width = "40px";
  cursor.style.height = "40px";
});
document.addEventListener("mouseup", () => {
  cursor.style.width = "25px";
  cursor.style.height = "25px";
});

window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  setTimeout(() => {
    preloader.classList.add("hide");
  }, 800); // thoda delay rakha for smooth effect
});

// In script.js
const scrollBar = document.createElement("div");
scrollBar.id = "scroll-bar";
document.body.appendChild(scrollBar);

window.addEventListener("scroll", () => {
  const scrollPercent =
    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  scrollBar.style.width = scrollPercent + "%";
});


const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
document.querySelector(".copyright").innerHTML = `© ${new Date().getFullYear()} XeonStacks. All rights reserved.`;




