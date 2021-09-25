const API_KEY = "bf7ea2c54a1866f859149e84d3d59735";

function onGeoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log(lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const city = document.querySelector("#weather span:first-child");
    const weather = document.querySelector("#weather span:last-child");
    weather.innerText = `${data.weather[0].main} (${data.main.temp}°C)`;
    city.innerText = `${data.name} : `;
  });
}

function onGeoError(){
  alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
