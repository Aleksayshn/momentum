
function getWeather() {
    const city = document.querySelector(".city").value;
    const apiKey = "d7b860f9ccc3d1142dfcfc9ca81c3552";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherIcon = document.querySelector(".weather-icon");
            weatherIcon.classList.add(`owf-${data.weather[0].id}`);

            const temperature = document.querySelector(".temperature");
            temperature.innerHTML = `${Math.round(data.main.temp)}°C`;

            const weatherDescription = document.querySelector(".weather-description");
            weatherDescription.innerHTML = data.weather[0].description;

            const wind = document.querySelector(".wind");
            wind.innerHTML = `Wind: ${data.wind.speed} m/s`;

            const humidity = document.querySelector(".humidity");
            humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
        })
        .catch(error => {
            const weatherError = document.querySelector(".weather-error");
            weatherError.innerHTML = `Error: ${error.message}`;
        });
}
