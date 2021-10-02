const clock = document.querySelector("#main-content__clock");
let lastMinutes = '-1';
function getClock(){
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`

  if (lastMinutes !== minutes){
    lastMinutes = minutes;
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    clock.style.color = `rgba(${r},${g},${b})`;
  }
}
getClock();
setInterval(getClock, 1000);
