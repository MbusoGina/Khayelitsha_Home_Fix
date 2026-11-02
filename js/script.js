
// Basic client-side validation for the Part 1 prototype.
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("form").forEach((form) => {
    form.addEventListener("submit", (event) => {
      if (!form.checkValidity()) {
        event.preventDefault();
        alert("Please complete all required fields.");
      }
    });
  });
});
// FAQ Accordion functionality

const accordionButtons = document.querySelectorAll(".accordion-button");

accordionButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const answerId = button.getAttribute("aria-controls");
        const answer = document.getElementById(answerId);

        const isExpanded = button.getAttribute("aria-expanded") === "true";

        button.setAttribute("aria-expanded", !isExpanded);

        answer.hidden = isExpanded;

        const icon = button.querySelector("span");
        icon.textContent = isExpanded ? "+" : "-";

    });

});
// Service Image Gallery

const galleryImages = document.querySelectorAll(".gallery-image");

const lightbox = document.getElementById("imageLightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeButton = document.getElementById("closeLightbox");

// Open image when clicked
galleryImages.forEach(function(image) {

    image.addEventListener("click", function() {

        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;

        lightbox.hidden = false;

    });

});

// Close button functionality
closeButton.addEventListener("click", function() {

    lightbox.hidden = true;

});

// Close when clicking outside the image
lightbox.addEventListener("click", function(event) {

    if (event.target === lightbox) {
        lightbox.hidden = true;
    }

});

// Close when pressing Escape
document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        lightbox.hidden = true;
    }

});
// Dynamic Service Data

const services = [

    {
        name: "Plumbing",
        image: "images/plumbing.jpg",
        description: "General maintenance, minor repairs, leaks and household plumbing support."
    },

    {
        name: "Electrical",
        image: "images/electrical.jpg",
        description: "Basic electrical maintenance and repair support for residential and small-business needs."
    },

    {
        name: "Painting",
        image: "images/painting.jpg",
        description: "Interior and exterior painting preparation and application services."
    },

    {
        name: "Carpentry",
        image: "images/carpentry.jpg",
        description: "Minor household carpentry, repairs and maintenance."
    },

    {
        name: "General Maintenance",
        image: "images/handyman.jpg",
        description: "Practical repairs and maintenance tasks that keep properties functional and presentable."
    }

];
