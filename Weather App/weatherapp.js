// document.querySelector()



const apiKey="a1a4805fbf0f2429a9efcc14f78d9c3f";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?q=";

const search = document.querySelector(".serarchbox input");
const searchbtn = document.querySelector(".serarchbox button");
async function checkWether(city)
{
  let response = await fetch(apiurl+city+`&appid=${"a1a4805fbf0f2429a9efcc14f78d9c3f"}`)
  let data = await response.json();
  console.log(data)
document.querySelector("#cityname").innerHTML = data.name;
document.querySelector("#temp").innerHTML = data.main.temp;
document.querySelector("#humiditypercent").innerHTML = data.main.humidity;
document.querySelector("#speed").innerHTML = data.wind.speed+" km/h";
document.querySelector("#winddata").innerHTML = "Wind Speed";
document.querySelector("#Humiditydata").innerHTML = "Humidity";
}
searchbtn.addEventListener("click",()=>
{
  checkWether(search.value)

})








// https://api.openweathermap.org/data/2.5/weather?q=Hyderabad&appid=a1a4805fbf0f2429a9efcc14f78d9c3f