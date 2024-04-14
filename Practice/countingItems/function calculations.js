function results()
{
  num1=document.querySelector('#num1').value;
  num2=document.querySelector('#num2').value;
  num3=document.querySelector('#num3').value;
  if(num1%2==0)
  document.querySelector('#display1').textContent=`number ${num1} is Even`;
  else
  document.querySelector('#display1').textContent=`number ${num1} is Odd`;

  num1>num2?document.querySelector('#display2').textContent=`number ${num1} is Greater then ${num2}`:document.querySelector('#display2').textContent=`number ${num2} is Greater then ${num1}`; 

  let fahrenheit = ((9/5)*num3+32);
  document.querySelector('#display3').textContent=`Fahrenheit of ${num3} is ${fahrenheit}f`;

}