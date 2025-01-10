let hr = document.querySelector('#hr');
let mn = document.querySelector('#mn');
let sc = document.querySelector('#sc');
let alarmBtn = document.querySelector(".alarmBtn");
let alarmContainer = document.querySelector(".alarmContainer");
let closeAlarmContainer = document.querySelector("#close-alarmContainer");
const alarmDate = document.querySelector('.alarmDate');
const alarmTime = document.querySelector('.alarmTime');
const alarmSet = document.querySelector('#alarmSet');
const alarmDisplay = document.querySelector('#alarmDisplay');
  
setInterval(() =>{
let day = new Date();
let hh = day.getHours() * 30;
let mm = day.getMinutes() * 6;
let ss = day.getSeconds() * 6;

hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
mn.style.transform = `rotateZ(${mm}deg)`;
sc.style.transform = `rotateZ(${ss}deg)`;

//digital clock
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let ampm = document.getElementById('ampm');

let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();

let am = h >= 12 ? "PM" : "AM";

// convert 24hr clock to 12hr clock
if(h > 12){
    h = h - 12;
}

// add zero before single digit number
h = (h < 10) ? "0" + h : h
m = (m < 10) ? "0" + m : m
s = (s < 10) ? "0" + s : s

hours.innerHTML = h;
minutes.innerHTML = m;
seconds.innerHTML = s;
ampm.innerHTML = am;
});

alarmBtn.onclick = () => {
    alarmContainer.classList.add('active');
}
closeAlarmContainer.onclick = () =>{
    alarmContainer.classList.remove('active');
}

let alarm = [];

alarmSet.addEventListener('click', function() {
    const alarmDateTime = new Date(alarmDate.value + ' ' + alarmTime.value);
    const now = new Date();
    const timeAlert = alarmDateTime - now;
    if(timeAlert > 0) {
        const alarmElement = document.createElement('div');
        alarmElement.innerHTML = alarmDate.value + ' ' + alarmTime.value;
        alarmDisplay.appendChild(alarmElement);
        const alarm = setTimeout(function() {
            alert('time is up!!');
        }, timeAlert);
        alarms.push({ alarm: alarm, element: alarmElement });
    } else {
        alert('Invalid Time!');
    }
});




