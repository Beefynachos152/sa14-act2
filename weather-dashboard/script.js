const apiKey = 'b5ea4a8e140e4d66ad915201240205';
const form = document.getElementById('weather-form');
const cityNameInput = document.getElementById('city-name');
const currentWeatherDiv = document.getElementById('current-weather');
const forecastDiv = document.getElementById('forecast-days');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const cityName = cityNameInput.value.trim();
    if (cityName) {
        try {
            const weatherData = await fetchWeatherData(cityName);
            displayWeatherData(weatherData);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    }
});

async function fetchWeatherData(cityName) {
    const apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityName}&days=5`;
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    return response.json();
}

function displayWeatherData(data) {
    displayCurrentWeather(data.current, data.location);
    displayForecast(data.forecast.forecastday);
}

function displayCurrentWeather(currentWeatherData, location) {
    const { localtime, name } = location;
    currentWeatherDiv.innerHTML = `
        <h3>Current Weather in ${name}</h3>
        <div>Time: ${localtime}</div>
        <div>Temperature: ${currentWeatherData.temp_c}°C</div>
        <div>Condition: ${currentWeatherData.condition.text}</div>
        <div>Humidity: ${currentWeatherData.humidity}%</div>
    `;
}

function displayForecast(forecastDays) {
    forecastDiv.innerHTML = ''; // Clear existing forecast
    forecastDays.forEach(day => {
        const forecastDayDiv = document.createElement('div');
        forecastDayDiv.className = 'forecast-day';
        forecastDayDiv.innerHTML = `
            <h4>Date: ${day.date}</h4>
            <div>Condition: ${day.day.condition.text}</div>
            <div>Max Temp: ${day.day.maxtemp_c}°C</div>
            <div>Min Temp: ${day.day.mintemp_c}°C</div>
        `;
        forecastDiv.appendChild(forecastDayDiv);
    });
}