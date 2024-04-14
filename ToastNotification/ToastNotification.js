let toast = document.querySelector("#toastNotification");


function notification(value){
 let div = document.createElement('div');
 div.classList.add("toast");
//  div.innerHTML = 'Sucess';
if(value === 'Success')
{
  div.classList.add("success");
  div.innerHTML = '<i class="fa-solid fa-circle-check"></i> Successfuly Submited';

}
else if(value === 'Error')
{
  div.classList.add("error");
  div.innerHTML = '<i class="fa-solid fa-circle-xmark"></i> Error in the input';
}
if(value === 'Invalid')
{
  div.classList.add("invalid");
  div.innerHTML = '<i class="fa-solid fa-exclamation"></i> Invalid input';
}

toast.appendChild(div);

 setTimeout(()=>{
  div.remove(div);
 },6000);
}