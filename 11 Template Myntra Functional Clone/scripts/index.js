let items = [
  {
    id:1,
    image:'images/1.jpg',
    ratings:{
      stars:4.2,
      likes:1800,
    },
    company:'Forever New',
    style:'Studs Earrings',
    price:{
      discounted_price:390,
      original_price:2199,
      discount_rate:86,
    },
    days:'14',
    date:'10-JAN-2024'
  },
  {
    id:2,
    image:'images/2.jpg',
    ratings:{
      stars:4.3,
      likes:24,
    },
    company:'CUKOO',
    style:'Women Padded Halter Neck Swimming Dress',
    price:{
      discounted_price:1507,
      original_price:2599,
      discount_rate:42,
    },
    days:'14',
    date:'10-JAN-2024'
  },
  {
    id:3,
    image:'images/3.jpg',
    ratings:{
      stars:4.1,
      likes:249,
    },
    company:'NUEVOSDAMAS',
    style:'Women Red & White Printed A-Line Knee-Length Skirts',
    price:{
      discounted_price:495,
      original_price:1599,
      discount_rate:69,
    },    
    days:'14',
    date:'10-JAN-2024'
  },
  {
    id:4,
    image:'images/5.jpg',
    ratings:{
      stars:4.2,
      likes:3500,
    },
    company:'Roadster',
    style:'Pure Cotton T-shirt',
    price:{
      discounted_price:489,
      original_price:1399,
      discount_rate:65,
    },
    days:'14',
    date:'10-JAN-2024'
  },
  {
    id:5,
    image:'images/4.jpg',
    ratings:{
      stars:5.0,
      likes:10,
    },
    company:'ADIDAS',
    style:'Indian Cricket ODI Jersey',
    price:{
      discounted_price:999,
      original_price:999,
      discount_rate:0,
    },
    days:'14',
    date:'10-JAN-2024'
  },
  {
    id:6,
    image:'images/6.jpg',
    ratings:{
      stars:0.0,
      likes:0,
    },
    company:'Nike',
    style:'Men ReactX Running Shoes',
    price:{
      discounted_price:14995,
      original_price:14995,
      discount_rate:0,
    },
    days:'14',
    date:'10-JAN-2024'
  },
  {
    id:7,
    image:'images/7.jpg',
    ratings:{
      stars:4.2,
      likes:388,
    },
    company:'The Indian Garage Co',
    style:'Men Slim Fit Regular Shorts',
    price:{
      discounted_price:639,
      original_price:1599,
      discount_rate:60,
    },
    days:'14',
    date:'10-JAN-2024'
  },
  {
    id:8,
    image:'images/8.jpg',
    ratings:{
      stars:4.2,
      likes:5200,
    },
    company:'Nivea',
    style:'Men Fresh Deodrant 150ml',
    price:{
      discounted_price:142,
      original_price:285,
      discount_rate:50,
    },
    days:'14',
    date:'10-JAN-2024'
  },
 
]
let bagItems;
let wishItems;
OnLoad();

function OnLoad(){
  let cart = localStorage.getItem('Data');
  bagItems = cart ? JSON.parse(cart) : [];

  let wish = localStorage.getItem('Wish');
  wishItems = wish ? JSON.parse(wish) : [];
  displaypage();
  bagIcon();
  
  wishIcon();
}

function bagIcon()
{
  let bag_button_Element = document.querySelector('.bag-button');

  if(bagItems.length>0)
  {
    bag_button_Element.style.visibility = 'visible';
    bag_button_Element.innerText = bagItems.length;
  }
  else{
    bag_button_Element.style.visibility = 'hidden';
  }

}

function wishIcon(){
  let wishElement = document.querySelector('.wishlist');
  if(wishItems.length >0)
  {
    wishElement.style.visibility = 'visible';
    wishElement.innerText = wishItems.length;
  }
  else{
    wishElement.style.visibility = 'hidden';
  }

}


function wish_button(itemID)
{
  wishItems.push(itemID);
  localStorage.setItem('Wish',JSON.stringify(wishItems))

  wishIcon();
}



function button_press(itemID){
  bagItems.push(itemID);
  localStorage.setItem('Data',JSON.stringify(bagItems));
  bagIcon();
}


function displaypage(){
let itemsContainer = document.querySelector('.items-container');

if(itemsContainer == null){
  return;
}

let inner_html='';
items.forEach(item => {
  inner_html += `
  <div class="item-container">
    <img class="img" src="${item.image}" alt="image">
    <div class="ratings">
        ${item.ratings.stars}★ | ${item.ratings.likes}
    </div>
    <div class="item-company">
        ${item.company}
    </div>
    <div class="item-style">
        ${item.style}
    </div>
    <div class="item-price">
        <span class="discounted-price">Rs.${item.price.discounted_price}</span>
        <span class="original-price">Rs.${item.price.original_price}</span>
        <span class="discount-rate">(${item.price.discount_rate}% OFF)</span>
  </div>
    <button class="add-button" onclick="button_press(${item.id})">Add To Cart</button>
    <button class="wish-button" onclick="wish_button(${item.id})">Wish List</button>
  </div>
  `;
});

itemsContainer.innerHTML = inner_html;
}