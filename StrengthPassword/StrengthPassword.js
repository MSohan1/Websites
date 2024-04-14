let password = document.querySelector("#password");
let msg = document.querySelector("#msg");
let pass = document.querySelector("#pass");
let container = document.querySelector(".container");



password.addEventListener("input",() =>{
  if(password.value.length>0)
  {
    msg.style.display = "block";
    msg.innerHTML="Your password is";
    if(password.value.length<4)
    {
      pass.innerHTML = "Week";
      
      pass.style.color = "Red";
      container.style.background = "red";
    }
    else if(password.value.length>=4 && password.value.length<8)
    {
      pass.innerHTML = "medium";
      pass.style.color = "yellow";
      container.style.background = "yellow";
    }
    else{
      pass.innerHTML = "Strong";
      pass.style.color = "green";
      container.style.background = "green";
    }
    if(password.contains('_'))
    {
      pass.innerHTML = "used _ or @";
    }
  }
  else{
    msg.style.display = "none";
  }

}
)