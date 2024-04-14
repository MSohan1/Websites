let finalWishList;
onLoadfun();

function onLoadfun()
{
  loadWishList();
  displayWishList();
  wishIcon();

}

function loadWishList()
{
  finalWishList = wishItems.map(product =>{

    for(let i=0;i<items.length;i++)
    {
      if(product == items[i].id)
      {
        return items[i];
      }
    }
  }

  )
  // console.log(finalWishList);
  displayWishList();
}

function displayWishList()
{

  let wishlistHTML = document.querySelector(".wishlistcontainer");
  let innerWishListHTML = ``;
  finalWishList.forEach(element => {
    innerWishListHTML += writeHTML(element);
  });
  wishlistHTML.innerHTML=innerWishListHTML;
}



function deleteitem(id)
{
  console.log(id)
  wishItems = wishItems.filter(itemlist =>itemlist != id);
  localStorage.setItem('Wish',JSON.stringify(wishItems));
  displayWishList();  
  
  onLoadfun();
 
}


function writeHTML(WishListItem)
{
console.log(WishListItem.image)
return `<div class="item-container">
    <img class="img" src="../${WishListItem.image}" alt="image">
    <div class="ratings">
        ${WishListItem.ratings.stars}★ | ${WishListItem.ratings.likes}
    </div>
    <div class="item-company">
        ${WishListItem.company}
    </div>
    <div class="item-style">
        ${WishListItem.style}
    </div>
    <div class="item-price">
        <span class="discounted-price">Rs.${WishListItem.price.discounted_price}</span>
        <span class="original-price">Rs.${WishListItem.price.original_price}</span>
        <span class="discount-rate">(${WishListItem.price.discount_rate}% OFF)</span>
  </div>
    <button class="add-button" onclick="button_press(${WishListItem.id})">Add To Cart</button>
  </div>
  <div class="remove">
      <span class="delete" onclick="deleteitem(${WishListItem.id})">X</span>
  </div>
  `;
}