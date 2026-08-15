
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
