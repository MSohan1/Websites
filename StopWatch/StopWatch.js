let timer = document.querySelector(".timer");
let timevalue = null;
let [hours,minutes,secounds] = [0,0,0];
let h1 = document.createElement("h1");
  timer.appendChild(h1);  
  h1.innerHTML = "00" +":"+"00"+":"+"00";
function stopwatch()
{
  secounds++;
  if(secounds == 60)
  {
    secounds = 0;
    minutes++;
    if(minutes == 60)
    {
      minutes = 0;
      hours++;
    }
  }
  let h = hours<10?"0"+hours:hours;
  let m = minutes<10?"0"+minutes:minutes;
  let s = secounds<10?"0"+secounds:secounds;
  
  h1.innerHTML = h +":"+m+":"+s;
}

function start() {

    if(timevalue!=null)
    {
      clearInterval(timevalue);
    }
    timevalue = setInterval(stopwatch,1000);
}

function stop()
{
  clearInterval(timevalue);
}
function restart()
{
  clearInterval(timevalue);
  [h,m,s] = [0,0,0];
  h1.innerHTML = h +":" + m + ":" + s;
}

 













