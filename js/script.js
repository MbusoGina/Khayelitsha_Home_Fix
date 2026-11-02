
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
// Display Services Dynamically

const servicesGrid = document.getElementById("servicesGrid");

function displayServices(serviceList) {

    servicesGrid.innerHTML = "";

    serviceList.forEach(function(service) {

        const serviceCard = `
            <article class="card">

                <img
                    src="${service.image}"
                    alt="${service.name} maintenance service"
                    class="gallery-image"
                >

                <h2>${service.name}</h2>

                <p>${service.description}</p>

            </article>
        `;

        servicesGrid.innerHTML += serviceCard;

    });

}

// Load services when the page opens
displayServices(services);
// Search and Sort Services

const searchInput = document.getElementById("serviceSearch");
const sortSelect = document.getElementById("serviceSort");
const noResults = document.getElementById("noResults");

function filterAndSortServices() {

    const searchTerm = searchInput.value.toLowerCase();

    // Filter services based on search
    let filteredServices = services.filter(function(service) {

        return service.name.toLowerCase().includes(searchTerm) ||
               service.description.toLowerCase().includes(searchTerm);

    });

    // Sort services alphabetically
    if (sortSelect.value === "az") {

        filteredServices.sort(function(a, b) {
            return a.name.localeCompare(b.name);
        });

    } else {

        filteredServices.sort(function(a, b) {
            return b.name.localeCompare(a.name);
        });

    }

    // Display matching services
    displayServices(filteredServices);

    // Show message if nothing matches
    noResults.hidden = filteredServices.length > 0;

}

// Listen for search input
searchInput.addEventListener("input", filterAndSortServices);

// Listen for sorting changes
sortSelect.addEventListener("change", filterAndSortServices);
