const url = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(url)
  .then((response) => response.json())
  .then((jsObject) => {
      console.log(jsObject);

      document.getElementById('fh-town-event1').textContent = jsObject.towns[1].events[0];
      document.getElementById('fh-town-event2').textContent = jsObject.towns[1].events[1];
      document.getElementById('fh-town-event3').textContent = jsObject.towns[1].events[2];
  });

const ssURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(url)
  .then((response) => response.json())
  .then((jsObject) => {
      console.log(jsObject);

      document.getElementById('ss-town-event1').textContent = jsObject.towns[6].events[0];
      document.getElementById('ss-town-event2').textContent = jsObject.towns[6].events[1];
      document.getElementById('ss-town-event3').textContent = jsObject.towns[6].events[2];
  });

const pURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(pURL)
  .then((response) => response.json())
  .then((jsObject) => {
      console.log(jsObject);

      document.getElementById('p-town-event1').textContent = jsObject.towns[5].events[0];
      document.getElementById('p-town-event2').textContent = jsObject.towns[5].events[1];
      document.getElementById('p-town-event3').textContent = jsObject.towns[5].events[2];
  });