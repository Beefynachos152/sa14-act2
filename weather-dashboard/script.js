document.getElementById('weatherForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const city = document.getElementById('cityInput').value;
    const apiKey = 'b5ea4a8e140e4d66ad915201240205';
    const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=5&aqi=no&alerts=no`;

    fetch(url)
        .then(response => response.json())
        .then(data => updateWeatherDisplay(data))
        .catch(error => console.error('Error fetching weather data:', error));
});

function updateWeatherDisplay(data) {
    const weatherDisplay = document.getElementById('weatherDisplay');
    if (!data || !data.current) {
        weatherDisplay.innerHTML = `<p>No weather data available. Try another city.</p>`;
        return;
    }

    const { current, forecast } = data;
    weatherDisplay.innerHTML = `
        <h2>Current Weather in ${data.location.name}</h2>
        <p>Temperature: ${current.temp_c}°C</p>
        <p>Condition: ${current.condition.text}</p>
        <img src="${current.condition.icon}" alt="Weather Icon">
        <h3>5-Day Forecast</h3>
        <div>${forecast.days.map(day => `
            <div>
                <h4>${new Date(day.date).toDateString()}</h4>
                <p>Max: ${day.day.maxtemp_c}°C, Min: ${day.day.mintemp_c}°C</p>
                <img src="${day.day.condition.icon}" alt="${day.day.condition.text}">
            </div>
        `).join('')}</div>
    `;
}
