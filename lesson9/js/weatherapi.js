const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=1b0d8ea710feef154d2b954a90a575f1";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {

    document.getElementById('current-temp').textContent = Math.round(jsObject.main.temp);

    document.getElementById('humidity').textContent = jsObject.main.humidity;  
    document.getElementById('wind-speed').textContent = jsObject.wind.speed;  
    document.getElementById('current-condition').textContent = jsObject.weather[0].description;  
    document.getElementById('wind-chill').textContent = Math.round(jsObject.main.temp - (jsObject.wind.speed * .07));  
    document.getElementById('icon').setAttribute('src', imagesrc);  
    document.getElementById('icon').setAttribute('alt', desc);

  });

  const apiURLforecast = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=1b0d8ea710feef154d2b954a90a575f1';
  fetch(apiURLforecast)
    .then((response) => response.json())
    .then((jsObject) => {
      const forecast = jsObject['list'];
      console.log(jsObject['list']);

      const forecastData = jsObject.list.filter((element)=>element.dt_txt.includes('18:00:00'));
      console.log(forecastData);

      document.getElementById('forecast-day1').textContent = Math.round(forecastData[0].main.temp);
      document.getElementById('forecast-day2').textContent = Math.round(forecastData[1].main.temp);
      document.getElementById('forecast-day3').textContent = Math.round(forecastData[2].main.temp);
      document.getElementById('forecast-day4').textContent = Math.round(forecastData[3].main.temp);
      document.getElementById('forecast-day5').textContent = Math.round(forecastData[4].main.temp);

      document.getElementById('forecast-image1').src = "https://openweathermap.org/img/w/" + forecastData[0].weather[0].icon + ".png";
      document.getElementById('forecast-image2').src = "https://openweathermap.org/img/w/" + forecastData[1].weather[0].icon + ".png";
      document.getElementById('forecast-image3').src = "https://openweathermap.org/img/w/" + forecastData[2].weather[0].icon + ".png";
      document.getElementById('forecast-image4').src = "https://openweathermap.org/img/w/" + forecastData[3].weather[0].icon + ".png";
      document.getElementById('forecast-image5').src = "https://openweathermap.org/img/w/" + forecastData[4].weather[0].icon + ".png";

    });