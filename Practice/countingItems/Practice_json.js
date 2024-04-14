let getcount = localStorage.getItem('count');
let localcount = JSON.parse(getcount);


let countpresses =localcount ? localcount:0;
document.querySelector(".count").textContent = `${countpresses} times the button was pressed`;



let mydate = new Date;
let greeting = document.querySelector(".greating");
if(mydate.getHours() >0 && mydate.getHours()<=12){
  greeting.textContent =`Good Morning Sohan!`;  
}
else if(mydate.getHours() >12 && mydate.getHours()<=15)
{
  greeting.textContent =`Good Afternoon Sohan!`;  
}
else if(mydate.getHours() >15 && mydate.getHours()<=21)
{
  greeting.textContent =`Good Evning Sohan!`;  
}
else if(mydate.getHours() >21 && mydate.getHours()<=0)
{
  greeting.textContent =`Good Night Sohan!`;  
}
else{
  greeting.textContent = `Error`;
}

function update(){
  let element = document.getElementById("change");
  if(countpresses%2==0)
  {
    element.classList.remove('js-odd');
    element.classList.add('js-even');
  }
  else
  {
    element.classList.remove('js-even');
    element.classList.add('js-odd');
  }
}

function count(){

countpresses++;
document.querySelector(".count").textContent = `${countpresses} times the button was pressed`;
update();


localStorage.setItem("count",JSON.stringify(countpresses));
}


function reset(){
  localStorage.clear();
  countpresses =0;
  document.querySelector(".count").textContent = `${countpresses} times the button was pressed`;
  update();
}

update();