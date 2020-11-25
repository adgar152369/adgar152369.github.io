const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&appid=1b0d8ea710feef154d2b954a90a575f1";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
      console.log(jsObject);

      document.getElementById('current-temp').textContent = Math.round(jsObject.main.temp);
      document.getElementById('current-condition').textContent = jsObject.weather[0].description;
      document.getElementById('current-humidity').textContent = jsObject.main.humidity;
      document.getElementById('wind-speed').textContent = jsObject.wind.speed;
  });

const fishHavenURL = "https://api.openweathermap.org/data/2.5/weather?lat=42.0380399&lon=-111.4048681&units=imperial&appid=1b0d8ea710feef154d2b954a90a575f1";

fetch(fishHavenURL)
  .then((response) => response.json())
  .then((jsObject) => {
      console.log(jsObject);

      document.getElementById('FH-current-temp').textContent = Math.round(jsObject.main.temp);
      document.getElementById('FH-condition').textContent = jsObject.weather[0].description;
      document.getElementById('FH-humidity').textContent = jsObject.main.humidity;
      document.getElementById('FH-wind-speed').textContent = jsObject.wind.speed;
  });

const apiURLforecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=42.0380399&lon=-111.4048681&units=imperial&appid=1b0d8ea710feef154d2b954a90a575f1';
  fetch(apiURLforecast)
    .then((response) => response.json())
    .then((jsObject) => {

        const forecast = jsObject.list.filter(x => x.dt_txt.includes("18:00:00"));
        console.log(forecast);
        
        document.getElementById('forecast-img1').src = "https://openweathermap.org/img/w/" + forecast[0].weather[0].icon + ".png";
        document.getElementById('forecast-img2').src = "https://openweathermap.org/img/w/" + forecast[1].weather[0].icon + ".png";
        document.getElementById('forecast-img3').src = "https://openweathermap.org/img/w/" + forecast[2].weather[0].icon + ".png";
        document.getElementById('forecast-img4').src = "https://openweathermap.org/img/w/" + forecast[3].weather[0].icon + ".png";
        document.getElementById('forecast-img5').src = "https://openweathermap.org/img/w/" + forecast[4].weather[0].icon + ".png";

        document.getElementById('forecast-day1').textContent = Math.round(forecast[0].main.temp);
        document.getElementById('forecast-day2').textContent = Math.round(forecast[1].main.temp);
        document.getElementById('forecast-day3').textContent = Math.round(forecast[2].main.temp);
        document.getElementById('forecast-day4').textContent = Math.round(forecast[3].main.temp);
        document.getElementById('forecast-day5').textContent = Math.round(forecast[4].main.temp);
    });

  const apiURLSodaSpringsForecast = 'https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&appid=1b0d8ea710feef154d2b954a90a575f1';
  fetch(apiURLSodaSpringsForecast)
    .then((response) => response.json())
    .then((jsObject) => {

        const forecast = jsObject.list.filter(x => x.dt_txt.includes("18:00:00"));
        console.log(forecast);
        
        document.getElementById('ss-forecast-img1').src = "https://openweathermap.org/img/w/" + forecast[0].weather[0].icon + ".png";
        document.getElementById('ss-forecast-img2').src = "https://openweathermap.org/img/w/" + forecast[1].weather[0].icon + ".png";
        document.getElementById('ss-forecast-img3').src = "https://openweathermap.org/img/w/" + forecast[2].weather[0].icon + ".png";
        document.getElementById('ss-forecast-img4').src = "https://openweathermap.org/img/w/" + forecast[3].weather[0].icon + ".png";
        document.getElementById('ss-forecast-img5').src = "https://openweathermap.org/img/w/" + forecast[4].weather[0].icon + ".png";
        
        document.getElementById('ss-forecast-day1').textContent = Math.round(forecast[0].main.temp);
        document.getElementById('ss-forecast-day2').textContent = Math.round(forecast[1].main.temp);
        document.getElementById('ss-forecast-day3').textContent = Math.round(forecast[2].main.temp);
        document.getElementById('ss-forecast-day4').textContent = Math.round(forecast[3].main.temp);
        document.getElementById('ss-forecast-day5').textContent = Math.round(forecast[4].main.temp);
    });