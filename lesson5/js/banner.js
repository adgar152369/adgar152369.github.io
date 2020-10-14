var dates = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
]

var date = new Date();
var day = dates[date.getDay()];

if (day == "Sunday"){
    document.getElementById('banner-display').innerHTML = "Today is " + day + "!";
}
if (day == "Monday"){
    document.getElementById('banner-display').innerHTML = "Today is " + day + "!";
}
if (day == "Tuesday"){
    document.getElementById('banner-display').innerHTML = "<b>"+ day + "</b> = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion!";
}
if (day == "Wednesday"){
    document.getElementById('banner-display').innerHTML = "Today is " + day + "!";
}
