const navLinks = document.querySelectorAll(".menu a");
const sections = document.querySelectorAll("main section");

// Hide all sections except the first
sections.forEach((section) => section.style.display = "none");
sections[0].style.display = "flex";  // Show first section

// Add click events to nav links
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();  // Prevent default link behavior

    const targetSectionId = link.getAttribute("href");
    const targetSection = document.querySelector(`section#${targetSectionId}`);

    // Hide all sections, then show the target section with a smooth transition
    sections.forEach((section) => {
      section.style.display = "none";
      section.style.opacity = 0;
    });
    targetSection.style.display = "flex";
    targetSection.style.opacity = 1;
    sections.forEach((section) => section.style.transition = "opacity 0.3s ease-in-out");
  });
});

const scrollContainer = document.getElementById('scroll-container');
const scrollLeftButton = document.getElementById('scroll-left');
const scrollRightButton = document.getElementById('scroll-right');

scrollContainer.addEventListener('wheel', (event) => {
  event.preventDefault();
  scrollContainer.scrollLeft += event.deltaY;
});

scrollLeftButton.addEventListener('click', () => {
  scrollContainer.scrollLeft -= 200;
});

scrollRightButton.addEventListener('click', () => {
  scrollContainer.scrollLeft += 200;
});

document.addEventListener('DOMContentLoaded', function() {
  // Obtener todos los enlaces excepto los del encabezado
  var enlaces = document.querySelectorAll('a:not(header a)');

  enlaces.forEach(function(enlace) {
    enlace.setAttribute('target', '_blank');
  });
});