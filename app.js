const URL = "https://api.openweathermap.org/data/2.5/weather?q=";
const API_KEY = "&appid=faca367ec717d39fbb76e0c4b9fd542d&units=metric";
const searchButton = document.querySelector("button");
const userInput = document.querySelector("input");
const errorMsg = document.querySelector(".error-msg");
searchButton.addEventListener("click", () => {
    let userInputValue = getUserInput();  
    getWeather(userInputValue);
});
function getUserInput() {
    return userInput.value;
}
function setName(data) {
    document.querySelector(".city").innerHTML = data.name;
}
function setTemp(data) {
    document.querySelector(".temp-value").innerHTML = `${Math.round(data.main.temp)}°C`;
}
function setImage(data) {
let imageLink = document.querySelector(".weather-img");
imageUrl = data.weather[0].main.toLowerCase();
imageLink.src = `${imageUrl}.png`;
}
function setHumidity(data) {
    document.querySelector("#humidity-up").innerHTML = `${data.main.humidity}%`;
}
function setWindSpeed(data) {
    document.querySelector("#wind-up").innerHTML = `${data.wind.speed} km/h`;
}
function displayOn () {
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".temprature").style.display = "block";
    document.querySelector(".reports").style.display = "flex";
}
 async function getWeather(userInputValue) {
        const respone = await fetch(`${URL}${userInputValue}${API_KEY}`);
        if(respone.status == 404){
            errorMsg.style.display = "block";
            document.querySelector(".weather").style.display = "none";
            document.querySelector(".temprature").style.display = "none";
            document.querySelector(".reports").style.display = "none";

        }
        else errorMsg.style.display = "none";
    let data = await respone.json();
    setName(data);
    setTemp(data);
    setImage(data);
    setHumidity(data);
    setWindSpeed(data);
    displayOn();
 }
