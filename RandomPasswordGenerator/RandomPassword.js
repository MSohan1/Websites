
const PasswordPlacer = document.getElementById("password");

const upperCase ="ABCDEFGHIJKLMNOPQRSTUWXYZ";
const lowerCase ="abcdefghijklmnopqrstuvwxyz";
const numaricals ="0123456789";
const specialChar ="!@#$%^&*(){}[]";
const passwordlen = 12;
const allChars = upperCase+lowerCase+numaricals+specialChar;



function passwordBuilder(){
  let password=0;
  password = upperCase[Math.floor(Math.random() * upperCase.length )];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length )];
  password += numaricals[Math.floor(Math.random() * numaricals.length )];
  password += specialChar[Math.floor(Math.random() * specialChar.length )];
  while(password.length < passwordlen)
  {
    password += allChars[Math.floor(Math.random() * allChars.length )];
  }
  PasswordPlacer.value = password;
}

function copydata(){
  PasswordPlacer.select();
  document.execCommand("copy");

}