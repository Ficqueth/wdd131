const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Papeete Tahiti",
        location: "Papeete, French Polynesia",
        dedicated: "1983, October, 27-29",
        area: 12150,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/papeete-tahiti/400x250/papeete-tahiti-temple-lds-354763-wallpaper.jpg"
      },
      {
        templeName: "Paris France",
        location: "Le Chesnay, France",
        dedicated: "2017, May, 21",
        area: 44175,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/paris-france/2018/400x250/Paris-Temple02.jpg"
      },
      {
        templeName: "Baton Rouge Louisiana",
        location: "Baton Rouge, Louisiana, United States",
        dedicated: "2000, July, 16",
        area: 10890,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/baton-rouge-louisiana/400x250/1-ea20b19384c9f98d17ef56b627c79c3a75f62cb3.jpeg"
      }
  ];

const main = document.querySelector("main"); // The main section where temples are displayed
const navLinks = document.querySelectorAll("nav ul li a"); // Navigation links

function displayTemples(filteredTemples) {
    main.innerHTML = ""; // Clear current content before inserting new temples

    filteredTemples.forEach(temple => {
        const templeCard = document.createElement("div");
        templeCard.classList.add("temple-card");

        templeCard.innerHTML = `
            <figure>
                <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
                <figcaption>
                    <h3>${temple.templeName}</h3>
                    <p><strong>Location:</strong> ${temple.location}</p>
                    <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                    <p><strong>Area:</strong> ${temple.area} sq ft</p>
                </figcaption>
            </figure>
        `;

        main.appendChild(templeCard);
    });
}


  function filterTemples(filterType) {
    let filteredTemples;

    switch (filterType) {
        case "Old":
            filteredTemples = temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900);
            break;
        case "New":
            filteredTemples = temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000);
            break;
        case "Large":
            filteredTemples = temples.filter(t => t.area > 90000);
            break;
        case "Small":
            filteredTemples = temples.filter(t => t.area < 10000);
            break;
        default:
            filteredTemples = temples; // Home: Show all temples
    }

    displayTemples(filteredTemples);
}

navLinks.forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior
        const filterType = this.textContent; // Get the link text
        filterTemples(filterType);
    });
});

displayTemples(temples);