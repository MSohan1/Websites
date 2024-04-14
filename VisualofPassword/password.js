let password = document.querySelector("#input");
let i = document.querySelector(".fa-solid")
function seepass()
{
  if(password.type =='password')
  {
  password.type='text';
  i.classList.add("fa-eye");

  }
  else{
    password.type='password';
    i.classList.remove("fa-eye");
    i.classList.add("fa-eye-slash");
    
  }
}
