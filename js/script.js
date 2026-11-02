
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
