let time = document.getElementById("time");
let timeFormat = document.getElementById("timeFormat");

document.addEventListener("DOMContentLoaded", ()=>{
    setInterval(updateClock, 1000)
})
function updateClock() {
  let date = new Date();

  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  // Add leading zeros
  hr = hr < 10 ? `0${hr}` : hr;
  min = min < 10 ? `0${min}` : min;
  sec = sec < 10 ? `0${sec}` : sec;

  time.innerHTML = `${hr} : ${min} : ${sec}`;

  timeFormat.innerHTML = hr > 12 ? "PM" : "AM" 
}
