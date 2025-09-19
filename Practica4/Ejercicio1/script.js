const API_KEY = "f7770b61dcff429c9a9180536251809"; // tu key real
const citySelect = document.getElementById("citySelect");
const weatherDiv = document.getElementById("weather");
const spinner = document.getElementById("spinner");

async function fetchWeather(city) {
    spinner.style.display = "block"; 
    weatherDiv.innerHTML = "";

    try {
        const response = await fetch(
            `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&lang=es&aqi=no`
        );

        if (!response.ok) throw new Error("Error en la respuesta de la API");

        const data = await response.json();

       
        setTimeout(() => {
            spinner.style.display = "none";
            weatherDiv.innerHTML = `
      <h3>${data.location.name}, ${data.location.country}</h3>
      <img src="https:${data.current.condition.icon}" alt="icono clima" />
      <p><b>Temperatura:</b> ${data.current.temp_c}°C</p>
      <p><b>Condición:</b> ${data.current.condition.text}</p>
      <p><b>Humedad:</b> ${data.current.humidity}%</p>
      <p><b>Viento:</b> ${data.current.wind_kph} km/h</p>
      <p><b>Probabilidad de lluvia:</b> ${data.forecast.forecastday[0].day.daily_chance_of_rain}%</p>
      <p><b>Hora local:</b> ${data.location.localtime}</p>
    `;
        }, 400);

    } catch (error) {
        weatherDiv.innerHTML = `<p style="color:red;">⚠️ Error al obtener datos</p>`;
        console.error(error);
        spinner.style.display = "none"; // no mostrar spinner su hayy error
    }
}

// al cambiar el select
citySelect.addEventListener("change", (e) => {
    fetchWeather(e.target.value);
});


fetchWeather(citySelect.value);