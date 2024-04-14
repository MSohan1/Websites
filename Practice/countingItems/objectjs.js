let products = {
  company:'Jockey',
  type:'inner-ware',
  price:1500,
  'delivary-time':'14-jan-2024',
}
let productCopy = products;
console.log(productCopy);
productCopy.company ='LUX';
console.log(products.company);
console.log(productCopy['delivary-time']);


let productsForComparision = {
  company:'Jockey',
  type:'inner-ware',
  price:1500,
  'delivary-time':'14-jan-2024',
}


let a ={
  message:'Good Job',
  status1:'complete',
}

let {message,status1} = a;

console.log(status1)
function isIdenticalProduct()
{
  if(products.price === productsForComparision.price )
  {
    console.log('Yes both are same');
  }
  else
    console.log('Yes both are not same');

}
isIdenticalProduct()
