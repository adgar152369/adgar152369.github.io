const requestURL = "https://adgar152369.github.io/final/rentalprices.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.log(jsonObject); 
    
    //Honda Metro Scooter JSON data prices
    document.getElementById("HMS-reserved-half-price1").textContent = jsonObject.rental[0].reservationType.reserved.priceHalfDay;
    document.getElementById("HMS-reserved-full-price2").textContent = jsonObject.rental[0].reservationType.reserved.priceFullDay;
    document.getElementById("HMS-walkIn-half-price1").textContent = jsonObject.rental[0].reservationType.walkIn.priceFullDay;
    document.getElementById("HMS-walkIn-full-price2").textContent = jsonObject.rental[0].reservationType.walkIn.priceFullDay;
    //Honda Dio Scooter 
    document.getElementById("HDS-reserved-half-price1").textContent = jsonObject.rental[1].reservationType.reserved.priceHalfDay;
    document.getElementById("HDS-reserved-full-price2").textContent = jsonObject.rental[1].reservationType.reserved.priceFullDay;
    document.getElementById("HDS-walkIn-half-price1").textContent = jsonObject.rental[1].reservationType.walkIn.priceFullDay;
    document.getElementById("HDS-walkIn-full-price2").textContent = jsonObject.rental[1].reservationType.walkIn.priceFullDay;
    //Honda PCX150 Scooter 
    document.getElementById("HPCX-reserved-half-price1").textContent = jsonObject.rental[2].reservationType.reserved.priceHalfDay;
    document.getElementById("HPCX-reserved-full-price2").textContent = jsonObject.rental[2].reservationType.reserved.priceFullDay;
    document.getElementById("HPCX-walkIn-half-price1").textContent = jsonObject.rental[2].reservationType.walkIn.priceFullDay;
    document.getElementById("HPCX-walkIn-full-price2").textContent = jsonObject.rental[2].reservationType.walkIn.priceFullDay;
    //Honda Pioneer ATV 
    document.getElementById("HPS-reserved-half-price1").textContent = jsonObject.rental[3].reservationType.reserved.priceHalfDay;
    document.getElementById("HPS-reserved-full-price2").textContent = jsonObject.rental[3].reservationType.reserved.priceFullDay;
    document.getElementById("HPS-walkIn-half-price1").textContent = jsonObject.rental[3].reservationType.walkIn.priceFullDay;
    document.getElementById("HPS-walkIn-full-price2").textContent = jsonObject.rental[3].reservationType.walkIn.priceFullDay;
    //Jeep Wrangler 4 door 
    document.getElementById("JW4-reserved-half-price1").textContent = jsonObject.rental[4].reservationType.reserved.priceHalfDay;
    document.getElementById("JW4-reserved-full-price2").textContent = jsonObject.rental[4].reservationType.reserved.priceFullDay;
    document.getElementById("JW4-walkIn-half-price1").textContent = jsonObject.rental[4].reservationType.walkIn.priceFullDay;
    document.getElementById("JW4-walkIn-full-price2").textContent = jsonObject.rental[4].reservationType.walkIn.priceFullDay;
    //Jeep Wrangler 2 door
    document.getElementById("JW2-reserved-half-price1").textContent = jsonObject.rental[5].reservationType.reserved.priceHalfDay;
    document.getElementById("JW2-reserved-full-price2").textContent = jsonObject.rental[5].reservationType.reserved.priceFullDay;
    document.getElementById("JW2-walkIn-half-price1").textContent = jsonObject.rental[5].reservationType.walkIn.priceFullDay;
    document.getElementById("JW2-walkIn-full-price2").textContent = jsonObject.rental[5].reservationType.walkIn.priceFullDay;
  });
