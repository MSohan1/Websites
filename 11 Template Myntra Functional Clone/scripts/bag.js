let finalBagItems;
onLoad();

function onLoad(){
  loadBagItems();
  displaybagItems();
  CalucalationCart();
  
}


function loadBagItems(){


  console.log(items);  
  finalBagItems = bagItems.map(itemId => {
    for(let i=0;i<items.length;i++ )
    {
      if(itemId == items[i].id)
      {
        return items[i];
      }
    }
  })
  displaybagItems();
}

function removeBagItem(itemId){
  bagItems = bagItems.filter(bagItemId =>bagItemId != itemId);
  localStorage.setItem('Data',JSON.stringify(bagItems));
  onLoad();
  bagIcon();
}


function displaybagItems(){
  
  let bagcontainerElement = document.querySelector('.bag-items-container');
  if(bagcontainerElement == null)
  {
    return;
  }
  console.log(finalBagItems);
  let innerhtml='';
  finalBagItems.forEach(bagItem => {
    innerhtml += innerHtmlFun(bagItem);
  });
  bagcontainerElement.innerHTML = innerhtml;
}

function innerHtmlFun(item){
  
console.log(item.original_price);
  return `
  <div class="item-left-part">
    <img class="bag-item-img" src="../${item.image}">
  </div>
  <div class="item-right-part">
    <div class="company">${item.company}</div>
    <div class="item-name">${item.style}</div>
    <div class="price-container">
      <span class="current-price">Rs ${item.price.discounted_price}</span>
      <span class="original-price">Rs ${item.price.original_price}</span>
      <span class="discount-percentage">(${item.price.discount_rate}% OFF)</span>
    </div>
    <div class="return-period">
      <span class="return-period-days">${item.days} days</span> return available
    </div>
    <div class="delivery-details">
      Delivery by
      <span class="delivery-details-days">${item.date}</span>
    </div>
  </div>
  <div class="remove">
    <span class="remove-from-cart" onclick=removeBagItem(${item.id})>X</span>
  </div>

</div> `
}


function CalucalationCart()
{
  let bagcalculationContainer = document.querySelector(".bag-details-container");
  if(bagcalculationContainer == null)
  {
    return;
  }
  let totalItems = bagItems.length;
  let totalMRP = 0; 
  let Discount = 0;
  let convinence_fee=99;

 
 
  finalBagItems.forEach(element => {
    //console.log(element.price.original_price);
    totalMRP += element.price.original_price;
    Discount +=element.price.original_price - element.price.discounted_price;
  });

  if(totalItems == 0){
    convinence_fee=0;
  }
  let totalAmount = totalMRP-Discount+convinence_fee;

  bagcalculationContainer.innerHTML = `
<div class="price-header">PRICE DETAILS (${totalItems} Items) </div>
<div class="price-item">
  <span class="price-item-tag">Total MRP</span>
  <span class="price-item-value">₹ ${totalMRP}</span>
</div>
<div class="price-item">
  <span class="price-item-tag">Discount on MRP</span>
  <span class="price-item-value priceDetail-base-discount">-₹ ${Discount}</span>
</div>
<div class="price-item">
  <span class="price-item-tag">Convenience Fee</span>
  <span class="price-item-value">₹ 99</span>
</div>
<hr>
<div class="price-footer">
  <span class="price-item-tag">Total Amount</span>
  <span class="price-item-value">₹ ${totalAmount}</span>
</div>
</div>
<button class="btn-place-order">
<div class="css-xjhrni">PLACE ORDER</div>
</button>`
;
}
