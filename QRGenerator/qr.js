let div_qrplace = document.querySelector("#qrplace");
let qrimg = document.querySelector("#qrimg");
let inputText = document.querySelector("#inputText");

console.log(inputText.value);

function generateQR(){
  if(inputText.value.length>0)
  {
    qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+inputText.value;
  }
  else{
    inputText.classList.add('error');
    setTimeout(()=>{
      inputText.classList.remove('error');
    },1000)
  }
}

