let weatherDescription = document.querySelector(".weather-description");
let imgIcon = document.querySelector("#weather-icon").src;
let dateTime = document.querySelector(".date-time");
let btn = document.querySelector("button");



const cityName = "Dehradun";
const stateCode = "UK";
const countryCode = "IN";
const apiKey = "faeb2fe4af7f4417d69965da71596845";



let url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName},${stateCode},${countryCode}&appid=${apiKey}`


function getWeather() {
    fetch(url).then((res) => {
        return res.json();
    }).then((data) => {
        console.log(data)
        console.log(data.list)
        dateTime.innerText = data.list[1].dt_txt;
        imgIcon = data.list[1].weather[0].icon;
        imgIcon = data.list[1].weather[0].description;
    }).catch((e) => {
        console.log("----Error----");
        console.log(e)
    })
}

btn.addEventListener("click" , () => {
    getWeather()
})