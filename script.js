// Event date: 1 October 2026, 10:00 AM WAT (UTC+1)
var target = new Date("2026-10-01T10:00:00+01:00").getTime();

function updateTimer(){
  var now = new Date().getTime();
  var diff = target - now;

  var d = document.getElementById('days');
  var h = document.getElementById('hours');
  var m = document.getElementById('minutes');
  var s = document.getElementById('seconds');

  if(diff <= 0){
    d.textContent = '00'; h.textContent = '00'; m.textContent = '00'; s.textContent = '00';
    var label = document.querySelector('.countdown h2');
    if(label) label.textContent = "Today is the day!";
    clearInterval(interval);
    return;
  }

  var days = Math.floor(diff / (1000*60*60*24));
  var hours = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
  var minutes = Math.floor((diff % (1000*60*60)) / (1000*60));
  var seconds = Math.floor((diff % (1000*60)) / 1000);

  d.textContent = String(days).padStart(2,'0');
  h.textContent = String(hours).padStart(2,'0');
  m.textContent = String(minutes).padStart(2,'0');
  s.textContent = String(seconds).padStart(2,'0');
}

updateTimer();
var interval = setInterval(updateTimer, 1000);