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
]
//get next three days forecast
var today = daysArray[date.getDay()];
var tomorrow = daysArray[date.getDay() + 1];
var dayAfterTomorrow = daysArray[date.getDay() + 2];

//display next three days forecast
document.getElementById('today-forecast').textContent = today;
document.getElementById('tomorrow-forecast').textContent = tomorrow;
document.getElementById('third-day').textContent = dayAfterTomorrow;

//hambgurger menu
function toggleMenu(){
    document.getElementsByClassName('nav-list')[0].classList.toggle('responsive');
  }

