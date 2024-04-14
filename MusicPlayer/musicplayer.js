let inputRange = document.querySelector("#musicrange");
let song = document.getElementById("songs");
let playbutton = document.querySelector("#playbutton");


song.onloadedmetadata = function() {
  inputRange.max = song.duration;
  inputRange.value = song.currentTime;
} 
function playmusic(){
  if(song.paused) 
  {
    song.play();
    playbutton.classList.remove("fa-play");
    playbutton.classList.add("fa-pause");
  } else 
  {
    song.pause();
    playbutton.classList.remove("fa-pause");
    playbutton.classList.add("fa-play");
  }
}
setInterval(()=>{
  inputRange.value = song.currentTime;
},500)


inputRange.onchange = function(){
  song.play();
  song.currentTime = inputRange.value;
  playbutton.classList.add("fa-pause");
  playbutton.classList.remove("fa-play");

}

