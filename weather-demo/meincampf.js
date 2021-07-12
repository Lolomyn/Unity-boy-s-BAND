

function displayResults (weather) {
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
  iconElement.innerHTML = `<img src="../assets/icons/${weather.list[0].weather[0].icon}.svg"/>`;
  document.body.style.backgroundImage =
  "url('../assets/images/" + weather.list[0].weather[0].icon + ".jpg')";
  



  //погода на завтра
var LAST = (14-(K));
var FIRST = (7-(K)); 
var arr1 = [];
var arr11 = [];
for (var i=FIRST; i<=LAST; i++) {
 arr1.push(weather.list[i].main.temp);  
 arr11.push(weather.list[i].weather[0].description);   
};
  min1 = arr1[0];
  max1 = min1;
  for (i = 1; i < arr1.length; ++i) {
      if (arr1[i] > max1) max1 = arr1[i];
      if (arr1[i] < min1) min1 = arr1[i];
  } 
  let tempmin = document.querySelector( '.tablo .day .tempnight2');
  tempmin.innerHTML = "Min " + Math.round(((min1)-273.15)*1.8+32) + `<span>°F</span>`;

  let tempmax = document.querySelector( '.tablo .day .tempday2');
  tempmax.innerHTML = "Max " + Math.round(((max1)-273.15)*1.8+32) + `<span>°F</span>`;
  //в 12:00
  let weather_el2 = document.querySelector('.tablo .day .weather2');
  weather_el2.innerText = arr11[4];

  let temp00 = document.querySelector( '.tablo .day #time1day2');
  temp00.innerHTML = " " + Math.round((arr1[0]-273.15)*1.8+32) + `<span>°F</span>`;

  let temp03 = document.querySelector( '.tablo .day #time2day2');
  temp03.innerHTML = " " + Math.round((arr1[1]-273.15)*1.8+32) + `<span>°F</span>`;

  let temp06 = document.querySelector( '.tablo .day #time3day2');
  temp06.innerHTML = " " + Math.round((arr1[2]-273.15)*1.8+32) + `<span>°F</span>`;

  let temp09 = document.querySelector( '.tablo .day #time4day2');
  temp09.innerHTML = " " + Math.round((arr1[3]-273.15)*1.8+32) + `<span>°F</span>`;

  let temp12 = document.querySelector( '.tablo .day #time5day2');
  temp12.innerHTML = " " + Math.round((arr1[4]-273.15)*1.8+32) + `<span>°F</span>`;

  let temp15 = document.querySelector( '.tablo .day #time6day2');
  temp15.innerHTML = " " + Math.round((arr1[5]-273.15)*1.8+32) + `<span>°F</span>`;

  let temp18 = document.querySelector( '.tablo .day #time7day2');
  temp18.innerHTML = " " + Math.round((arr1[6]-273.15)*1.8+32) + `<span>°F</span>`;

  let temp21 = document.querySelector( '.tablo .day #time8day2');
  temp21.innerHTML = " " + Math.round((arr1[7]-273.15)*1.8+32) + `<span>°F</span>`;

//погода на послезавтра
var LAST1 = (22-K);
var FIRST1 = (15-K);
var arr2 = [];
var arr12 = [];
for (var i= FIRST1; i<=LAST1; i++) {
 arr2.push(weather.list[i].main.temp);  
 arr12.push(weather.list[i].weather[0].description);   
};
  min2 = arr2[0];
  max2 = min2;
  for (i = 1; i < arr2.length; ++i) {
      if (arr2[i] > max2) max2 = arr2[i];
      if (arr2[i] < min2) min2 = arr2[i];
  }   
  let temp4 = document.querySelector( '.tablo .day .tempnight3');
  temp4.innerHTML = "Min " + Math.round(((min2)-273.15)*1.8+32) + `<span>°F</span>`;

  let temp5 = document.querySelector( '.tablo .day .tempday3');
  temp5.innerHTML = "Max " + Math.round(((max2)-273.15)*1.8+32) + `<span>°F</span>`;

  let weather_el3 = document.querySelector('.tablo .day .weather3');
  weather_el3.innerText = arr12[4];

  let temp002 = document.querySelector( '.tablo .day #time1day3');
  temp002.innerHTML = " " + Math.round((arr2[0]-273.15)*1.8+32) + `<span>°F</span>`;

  let temp032 = document.querySelector( '.tablo .day #time2day3');
  temp032.innerHTML = " " + Math.round((arr2[1]-273.15)*1.8+32) + `<span>°F</span>`;

  let temp062 = document.querySelector( '.tablo .day #time3day3');
  temp062.innerHTML = " " + Math.round((arr2[2]-273.15)*1.8+32) + `<span>°F</span>`;

  let temp092 = document.querySelector( '.tablo .day #time4day3');
  temp092.innerHTML = " " + Math.round((arr2[3]-273.15)*1.8+32) + `<span>°F</span>`;

  let temp122 = document.querySelector( '.tablo .day #time5day3');
  temp122.innerHTML = " " + Math.round((arr2[4]-273.15)*1.8+32) + `<span>°F</span>`;

  let temp152 = document.querySelector( '.tablo .day #time6day3');
  temp152.innerHTML = " " + Math.round((arr2[5]-273.15)*1.8+32) + `<span>°F</span>`;

  let temp182 = document.querySelector( '.tablo .day #time7day3');
  temp182.innerHTML = " " + Math.round((arr2[6]-273.15)*1.8+32) + `<span>°F</span>`;

  let temp212 = document.querySelector( '.tablo .day #time8day3');
  temp212.innerHTML = " " + Math.round((arr2[7]-273.15)*1.8+32) + `<span>°F</span>`;

//погода на после-послезавтра
var LAST2 = (30-K);
var FIRST2 = (23-K);
var arr3 = [];
var arr13 = [];
for (var i=FIRST2; i<=LAST2; i++) {
 arr3.push(weather.list[i].main.temp);  
 arr13.push(weather.list[i].weather[0].description);       
};
  min3 = arr3[0];
  max3 = min3;
  for (i = 1; i < arr3.length; ++i) {
      if (arr3[i] > max3) max3 = arr3[i];
      if (arr3[i] < min3) min3 = arr3[i];
  }  
  let temp6 = document.querySelector( '.tablo .day .tempnight4');
  temp6.innerHTML = "Min " + Math.round(((min3)-273.15)*1.8+32) + `<span>°F</span>`;

  let temp7 = document.querySelector( '.tablo .day .tempday4');
  temp7.innerHTML = "Max " + Math.round(((max3)-273.15)*1.8+32) + `<span>°F</span>`;

  let weather_el4 = document.querySelector('.tablo .day .weather4');
  weather_el4.innerText = arr13[4];

  let temp003 = document.querySelector( '.tablo .day #time1day4');
  temp003.innerHTML = " " + Math.round((arr3[0]-273.15)*1.8+32) + `<span>°F</span>`;

  let temp033 = document.querySelector( '.tablo .day #time2day4');
  temp033.innerHTML = " " + Math.round((arr3[1]-273.15)*1.8+32) + `<span>°F</span>`;

  let temp063 = document.querySelector( '.tablo .day #time3day4');
  temp063.innerHTML = " " + Math.round((arr3[2]-273.15)*1.8+32) + `<span>°F</span>`;

  let temp093 = document.querySelector( '.tablo .day #time4day4');
  temp093.innerHTML = " " + Math.round((arr3[3]-273.15)*1.8+32) + `<span>°F</span>`;

  let temp123 = document.querySelector( '.tablo .day #time5day4');
  temp123.innerHTML = " " + Math.round((arr3[4]-273.15)*1.8+32) + `<span>°F</span>`;

  let temp153 = document.querySelector( '.tablo .day #time6day4');
  temp153.innerHTML = " " + Math.round((arr3[5]-273.15)*1.8+32) + `<span>°F</span>`;

  let temp183 = document.querySelector( '.tablo .day #time7day4');
  temp183.innerHTML = " " + Math.round((arr3[6]-273.15)*1.8+32) + `<span>°F</span>`;

  let temp213 = document.querySelector( '.tablo .day #time8day4');
  temp213.innerHTML = " " + Math.round((arr3[7]-273.15)*1.8+32) + `<span>°F</span>`;

//погода на после-после-послезавтра
var LAST3 = (38-K);
var FIRST3 = (31-K);
var arr4 = [];
var arr14 = [];
for (var i=FIRST3; i<=LAST3; i++) {
 arr4.push(weather.list[i].main.temp);  
 arr14.push(weather.list[i].weather[0].description);         
};
  min4 = arr4[0];
  max4 = min4;
  for (i = 1; i < arr4.length; ++i) {
      if (arr4[i] > max4) max4 = arr4[i];
      if (arr4[i] < min4) min4 = arr4[i];
  }  
  let temp8 = document.querySelector( '.tablo .day .tempnight5');
  temp8.innerHTML = "Min " + Math.round(((min4)-273.15)*1.8+32) + `<span>°F</span>`;

  let temp9 = document.querySelector( '.tablo .day .tempday5');
  temp9.innerHTML = "Max " + Math.round(((max4)-273.15)*1.8+32) + `<span>°F</span>`; 

  let weather_el5 = document.querySelector('.tablo .day .weather5');
  weather_el5.innerText = arr14[4];

  let temp004 = document.querySelector( '.tablo .day #time1day5');
  temp004.innerHTML = " " + Math.round((arr4[0]-273.15)*1.8+32) + `<span>°F</span>`;

  let temp034 = document.querySelector( '.tablo .day #time2day5');
  temp034.innerHTML = " " + Math.round((arr4[1]-273.15)*1.8+32) + `<span>°F</span>`;

  let temp064 = document.querySelector( '.tablo .day #time3day5');
  temp064.innerHTML = " " + Math.round((arr4[2]-273.15)*1.8+32) + `<span>°F</span>`;

  let temp094 = document.querySelector( '.tablo .day #time4day5');
  temp094.innerHTML = " " + Math.round((arr4[3]-273.15)*1.8+32) + `<span>°F</span>`;

  let temp124 = document.querySelector( '.tablo .day #time5day5');
  temp124.innerHTML = " " + Math.round((arr4[4]-273.15)*1.8+32) + `<span>°F</span>`;

  let temp154 = document.querySelector( '.tablo .day #time6day5');
  temp154.innerHTML = " " + Math.round((arr4[5]-273.15)*1.8+32) + `<span>°F</span>`;

  let temp184 = document.querySelector( '.tablo .day #time7day5');
  temp184.innerHTML = " " + Math.round((arr4[6]-273.15)*1.8+32) + `<span>°F</span>`;

  let temp214 = document.querySelector( '.tablo .day #time8day5');
  temp214.innerHTML = " " + Math.round((arr4[7]-273.15)*1.8+32) + `<span>°F</span>`;
}


//для показа дней недели
function showDateTime() {
          
  var d = new Date();
  var n1, n2, n3, n4;
  var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
     
     if(d.getDay() >= 3){
         n1 = weekday[(d.getDay()+1)];
         n2 = weekday[(d.getDay()+2)];
         n3 = weekday[(d.getDay()+3)];
         n4 = weekday[7-(d.getDay()+4)];} if(d.getDay() >= 4)
         {
         n1 = weekday[(d.getDay()+1)];
         n2 = weekday[(d.getDay()+2)];
         n3 = weekday[7-(d.getDay()+3)];
         n4 = weekday[9-(d.getDay()+4)];} if(d.getDay() >= 5)
         {
         n1 = weekday[(d.getDay()+1)];
         n2 = weekday[7-(d.getDay()+2)];
         n3 = weekday[9-(d.getDay()+3)];
         n4 = weekday[11-(d.getDay()+4)];} if(d.getDay() >= 6)
         {
         n1 = weekday[7-(d.getDay()+1)];
         n2 = weekday[9-(d.getDay()+2)];
         n3 = weekday[11-(d.getDay()+3)];
         n4 = weekday[13-(d.getDay()+4)];}  if(d.getDay() < 3) 
       {
         n1 = weekday[(d.getDay()+1)];
         n2 = weekday[(d.getDay()+2)];
         n3 = weekday[(d.getDay()+3)];
         n4 = weekday[(d.getDay()+4)];
        
         }
      
          document.getElementById("2day").innerHTML = n1;
          document.getElementById("3day").innerHTML = n2;
          document.getElementById("4day").innerHTML = n3;
          document.getElementById("5day").innerHTML = n4;			
}
  showDateTime(); 

  //функция открытия подробной информации о погоде
  function showPodrobn(id) {
    elem=document.getElementById(id);
    state=elem.style.display; 
    if (state =='block') (elem.style.display='none');
   else (elem.style.display='block');
  };

//смена направления стрелки
$(".arrow-4").click(function() {
  $(this).toggleClass("open");
});
