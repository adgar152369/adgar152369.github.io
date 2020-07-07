WebFont.load({
    google: {
      families: ['Open Sans', 'Ubuntu'],
    },
  });
  
  function toggleMenu() {
    let menu = document.getElementById('menu-list');
    let menuToggle = document.getElementById('menu-toggle');
  
    if (!menu.classList.contains('show-menu')) {
      menu.classList.add('show-menu');
      menuToggle.innerHTML = 'Close';
      menuToggle.classList.add('active-menu');
    } else {
      menu.classList.remove('show-menu');
      menuToggle.innerHTML = '&#9776; Menu';
      menuToggle.classList.remove('active-menu');
    }
  }
  
  let _currentDate = document.getElementById('current-date');
  let _currentYear = document.getElementById('current-year');
  
  now = new Date();
  
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
  let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  
  let dayOfWeek = days[now.getDay()];
  let month = months[now.getMonth()];
  let day = now.getFullYear();
  let year = now.getFullYear();
  
  _currentDate.innerHTML = `${dayOfWeek}, ${day} ${month} ${year}`;
  _currentYear.innerHTML = now.getFullYear();
  
  let nav = 'soda';
  
  function changeNav(navID) {
    document.getElementById(navID).classList.add('highlight');
    if (nav !== navID) {
      document.getElementById(nav).classList.remove('highlight');
      nav = navID;
    }
  }
  
  changeNav('soda');
  
  let d = new Date();
  
  if (d.getDay() == 1) {
    document.getElementById('banner').classList.add('show-banner');
  }
  
  function windChill(t, s) {
    if (t > 50 || s <= 3) {
      return 'N/A';
    }
    const wc = Math.round(
      35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16)
    );
  
    return `${wc}&#176;F`;
  }
  
  const requestURL =
    'https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&appid=3096904544ae7ebe982a780328e5d172';
  
  fetch(requestURL)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Could not retrieve current weather!');
      }
    })
    .then(jsonObject => {
      const resToday = jsonObject.list[0];
  
      const weatherToday = {
        currently: resToday.weather[0].description,
        temp: resToday.main.temp,
        windSpeed: resToday.wind.speed,
        humidity: resToday.main.humidity,
      };
  
      document.getElementById('currently').innerHTML = weatherToday.currently
        .toLowerCase()
        .split(' ')
        .map(s => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');
      document.getElementById('temp').innerHTML = Math.round(weatherToday.temp);
      document.getElementById('humidity').innerHTML = weatherToday.humidity;
      document.getElementById('windSpeed').innerHTML = weatherToday.windSpeed;
      document.getElementById('windChill').innerHTML = windChill(
        weatherToday.temp,
        weatherToday.windSpeed
      );
  
      for (i = 0; i < jsonObject.list.length; i++) {
        let forecast = jsonObject.list[i];
  
        if (forecast.dt_txt.slice(-8) == '18:00:00') {
          let td = document.createElement('td');
          let img = document.createElement('img');
          let temp = document.createTextNode(Math.round(forecast.main.temp));
  
          td.innerHTML = '&#176;';
          td.prepend(temp);
  
          img.setAttribute(
            'src',
            `https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`
          );
          img.setAttribute('alt', forecast.weather[0].main);
  
          td.prepend(img);
  
          document.getElementById('forecastRow').appendChild(td);
        }
      }
    })
    .catch(err => {
      document.getElementById('weatherSummary').innerHTML = err;
      document.getElementById('forecastRow').innerHTML = err;
    });
  
  const eventAPI = 'https://byui-cit230.github.io/weather/data/towndata.json';
  
  fetch(eventAPI)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Could not retrieve current events!');
      }
    })
    .then(jsonObject => {
      const prestonEvents = jsonObject.towns.find(town => {
        return town.name == 'Soda Springs';
      }).events;
  
      prestonEvents.forEach(event => {
        let li = document.createElement('li');
        li.innerHTML = event;
        document.getElementById('preston-events').appendChild(li);
      });
    })
    .catch(err => {
      document.getElementById('weatherSummary').innerHTML = err;
      document.getElementById('forecastRow').innerHTML = err;
    });

    function events(town) {
      const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
   
   fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
      const towns = jsonObject['towns'];
      for (let i = 0; i < towns.length; i++ ) {
          if (towns[i].name == town) {
              let events = towns[i].events;
              for (let i=0; i < events.length; i++) {
                  let event = document.createElement('p');
                  event.innerHTML = events[i];
                  document.querySelector('#weather-events').appendChild(event);
              }
          }
      }
   });
  }