import { dateBuilder, sunBuilder } from "./datebuilder";
import * as SunCalc from "./sun";
export function displayResultsCoord (weather) {
    let lat = document.querySelector('.latitude');
      lat.innerHTML = weather.coord.lat;
    let long = document.querySelector('.longtude');
      long.innerHTML = weather.coord.lon;
  
    var sunrise = new Date().sunrise(weather.coord.lat, weather.coord.lon);
    var sunset = new Date().sunset(weather.coord.lat, weather.coord.lon); 
    let date1 = document.querySelector('.sun1');
      date1.innerText = sunBuilder(sunrise);
    let date2 = document.querySelector('.sun2');
      date2.innerText = sunBuilder(sunset);
  }
  
  export  function displayResults (weather) {
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.city.name}, ${weather.city.country}`;
  
    let now = new Date();
    var g = new Date(weather.list[0].dt_txt).valueOf();	
    var K;
    var d = new Date();
      d.setDate(d.getDate() + 1);
    if(now < g){ K = Math.floor((d.getHours()/3))}else{K = Math.floor((d.getHours()/3)-1)};
  
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);
  
    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(((weather.list[0].main.temp)-273.15)*1.8+32)}<span>°F</span>`;
  
    let weather_feels = document.querySelector('.current .feels');
    weather_feels.innerText ="Feels like " + `${Math.round(((weather.list[0].main.feels_like)-273.15)*1.8+32)}°F`;
  
    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = weather.list[0].weather[0].description;
  
    let hilow = document.querySelector('.hi-low');
    hilow.innerText = "Min " + `${Math.round(((weather.list[0].main.temp_min)-273.15)*1.8+32)}°F` + " / Max " + `${Math.round(((weather.list[0].main.temp_max)-273.15)*1.8+32)}°F`;
  
    let pressure = document.querySelector('.current .pressure');
    pressure.innerHTML = `${Math.round(weather.list[0].main.pressure)}<span> hPa</span>`;
  
    let humidity = document.querySelector('.current .humidity');
    humidity.innerHTML = `${Math.round(weather.list[0].main.humidity)}<span> %</span>`;
  
    let wind = document.querySelector('.current .wind');
    wind.innerHTML = `${Math.round(weather.list[0].wind.speed)}<span> m/s</span>`;
  
    let iconElement = document.querySelector(".weather-icon");
    iconElement.innerHTML = `<img src="../src/assets/icons/${weather.list[0].weather[0].icon}.svg"/>`;
    document.body.style.backgroundImage =
    "url('../src/assets/images/" + weather.list[0].weather[0].icon + ".jpg')";
  }  