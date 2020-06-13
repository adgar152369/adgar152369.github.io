var date = document.lastModified;
document.getElementById('output').innerHTML = ('Last modified: ' + date);

function toggle_menu(){
    document.getElementById('navigation').classList.toggle('hide');
}

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
document.getElementById('today-date').innerHTML = date;
