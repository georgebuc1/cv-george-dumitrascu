// Mobile menu toggle
const menuToggle = document.getElementById("mobile-menu");
const navMenu = document.querySelector(".nav-menu");
menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Navbar scroll effect
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 0);
});

// Back to top button visibility
const backToTopBtn = document.querySelector(".back-to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backToTopBtn.classList.add("visible");
  } else {
    backToTopBtn.classList.remove("visible");
  }
});

// Scroll reveal animation
const reveals = document.querySelectorAll(".reveal");
function revealOnScroll() {
  const windowHeight = window.innerHeight;
  reveals.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Leaflet Map Setup
const map = L.map('map').setView([44.3774, 26.1029], 16);
L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a> & contributors'
}).addTo(map);
L.marker([44.3774, 26.1029]).addTo(map)
  .bindPopup('Biroul meu 🚀')
  .openPopup();
