const requestURL = "https://adgar152369.github.io/final/rentalprices.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.log(jsonObject); 
    
    document.getElementById("price").textContent = jsonObject.rental.type;
  });
