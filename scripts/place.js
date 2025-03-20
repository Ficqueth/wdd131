const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const windSpeed = document.querySelector('#wind-speed');
const windChill = document.querySelector('#wind-chill');
const weatherConditions = document.querySelector('#weather-conditions');


const url = "https://api.openweathermap.org/data/2.5/weather?lat=48.86&lon=2.35&appid=4188bb235b1ca1fae6c2493e752ce07e&units=metric";


async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}


function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    //weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);

    // Wind Speed 
    const windSpeedValue = data.wind.speed;
    windSpeed.textContent = `${windSpeedValue} km/h`;

    // Wind Chill Calculation (only applies if the temperature is below 10°C and wind speed is above 4.8 km/h)
    let windChillValue = calculateWindChill(data.main.temp, windSpeedValue);
    windChill.textContent = windChillValue ? `${windChillValue.toFixed(1)} °C` : 'N/A';

    // Weather Condition (Description)
    const conditions = data.weather[0].description;
    weatherConditions.textContent = `${conditions}`;
}

// Function to calculate Wind Chill
function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 10 && windSpeed > 4.8) {
        // Using the wind chill formula in Celsius
        return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
    } else {
        return null; 
    }
}

apiFetch();
