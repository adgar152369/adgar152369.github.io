const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
document.getElementById('current-date').textContent = new Date().toLocaleDateString('en-US', options);

var x = document.lastModified;
  document.getElementById("update-date").innerHTML = x;

var d = new Date();
var year = d.getFullYear();
document.getElementById('current-year').innerHTML = year;
