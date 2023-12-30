const apikey = "587c989fed0bb20bfea29ca9352dc512";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city){
    const response = await fetch(apiurl + city + '&appid=${apikey}');

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°c";

    document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

checkWeather();