var City=document.getElementById("City");
City.addEventListener("keyup", e=>{
    
  if(e.keyCode===13)// backspace=8,tab=9,enter=13,shift=16
  {
    var searchCity=e.target.value;
      //var searchCity=e.target.value;
    //console.log(searchCity);
  
    //var searchCity=e.target.value;
    //console.log(searchCity);
     getWeather(searchCity);
}});
function getWeather(searchCity){
const weatherApi=`http://api.openweathermap.org/data/2.5/weather?q=${searchCity}&&mode=json&units=metric&APPID=33dc487e6e3225d4c14e270e3e3156f1`;
window.fetch(weatherApi)
.then(data=>{
    data
    .json()// to retrieve that object convert it into json format
    .then(weather=>{
        output="";

        console.log(weather);
        console.log(weather.coord.lon);
        console.log(weather.coord.lat);
        console.log(weather.main.temp);
        console.log(weather.main.pressure);
        console.log(weather.main.humidity);
        console.log(weather.main.temp_min);
        console.log(weather.main.temp_max);
        console.log(weather.sys.country);
        console.log(weather.sys.sunrise);
        console.log(weather.sys.sunset);
        console.log(weather.name);
        //array here
   var weatherData =weather.weather
   for(let x of weatherData){
       output +=`
       <div class ="col-md-4 offset-4 mt-4 card">
       <div class="card-body">
       <h1>${weather.name}</h1>
       <h5>Country:${weather.sys.country}</h5>
       <span class="icon"><img src="http://openweathermap.org/img/wn/${x.icon}.png"/></span>
       <p><span>Temp:</span>
       <span class="temp">${weather.main.temp}&deg;c</span></p>
       <p><span class="main float-left">Pressure:${weather.main.pressure}hpa</span>
       <p><span class="main float-right">Humidity:${weather.main.humidity}</span>
       <span class="des float-left">${x.description}</span>
       <span class="des float-right">${x.main}</span>
       </div>
       </div>`;
       document.getElementById("template").innerHTML=output;
       /*console.log(x);
       console.log(x.id);
       console.log(x.main);
       console.log(x.description);
       console.log(x.icon);*/
     }
    })
    .catch(err=>console.log(err));
   })
.catch(err=>console.log(err));
};
