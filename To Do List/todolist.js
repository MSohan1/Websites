const searchbox = document.querySelector(".searcharea");
const listcontainer = document.querySelector(".unorderlist");


function addtask()
{
  if(searchbox.value === '')
  {
    alert("Please Enter Something")
  }
  else{
    let li = document.createElement("li");
    li.innerHTML = searchbox.value;
    listcontainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "x";
    li.appendChild(span)
    
  }
  searchbox.value='';
}

listcontainer.addEventListener("click",function(e)
{
if(e.target.tagName === 'LI')
{
  e.target.classList.toggle("checked");
}
else if(e.target.tagName === 'SPAN')
{
  e.target.parentElement.remove();
}
},false)

















