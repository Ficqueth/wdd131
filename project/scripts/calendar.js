// calendar.js
const events = {
    // 🌱 January
    "2025-01-10": ["Clean and Organize Garden Tools"],
    "2025-01-15": ["Order Seed Catalogs"],
    "2025-01-25": ["Start Onion Seeds Indoors"],

    // 🌿 February
    "2025-02-05": ["Start Broccoli & Cabbage Indoors"],
    "2025-02-14": ["Check Soil Temp for Early Crops"],
    "2025-02-28": ["Start Tomato Seeds Indoors"],

    // 🌼 March
    "2025-03-01": ["Direct Sow Peas & Spinach"],
    "2025-03-10": ["Start Marigold & Zinnia Seeds"],
    "2025-03-20": ["Prune Fruit Trees & Berry Bushes"],

    // 🌷 April
    "2025-04-05": ["Prep for Last Frost"],
    "2025-04-10": ["Plant Tomatoes Indoors"],
    "2025-04-15": ["Start Sunflower Seeds Inside"],
    "2025-04-22": ["Direct Sow Squash, Beans, Sunflowers"],
    "2025-04-30": ["Last Frost Date"],

    // 🌞 May
    "2025-05-01": ["Plant Tomatoes, Peppers, Cucumbers Outdoors"],
    "2025-05-15": ["Mulch Beds to Retain Moisture"],
    "2025-05-25": ["Monitor for Pests & Diseases"],

    // June
    "2025-06-01": ["Plant Beans & Cucumbers"],
    "2025-06-21": ["First Day of Summer"],

    // 🌻 July
    "2025-07-01": ["Check Watering System"],
    "2025-07-10": ["Start Harvesting Early Vegetables"],
    "2025-07-20": ["Plant Fall Crops (Kale, Cabbage)"],

     // 🍂 August
     "2025-08-05": ["Start Planning Fall Garden"],
     "2025-08-15": ["Harvest Summer Vegetables"],
     "2025-08-25": ["Start Winter Squash Harvest"],

     // September
     "2025-09-22": ["Plant Garlic for Fall"],
 
     // 🍁 October
     "2025-10-01": ["Harvest Remaining Summer Crops"],
     "2025-10-15": ["Plant Garlic & Shallots for Next Year"],
     "2025-10-20": ["Prune Perennials"],
 
     // 🍃 November
     "2025-11-05": ["Prep Garden Beds for Winter"],
     "2025-11-15": ["Start Mulching Beds for Winter Protection"],
     "2025-11-25": ["Clean Garden Tools for Winter"],
 
     // ❄️ December
     "2025-12-01": ["Check Seed Inventory for Next Year"],
     "2025-12-10": ["Plan Next Year's Garden Layout"],
     "2025-12-20": ["Order Seeds for Spring Planting"],
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

        const today = new Date();
        const todayStr = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;

        if (dayStr === todayStr) {
            dayCell.classList.add("today");
        }

        dayCell.innerText = day;

        // Highlight events
        if (events[dayStr]) {
            events[dayStr].forEach(event => {
                const eventDiv = document.createElement("div");
                eventDiv.classList.add("event");

                if (event === "Last Frost Date") {
                    eventDiv.classList.add("frost-event");
                }

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
