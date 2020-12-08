let date = new Date();

//create days of the week array
let daysArray = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

//get next three days forecast
var nextDay = daysArray[date.getDay() + 1];
var tomorrow = daysArray[date.getDay() + 2];
var dayAfterTomorrow = daysArray[date.getDay() + 3];

//display next three days forecast
document.getElementById('today-forecast').textContent = nextDay;
document.getElementById('tomorrow-forecast').textContent = tomorrow;
document.getElementById('third-day').textContent = dayAfterTomorrow;

//hambgurger menu
function toggleMenu(){
    document.getElementsByClassName('nav-list')[0].classList.toggle('responsive');
  }
