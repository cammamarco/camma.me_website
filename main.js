

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// SCROLL HEADER
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const gallerySection = document.querySelector('.gallery');
    const galleryPosition = gallerySection.getBoundingClientRect().top;

if (galleryPosition <= 80) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }   
});

// HAMBURGER MENU ACTIVE
const hamburgerMenu = document.querySelector(".hamburger-menu");
const nav = document.querySelector(".nav");

hamburgerMenu.addEventListener("click", () => {
    nav.classList.toggle("active")
});

// HAMBURGER ICONS
const hamburgerIcons = document.getElementById('hamburger-icons');
hamburgerIcons.addEventListener('click', () => {
    if (nav.classList.contains('active')) {
        hamburgerIcons.classList.remove('fa-x');
        hamburgerIcons.classList.add('fa-bars');
    } else {
        hamburgerIcons.classList.remove('fa-bars');
        hamburgerIcons.classList.add('fa-x');
    }
});