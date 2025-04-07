document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
  
    const form = document.getElementById("contactForm");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const plant = document.getElementById("plant").value;
        localStorage.setItem("gardenerName", name);
        localStorage.setItem("favoritePlant", plant);
  
        alert(`Thank you ${name} for submitting your favorite plant, - ${plant || "plants"} !`);
      });
    }
  
    const savedName = localStorage.getItem("gardenerName");
if (savedName) {
  const heading = document.querySelector("h2");
  heading.textContent = `🌱 Welcome back to My Gardening Journey, ${savedName}!`;
}
  });