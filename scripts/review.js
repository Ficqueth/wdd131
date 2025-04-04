// review.js

// Check if count exists in localStorage
let count = localStorage.getItem("reviewCount");

// If it doesn't exist, start at 0
if (!count) {
  count = 0;
}

// Convert to number, increment, and store back
count = parseInt(count) + 1;
localStorage.setItem("reviewCount", count);

// Optionally, show it on the page
const counterDisplay = document.getElementById("review-counter");
if (counterDisplay) {
  counterDisplay.textContent = `You have submitted ${count} review(s).`;
}