function updateTime() {

// Prague
let pragueElement = document.querySelector("#prague");
let pragueDateElement = pragueElement.querySelector(".date");
let pragueTimeElement = pragueElement.querySelector(".time");
let pragueTime = moment().tz("Europe/Prague");

pragueDateElement.innerHTML = pragueTime.format("MMMM Do YYYY");
pragueTimeElement.innerHTML = pragueTime.format("h:mm:ss [<small>]A[</small>]");

// Sydney
let sydneyElement = document.querySelector("#sydney");
let sydneyDateElement = sydneyElement.querySelector(".date");
let sydneyTimeElement = sydneyElement.querySelector(".time");
let sydneyTime = moment().tz("Australia/Sydney");

sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
sydneyTimeElement.innerHTML = sydneyTime.format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);
