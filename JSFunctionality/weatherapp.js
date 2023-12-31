document.addEventListener("DOMContentLoaded", () => {
  const apikey = "Your API key";
  const getWeatherButton = document.getElementById("getWeatherButton");
  const cityInput = document.getElementById("cityInput");
  const cityName = document.getElementById("cityName");
  const temperature = document.getElementById("temperature");
  const description = document.getElementById("description");
  const weatherInfo = document.getElementById("weatherInfo");
  const haze = "../Style/Assets/haze.jpg";
  const defaultbackground1 = "../Style/Assets/background.jpg";
  const brokenclouds = "../Style/Assets/broken-clouds.jpg";
  const scattered_clouds = "../Style/Assets/scatteredclouds.jpg";
  const clearClouds = "../Style/Assets/clearclouds.jpg";
  getWeatherButton.addEventListener("click", () => {
    const city = cityInput.value;

    // debugger;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        cityName.textContent = `City: ${data.name}`;
        //Here's the formula to convert Kelvin to Celsius  ° C = K − 273.15
        const temp1 = data.main.temp - 273.15;
        temperature.textContent = `Temperature: ${temp1.toFixed(2)}°C`;
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
          case "clear sky":
            backgroundImage = clearClouds;
            break;
          default:
            backgroundImage = defaultbackground1;
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
