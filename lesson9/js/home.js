const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];

    towns.splice(6,1);    
    towns.splice(2,2);    
    towns.splice(0,1);    
    for (let i = 0; i < towns.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let yearFounded = document.createElement('p');
        let population = document.createElement('p');
        let averageRainfall = document.createElement('p');
        let image = document.createElement('img');
        let motto = document.createElement('h3');

        h2.textContent = towns[i].name;
        population.textContent = 'Population: ' + towns[i].currentPopulation;
        yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
        averageRainfall.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
        motto.textContent = towns[i].motto;
        
        if (towns[i].name == "Preston") {
          image.setAttribute('src', src = "images/preston.jpg");
          image.setAttribute('alt', 'Preston, Idaho');
      } else if (towns[i].name == "Fish Haven") {
          image.setAttribute('src', src = "images/fish-haven-hero.jpg");
          image.setAttribute('alt', 'Bear Lake near Fish Haven, Idaho');
      } else {
          image.setAttribute('src', src = "images/idaho1.jpg");
          image.setAttribute('alt', 'Soda Springs, Gyser');
      }
        h2.setAttribute('class', 'header-container');
        yearFounded.setAttribute('class', 'header-container');
        population.setAttribute('class', 'header-container');
        averageRainfall.setAttribute('class', 'header-container');
        motto.setAttribute('class', 'header-container');
        card.setAttribute('id', 'container');

        card.appendChild(h2);
        card.appendChild(motto);
        card.appendChild(yearFounded);
        card.appendChild(population);
        card.appendChild(averageRainfall);
        card.appendChild(image);
  
        document.querySelector('div.cards').appendChild(card);

      }

  });




