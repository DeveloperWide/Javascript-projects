let weatherDescription = document.querySelector(".weather-description");
let imgIcon = document.querySelector("#weather-icon");
let dateTime = document.querySelector(".date-time");
let temp = document.querySelector(".temp");
const btn = document.querySelector("button");


const apiKey = "e0334fc5866448c7aff32951241404";
const loc = "dehradun"

console.log(weatherDescription , "..." , imgIcon , "..." , dateTime , "..." , temp)

let url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${loc}&days=1&aqi=no&alerts=no`;


async function getWeather() {
    try{
        let res = await fetch(url);
        let data = await res.json();
        console.log(data)

        //Weather Description
       weatherDescription.innerText = data.current.condition.text;

       //imgIcon
       let iconadrs = data.current.condition.icon;
       let correctAddress = "https:" + iconadrs;
       imgIcon.setAttribute("src" , correctAddress);

       //dateTime
       dateTime.innerText  = data.current.last_updated;

       //temp 
       temp.innerText = data.current.temp_c + "°C";
        
    }catch(e){
        console.log('-----Error-----');
        console.log(e)
    }
}

btn.addEventListener("click" , () => {
    getWeather()
})