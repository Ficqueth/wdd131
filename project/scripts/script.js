// Toggle hamburger menu
function toggleMenu() {
    document.getElementById("main-nav").classList.toggle("active");
  }

  // Add event listener for hamburger button
document.getElementById("hamburger").addEventListener("click", toggleMenu);
  
  // Set today’s date in the calendar
  window.addEventListener("DOMContentLoaded", () => {
    const today = new Date();
    const formatted = today.toLocaleDateString(undefined, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    });
    const dateEl = document.getElementById("today-date");
    if (dateEl) {
      dateEl.textContent = formatted;
    }
  });
  