// Input & Search Btn
const input = document.querySelector(".search");
const searchBtn = document.querySelector(".search-btn");

// API Key & Country Code
// Enter Here Your Api Key 
const countryCode = "IN";


// Elements
const tempEl = document.getElementById("temp");
const locationEl = document.getElementById("location");
const timeEl = document.getElementById("time");
const dayEl = document.getElementById("day");
const dateEl = document.getElementById("date");
const cloudyEl = document.getElementById("cloudy");
const humidityEl = document.getElementById("humidity");
const windEl = document.getElementById("wind");

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


function fetchWeather(cityName) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryCode}&units=metric&appid=${apiKey}`;

    fetch(url).then((res) => {
        return res.json();
    }).then((data) => {
        if(data.cod == 404) alert("City Not Found!")
            console.log(data)
        // Update UI
        tempEl.innerHTML = `${Math.round(data.main.temp)}&deg;`;
        locationEl.textContent = data.name;
        cloudyEl.textContent = `${data.clouds.all}%` ;
        humidityEl.textContent = `${data.main.humidity}%`;
        windEl.textContent = `${data.wind.speed}Km/h`;


        // Date , Day & Time
        const now = new Date();
        dateEl.textContent = now.toDateString();
        timeEl.textContent = `${now.toLocaleTimeString([], {hour: "2-digit" , minute:"2-digit"})} ,`;

    }).catch((err) => {
        console.log(err);
    })
}

const checkInputValue = () => {
    if(input.value.trim() !== ""){
        fetchWeather(input.value);
        input.value = "";
    }else{
        alert("Please Enter a location");
    }
}

searchBtn.addEventListener("click", (e) => {
    checkInputValue();
})

input.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
       checkInputValue();
    }
})

fetchWeather("Uttarkashi");