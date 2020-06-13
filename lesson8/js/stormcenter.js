function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}
document.getElementById("submit-info").onclick = function submitForm() {
    location.href = "/lesson8/thanks.html";
}