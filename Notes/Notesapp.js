const btn = document.querySelector(".generate");
let Notes = document.querySelector(".displayNote");
const notesContainer = document.querySelector(".data");

function showNotes()
{
  notesContainer.innerHTML = localStorage.getItem("Notes")
}

function updateStorage(){

  localStorage.setItem("Notes",notesContainer.innerHTML);

}


btn.addEventListener("click",() =>{
  let inputbox = document.createElement('div');
  inputbox.className = "data";
  let p = document.createElement("p");
  p.className.add("displayNote");
  let img = document.createElement("img");
  
  p.setAttribute("contenteditable","true");
  img.src = "images/delete.png";
  inputbox.appendChild(p).appendChild(img);
  notesContainer.appendChild(inputbox);
})


notesContainer.addEventListener("click",function(e){
  if(e.target.tagName === "IMG")
  {
    e.target.parentElement.remove();
    updateStorage();
  }
  else if(e.target.tagName ==="P"){
      Notes = document.querySelectorAll(".displayNote");
      Notes.forEach(nt =>{
        nt.onkeyup = function(){
          updateStorage();
        }
      }) 
  }
})

document.addEventListener("keydown",event=>{
  if(event=== "Enter")
  {
    document.execCommand("InsertLineBreak");
    event.preventDefault(); 
  }
})


