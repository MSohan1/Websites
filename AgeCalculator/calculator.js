let userInput = document.querySelector(".date");
 
// userInput.max = new Date().toISOString().split("T")[0];

function calculate(){
  let birthYear = new Date(userInput.value);
  // let y1 = birthYear.getFullYear();
  // let today= new Date();
  // let y2 = today.getFullYear();
  // console.log(y2-y1);

  let month_diff = Date.now()- birthYear.getTime();
  let age = new Date(month_diff);
  let year = age.getUTCFullYear();
  var crtage = Math.abs(year - birthYear.getFullYear);  
      
    document.write("Age of the date entered: " + crtage + " years"); 
}
