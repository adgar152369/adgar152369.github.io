const url = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(url)
  .then((response) => response.json())
  .then((jsObject) => {
      console.log(jsObject);

      document.getElementById('town-event1').textContent = jsObject.towns[6].events[0];
      document.getElementById('town-event2').textContent = jsObject.towns[6].events[1];
      document.getElementById('town-event3').textContent = jsObject.towns[6].events[2];
  });