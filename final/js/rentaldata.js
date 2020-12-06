const requestURL = "https://raw.githubusercontent.com/adgar152369/adgar152369.github.io/master/final/rentalprices.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.log(jsonObject); 
    
    document.getElementById("price").textContent = jsonObject.rental[3].reservationType.reserved.priceHalfDay;
    document.getElementById("price2").textContent = jsonObject.rental[0].reservationType.reserved.priceFullDay;
  });
