let now = new Date();
let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let days = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];
let day = days[now.getDay()];
let h2 = document.querySelector("h2");
let year = now.getFullYear();
let months = [
  "Jan",
  "Feb",
  "March",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Augu",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[now.getMonth()];
if (minutes <= 9) {
  h2.innerHTML = `${day}  ${hours}:0${minutes}    ${month} ${date} , ${year}`;
} else {
  h2.innerHTML = `${day}  ${hours}:${minutes}    ${month} ${date} , ${year}`;
}

let button = document.querySelector("button");
button.onclick = function changeH1(event) {
  event.preventDefault();
  let input = document.querySelector(".value");
  let value = input.value;
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${value}`;
  let apiKey = "d5a8e815ad3352e76fb600d6bbd808c7";
 let input2=document.querySelector("#city");
let apiUrl =
  `https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric`;

axios.get(`${apiUrl}&appid=${apiKey}`).then(function showTemperature(response) {
  console.log(response.data);
  let tem = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector(".temp-number");
  temperatureElement.innerHTML = `${tem}`;
  let humidity = document.querySelector(".humidity");
  let newHumidity = response.data.main.humidity;
  humidity.innerHTML = `Humidity: ${newHumidity}%`;
  let weatherDescription= document.querySelector(".weather-description");
  let  newWeatherDescription = response.data.weather[0].description;
  weatherDescription.innerHTML = `${newWeatherDescription}`;
  let wind= document.querySelector(".wind");
  let newWind = Math.round(response.data.wind.speed);
  wind.innerHTML = `Wind: ${newWind} m/s`;
  let clouds = document.querySelector(".clouds");
  let newClouds=response.data.clouds.all;
  clouds.innerHTML = `Cloudiness: ${newClouds}%`;
 
 
  

  
 
  

});

};

let input = document.querySelector(".value");
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
  let input = document.querySelector(".value");
  let value = input.value;
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${value}`;
let apiKey = "d5a8e815ad3352e76fb600d6bbd808c7";
 let input2=document.querySelector("#city");
let apiUrl =
  `https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric`;

axios.get(`${apiUrl}&appid=${apiKey}`).then(function showTemperature(response) {
  console.log(response.data);
  let tem = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector(".temp-number");
  temperatureElement.innerHTML = `${tem}`;
  let humidity = document.querySelector(".humidity");
  let newHumidity = response.data.main.humidity;
  humidity.innerHTML = `Humidity: ${newHumidity}%`;
  let weatherDescription= document.querySelector(".weather-description");
  let  newWeatherDescription = response.data.weather[0].description;
  weatherDescription.innerHTML = `${newWeatherDescription}`;
  let wind= document.querySelector(".wind");
  let newWind = Math.round(response.data.wind.speed);
  wind.innerHTML = `Wind: ${newWind} m/s`;
  let clouds = document.querySelector(".clouds");
  let newClouds=response.data.clouds.all;
  clouds.innerHTML = `Cloudiness: ${newClouds}%`;
  
});
  }
});


function showPostion(position){
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  let apiKey = "d5a8e815ad3352e76fb600d6bbd808c7";
  let apiUrl =
  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(function showTemperature(response) {
    console.log(response.data);
    let h1 = document.querySelector("h1");
    let newH1= response.data.name;
    h1.innerHTML=`${newH1}`;
    let tem = Math.round(response.data.main.temp);
    let temperatureElement = document.querySelector(".temp-number");
    temperatureElement.innerHTML = `${tem}`;
    let humidity = document.querySelector(".humidity");
    let newHumidity = response.data.main.humidity;
    humidity.innerHTML = `Humidity: ${newHumidity}%`;
    let weatherDescription= document.querySelector(".weather-description");
    let  newWeatherDescription = response.data.weather[0].description;
    weatherDescription.innerHTML = `${newWeatherDescription}`;
    let wind= document.querySelector(".wind");
    let newWind = Math.round(response.data.wind.speed);
    wind.innerHTML = `Wind: ${newWind} m/s`;
    let clouds = document.querySelector(".clouds");
    let newClouds=response.data.clouds.all;
    clouds.innerHTML = `Cloudiness: ${newClouds}%`;



 


    




    
  });
    }
 
function getCurrentPosition(){
  navigator.geolocation.getCurrentPosition(showPostion); 
};


let locationButton = document.querySelector("#currentLocation");
locationButton.addEventListener("click", getCurrentPosition);



let fahrenheit = document.querySelector(".fah");
fahrenheit.onclick = function tempConvert() {
  let tempNumber = document.querySelector(".temp-number");
  let tempNum = tempNumber.innerHTML;
  let tempNew = Math.round((tempNum * 9) / 5 + 32);
  tempNumber.innerHTML = `${tempNew}`;
};

let cel = document.querySelector(".cel");
cel.onclick = function tempConvert() {
  let tempNumber = document.querySelector(".temp-number");
  let tempNum = tempNumber.innerHTML;
  let tempNew = Math.round(((tempNum - 32) * 5) / 9);
  tempNumber.innerHTML = `${tempNew}`;
};
