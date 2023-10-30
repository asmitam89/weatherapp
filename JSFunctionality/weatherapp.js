document.addEventListener("DOMContentLoaded", () => {
  const myapikey = "37c8339f36af43bd39f250e4dca1a35f";
  const getWeatherButton = document.getElementById("getWeatherButton");
  const cityInput = document.getElementById("cityInput");
  const cityName = document.getElementById("cityName");
  const temperature = document.getElementById("temperature");
  const description = document.getElementById("description");
  const weatherInfo = document.getElementById("weatherInfo");

  getWeatherButton.addEventListener("click", () => {
    const city = cityInput.value;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myapikey}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        cityName.textContent = `City: ${data.name}`;
        temperature.textContent = `Temperature: ${data.main.temp}°C`;
        description.textContent = `Weather: ${data.weather[0].description}`;
        weatherInfo.style.display = "block";
      })
      .catch((error) => {
        console.error(error);
        cityName.textContent = "City not found.";
        weatherInfo.style.display = "block";
      });
  });
});
