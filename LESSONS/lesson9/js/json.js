const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
.then(function (response) {
    return response.json();
})

.then(function (jsonObject) {

    const towns = jsonObject['towns'];
    const three = towns.filter(town => (town.name == 'Preston' || town.name == 'Fish Haven' || town.name == 'Soda Springs'));

    three.forEach(town => {

        let card = document.createElement('section');
        let name = document.createElement('h3');
        let motto = document.createElement('h4');
        let image = document.createElement('img');
        let year = document.createElement('p');
        let pop = document.createElement('p');
        let rain = document.createElement('p');

        name.textContent = `${town.name}`;
        motto.textContent = `${town.motto}`;
        image.setAttribute('src', 'images/' + town.photo);
        image.setAttribute('alt', town.name);
        year.textContent = `Year Founded: ${town.yearFounded}`;
        pop.textContent = `Population: ${town.currentPopulation}`;
        rain.textContent = `Annual Rain Fall: ${town.averageRainfall}`;
        
        card.appendChild(name);
        card.appendChild(motto);
        card.appendChild(image);
        card.appendChild(year);
        card.appendChild(pop);
        card.appendChild(rain);
        
        document.querySelector('div.cards').appendChild(card);

    });

});