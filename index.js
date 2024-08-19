// const { response } = require("express");

// Function to get the formatted date
function getFormattedDate() {
    const now = new Date();
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return now.toLocaleDateString('en-US', options);
}
function getTodayName() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    return days[today.getDay()];
}

// Function to get the user's location (replace with actual location retrieval logic)
function getUserLocation() {
    return fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            const ip = data.ip;
            return fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=YOUR_API_KEY&ip=${ip}`)
                .then(response => response.json())
                .then(locationData => {
                    console.log('Location data:', locationData); // Log the response for debugging
                    if (locationData.city && locationData.country_name) {
                        return { city: locationData.city, country: locationData.country_name };
                    } else {
                        throw new Error('Invalid location data');
                    }
                })
                .catch(error => {
                    console.error('Error fetching location data:', error);
                    return { city: 'Unknown', country: 'Unknown' };
                });
        })
        .catch(error => {
            console.error('Error fetching IP:', error);
            return { city: 'Unknown', country: 'Unknown' };
        });
}
// to get weather
function getwether() {
    const cityy = 'cairo';
    const apikey = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key}';
    if (!cityy) {
        alert('please enter a city');
        return;
    }
    const currentweatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=${cityy}&appid=${apikey}';
    const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=${cityy}&appid=${apikey}';
    fetch(currentweatherUrl)
        .then(response => response.json())
        .then(data => {
            displayweather(data);
        })
        .catch(error => {
            console.error('error fetching current weather', error);
            alert('error fetching currernt weather data.please try again');
        });
    fetch(forecastUrl)
        .then(response => response.json())
        .then(data => {
            displayhourlyforecast(data.list);
        })
        .catch(error => {
            console.error('error fetching current weather', error);
            alert('error fetching currernt weather data.please try again');
        });
}
function displayweather(data) {
    const tempdivinfo=document.getElementById('');
    const weatherdiv=document.getElementById('');
    const weathericon=document.getElementById('');
    const hourlyforcastdiv=document.getElementById('hourlyforcast');

    
}




// Get the date and location
const formattedDate = getFormattedDate();
const userLocation = getUserLocation();

const todayname = getTodayName();
const het = document.getElementById('date');
het.textContent = ` ${todayname} `;

// Display the result in the HTML element
const dateLocationElement = document.getElementById('date-location');
dateLocationElement.textContent = ` ${formattedDate} `;