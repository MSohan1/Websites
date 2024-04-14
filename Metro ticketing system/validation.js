function check()
{
  let age = Number(document.getElementById('age').value);
  let gender = document.getElementById('gender').value;
  let price =50;
  const ticketPrice = 50;
  if(age<=5)
  {
    price =0;
  }
  else if(age>5 && age<=8)
  {
    price = ticketPrice/2;
  }
  else if((age>=65) && (gender=='Male'||gender=='male'||gender=='M'||gender=='m'))
  {
    price = ticketPrice-(ticketPrice*.3);
  }
  else if(gender=='Female'||gender=='female'||gender=='F'||gender=='f')
  {
    price  = ticketPrice-(ticketPrice*.5);
  }

  document.getElementById('price').innerHTML=`After Discount based on criteria Age : ${age} ,Gender : ${gender} the final price of the ticket is ${price}`

}