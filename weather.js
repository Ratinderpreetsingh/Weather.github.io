// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '5c2e768233mshf82533a4b832ccdp18d820jsn78c83cc75494',
// 		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=rajpura', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));


/***********new api********* */
const APIK = `3265874a2c77ae4a04bb96236a642d2f`
// const API=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIK}&inits=metric`

// const IMGURL=`https://openweather.org/img/wn/${data.weather[0].icon}@2x.png`

let formm = document.querySelector("form");
let input = document.querySelector("#search");
let temp = document.querySelector("#temp");
let main = document.querySelector("#main");

const getweather = async (city) => {
   
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIK}&inits=metric`
      const res = await fetch(url);
      const data = await res.json()
      console.log(data)
 
  
   
   
 
   return showdata(data)

}

var clouds = "images/icons8-clouds-64.png";
var haze = "images/icons8-haze-100.png";
var clear="images/icons8-smiling-sun-100.png";
var smoke="images/icons8-foggy-64.png";


showdata = (data) => {
   
   console.log(data.main.temp);
   let cel = data.main.temp;
   console.log(cel)
   let newtemp = Math.floor((cel - 273.15))

   temp.innerHTML = `${newtemp}<span><sup>.</sup></span>` ;
   main.innerHTML = data.weather[0].main;

   let condition = data.weather[0].main;
   console.log(condition)

   if (condition == "Haze") {
      console.log("smoioke")
      document.getElementById("img").src = haze;
   }
   if (condition == "Clouds") {
      console.log("smoioke")
      document.getElementById("img").src = clouds;
   }
   if (condition == "Clear") {
      console.log("smoioke")
      document.getElementById("img").src = clear;
   }
   if (condition == "Smoke") {
      console.log("smoioke")
      document.getElementById("img").src = smoke;
   }
   //location
  document.querySelector("#location").innerText=input.value;
   
     
   // sunsrise
    let msecs=data.sys.sunrise;
   
    
   
   
            
    document.querySelector("#sunrise").innerHTML=`<i class="bi bi-sunrise"></i> 6:59 AM `;
   //  console.log(msecs)

   //  console.log(risetime)
   //  sunset
   let getset=data.sys.sunset;
   console.log(getset)
   let settime=parseFloat(((((getset/1000)/60)/60)%24)-2).toFixed(2);
   document.querySelector("#sunset").innerHTML=`<i class="bi bi-sunset"></i> ${settime} PM`;



 // speed

 let speed=data.wind.speed;
 let newspeed=Math.floor((speed*3600)/1000)
document.querySelector("#speed").innerHTML=`<i class="bi bi-wind"></i> ${newspeed} km/h`;

//humidity
let humidity=data.main.humidity;
document.querySelector('#humidity').innerHTML=`<i class="fa fa-thermometer-4"></i> ${humidity}%`
   
//  sd=d==d==atw
let date=new Date();
console.log(date)
let year=date.getFullYear();
let month=date.getMonth()+1;
let day=date.getDate();
console.log(`${day}/${month}/${year}`)
document.querySelector("#date").innerHTML=`${day}/${month}/${year}`;

//page note found
   //  let code=data.cod;
   //   console.log(code)
   //  if(code==404){
   //    alert("city not found");
   //  }

    //search value
    input.value="";
}

formm.addEventListener('submit', function (e) {
   e.preventDefault();
   getweather(input.value);
})