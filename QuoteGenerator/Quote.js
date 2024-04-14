let quote_box = document.querySelector(".quote");
let autor_box = document.querySelector(".autor");
let api_url = 'https://api.quotable.io/random';

async function getquote(api_url){

  const responce = await fetch(api_url);
  var data = await responce.json();
  console.log(quote_box.innerHTML);
  quote_box.innerHTML = `"`+data.content+`"`;
  autor_box.innerHTML = `--`+data.author;

  

}
