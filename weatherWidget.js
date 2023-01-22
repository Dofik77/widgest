const API_KEY = "4ff77e3fe342f03d8b1fd20e26d5a71b";
const WEATHER_API = "https://api.openweathermap.org/data/2.5/weather";

const inputWeatherElement = document.querySelector(".weather-widget");
const buttonWeatherElemnt = document.querySelector(".weather-button");

const cityName = document.querySelector(".cityName");
const weatherDesc = document.querySelector(".weatherDesc");
const feelLike = document.querySelector(".feelLike");
const cuttentTemp = document.querySelector(".cuttentTemp");

const errorCuty = document.querySelector(".errorCity");

buttonWeatherElemnt.addEventListener("click", () => {
  const inputValue = inputWeatherElement.value;
  if (!inputValue) return;

  let weatherData = null;

  const res = fetch(
    `${WEATHER_API}?q=${inputValue}&lang=ru&units=metric&appid=${API_KEY}`
  )
    .then((response) => response.json())
    .then((data) => {
      weatherData = data;
      resolveWeatherData(weatherData);
    })
    .catch((e) => {
      errorCuty.textContent = "Город не найден";
    });
});

function resolveWeatherData(weatherData) {
  let fells_like = Math.round(weatherData.main.feels_like);
  let temp = Math.round(weatherData.main.temp);

  cityName.innerText = "Город : " + " " + weatherData.name;

  weatherDesc.innerText =
    "Погодные условия : " + " " + weatherData.weather[0].description;

  feelLike.innerText = "Чувствуется как : " + " " + fells_like;

  cuttentTemp.innerText = "Температура : " + " " + temp;
}
