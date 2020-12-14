const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=3530103&units=imperial&appid=1b0d8ea710feef154d2b954a90a575f1";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.getElementById('current-temp').textContent = jsObject.main.temp;
    document.getElementById('condition').textContent = jsObject.weather[0].description;
    document.getElementById('humidity').textContent = jsObject.main.humidity;

  });

  const apiURLforecast = 'https://api.openweathermap.org/data/2.5/forecast?id=3530103&units=imperial&appid=1b0d8ea710feef154d2b954a90a575f1';
  fetch(apiURLforecast)
    .then((response) => response.json())
    .then((jsObject) => {
      const forecast = jsObject['list'];
      console.log(jsObject['list']);

      const forecastData = jsObject.list.filter((element)=>element.dt_txt.includes('00:00:00'));
      console.log(forecastData);

      document.getElementById('forecast-day1').textContent = Math.round(forecastData[0].main.temp);
      document.getElementById('forecast-day2').textContent = Math.round(forecastData[1].main.temp);
      document.getElementById('forecast-day3').textContent = Math.round(forecastData[2].main.temp);
    });