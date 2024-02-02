var weather=
    {
        "coord": {
          "lon": 76.2167,
          "lat": 10.5167
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "base": "stations",
        "main": {
          "temp": 26.99,
          "feels_like": 27.66,
          "temp_min": 26.99,
          "temp_max": 26.99,
          "pressure": 1016,
          "humidity": 54,
          "sea_level": 1016,
          "grnd_level": 1015
        },
        "visibility": 10000,
        "wind": {
          "speed": 1.32,
          "deg": 51,
          "gust": 2.63
        },
        "clouds": {
          "all": 55
        },
        "dt": 1706673861,
        "sys": {
          "type": 1,
          "id": 9211,
          "country": "IN",
          "sunrise": 1706663899,
          "sunset": 1706705905
        },
        "timezone": 19800,
        "id": 1254187,
        "name": "Thrissur",
        "cod": 200
      }


let currentDate=new Date()
let date=currentDate.getDate()
let month=currentDate.toLocaleString("default",{month:`long`})
let test=currentDate.getMonth()+1
let day=currentDate.getDay()
let year=currentDate.getFullYear

function weatherdisplay(){
   htmlData=`
   <div class="card">
   <div class="container">
     <div class="cloud front">
       <span class="left-front"></span>
       <span class="right-front"></span>
     </div>
     <span class="sun sunshine"></span>
     <span class="sun"></span>
     <div class="cloud back">
       <span class="left-back"></span>
       <span class="right-back"></span>
     </div>
   </div>
 
   <div class="card-header">
     <span>${weather.visibility}<br>
     <b>${weather.name}</b></span>
     <span>${date} ${test} </span>
   </div>
 
   <span class="temp">${weather.main.temp }</span>
 
   <div class="temp-scale">
     <span>Celcius</span>
   </div>
 </div>
   
   
   `
   document.querySelector("#reslt").innerHTML=htmlData

}

weatherdisplay()
