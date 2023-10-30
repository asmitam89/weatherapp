document.addEventListener("DOMContentLoaded", () => {
  const myapikey = "37c8339f36af43bd39f250e4dca1a35f";
  const getWeatherButton = document.getElementById("getWeatherButton");
  const cityInput = document.getElementById("cityInput");
  const cityName = document.getElementById("cityName");
  const temperature = document.getElementById("temperature");
  const description = document.getElementById("description");
  const weatherInfo = document.getElementById("weatherInfo");
  const haze =
    "C:/Users/HP/Desktop/weather app 2/weatherapp/Style/Assets/haze.jpg";
  const background1 =
    "C:/Users/HP/Desktop/weather app 2/weatherapp/Style/Assets/background.jpg";
  const brokenclouds =
    "C:/Users/HP/Desktop/weather app 2/weatherapp/Style/Assets/broken-clouds.jpg";
  const scattered_clouds =
    "C:/Users/HP/Desktop/weather app 2/weatherapp/Style/Assets/scatteredclouds.jpg";
  const clearClouds =
    "C:/Users/HP/Desktop/weather app 2/weatherapp/Style/Assets/clearclouds.jpg";
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
        let backgroundImage = "";
        // Select images based on condition
        switch (data.weather[0].description) {
          case "broken clouds":
            backgroundImage = brokenclouds;
            break;
          case "haze":
            backgroundImage = haze;
            break;
          case "scattered clouds":
            backgroundImage = scattered_clouds;
            break;
          case "clear":
            backgroundImage = clearClouds;
            break;
          default:
            backgroundImage = background1;
        }

        // Create a style element and set the selected image as the background
        let styleNode = document.createElement("style");
        document.head.appendChild(styleNode);
        styleNode.innerHTML = `html body { background-image: url('${backgroundImage}'); }`;
      })
      .catch((error) => {
        console.error(error);
        cityName.textContent = "City not found.";
        weatherInfo.style.display = "block";
      });
  });
});
