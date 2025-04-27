let weatherDescription = document.querySelector(".weather-description");
let imgIcon = document.querySelector("#weather-icon");
let dateTime = document.querySelector(".date-time");
let temp = document.querySelector(".current-temp");
const btn = document.querySelector("button.get-weather");
let rainInfo = document.querySelector(".rain-info");
let windInfo = document.querySelector(".wind-info");
let humidityInfo = document.querySelector(".humidity-info");
let input = document.querySelector("#cityInput")

let weatherPerHours = document.querySelectorAll(".time");
let tempPerHours = document.querySelectorAll(".temp");
let weatherIcons = document.querySelectorAll(".weather-icon");

async function getWeather(url) {
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data)

        //Weather Description
        weatherDescription.innerText = data.current.condition.text;

        //imgIcon
        let iconadrs = data.current.condition.icon;
        let correctAddress = "https:" + iconadrs;
        imgIcon.setAttribute("src", correctAddress)

        //dateTime
        dateTime.innerText = data.current.last_updated;

        //temp 
        temp.innerText = data.current.temp_c + "°C";

        //weather-info
        rainInfo.innerText = data.forecast.forecastday[0].day.daily_chance_of_rain + "%";
        windInfo.innerText = data.forecast.forecastday[0].day.maxwind_kph + " km/h";
        humidityInfo.innerText = data.forecast.forecastday[0].day.avghumidity + "%";

        const currentEpoch = data.current.last_updated_epoch;
        const hoursArray = data.forecast.forecastday[0].hour;

        // Find the index where time_epoch >= currentEpoch
        const startIndex = hoursArray.findIndex(hour => hour.time_epoch >= currentEpoch);
        // If current time is beyond last hour, fallback to last 4 hours or empty
        const next4Hours = (startIndex !== -1)
            ? hoursArray.slice(startIndex, startIndex + 4)
            : [];
        // Now populate your UI with next4Hours
        next4Hours.forEach((hour, i) => {
            weatherPerHours[i].innerText = hour.time.split(" ")[1]; // get only time part "HH:MM"
            tempPerHours[i].innerText = hour.temp_c + "°C";
            weatherIcons[i].setAttribute("src", "https:" + hour.condition.icon);
        });


    } catch (e) {
        console.log('-----Error-----');
        console.log(e)
    }
}
const apiKey = "f713eb338cb04e3784300701252704";
getWeather(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=dehradun&days=1&aqi=no&alerts=no`);

btn.addEventListener("click", () => {

    if (input.value.trim() != "") {
        let loc = input.value;
        
        let url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${loc}&days=1&aqi=no&alerts=no`;

        getWeather(url)

    }else{
        alert("Please Write Your City Name...!")
    }
})

