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
  
        alert(`Thanks, ${name}! You love ${plant || "plants"}!`);
      });
    }
  
    const savedName = localStorage.getItem("gardenerName");
    if (savedName) {
      const welcomeMsg = document.createElement("p");
      welcomeMsg.textContent = `🌱 Welcome back, ${savedName}!`;
      document.querySelector("main").prepend(welcomeMsg);
    }
  });