// calendar.js
const events = {
    "2025-04-10": ["Plant Tomatoes Indoors"],
    "2025-04-15": ["Start Sunflower Seeds Inside"],
    "2025-04-30": ["Last Frost Date"],
    "2025-06-01": ["Plant Beans & Cucumbers"],
    "2025-06-21": ["First Day of Summer"],
    "2025-09-22": ["Plant Garlic for Fall"],
};

let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

const months = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];

const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

const renderCalendar = (month, year) => {
    document.getElementById("month-name").innerText = months[month];
    document.getElementById("current-month").innerText = `${months[month]} ${year}`;
    const firstDay = new Date(year, month).getDay();
    const daysInCurrentMonth = daysInMonth(month, year);
    const calendarGrid = document.getElementById("calendar-grid");
    calendarGrid.innerHTML = "";

    // Generate empty cells for days of the week before the 1st of the month
    for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement("div");
        calendarGrid.appendChild(emptyCell);
    }

    // Generate day cells
    for (let day = 1; day <= daysInCurrentMonth; day++) {
        const dayCell = document.createElement("div");
        dayCell.classList.add("calendar-day");
        const dayStr = `${year}-${(month + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

        if (dayStr === `${currentYear}-${(currentMonth + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`) {
            dayCell.classList.add("today");
        }

        dayCell.innerText = day;

        // Highlight events
        if (events[dayStr]) {
            events[dayStr].forEach(event => {
                const eventDiv = document.createElement("div");
                eventDiv.classList.add("event");
                eventDiv.innerText = event;
                dayCell.appendChild(eventDiv);
            });
        }

        calendarGrid.appendChild(dayCell);
    }
};

document.getElementById("prev-month").addEventListener("click", () => {
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    if (currentMonth === 11) currentYear--;
    renderCalendar(currentMonth, currentYear);
});

document.getElementById("next-month").addEventListener("click", () => {
    currentMonth = (currentMonth === 11) ? 0 : currentMonth + 1;
    if (currentMonth === 0) currentYear++;
    renderCalendar(currentMonth, currentYear);
});

// Initialize the calendar for the current month
renderCalendar(currentMonth, currentYear);
