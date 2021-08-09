 //handle product
 function handelProduct (incrace, product){

  const input =   document.getElementById( product+ "-input");
  const inputNum = parseInt(input.value);
var inputNumber = inputNum ;
if(incrace===true){
     inputNumber = inputNum + 1 ;
  }

  if(incrace=== false  && inputNumber > 0){
     inputNumber = inputNum -1 ;
  }
  input.value = inputNumber;

  const phonePrice = document.getElementById(  product+ "-price");
  const priceNum = parseInt(phonePrice.innerText);
  
 
if(product == "phn"){
  priceNumber = 1399 * inputNumber;
}
if (product == "case"){
  priceNumber = 75 * inputNumber;
}
  phonePrice.innerText = priceNumber;
  grandTotal();
  
 }
//case Handle
 

function grandTotal(){
  const phonePrice = document.getElementById("phn-price").innerText;
  const phonePriceNumber = parseInt(phonePrice);


  const casePrice = document.getElementById("case-price").innerText;
  const casePriceNumber = parseInt(casePrice);
const totalPrice = phonePriceNumber + casePriceNumber;
document.getElementById("subtotal").innerText = totalPrice;
const tax = Math.floor(totalPrice * 0.1);
document.getElementById("tax-amount").innerText = tax;
const gTotal = totalPrice + tax;
 document.getElementById("grand-total").innerText = gTotal;
 document.getElementById("bankAccount").value = gTotal; //Grand total ammount go to total amount of bank card



}
// cross part

document.getElementById('romove-phone').addEventListener('click', function(){
  document.getElementById('phn-input').value = 0;
   document.getElementById('phn-price').innerText = 0;//

  grandTotal()
})

document.getElementById('remove-caseing').addEventListener('click', function(){
  document.getElementById('case-input').value = 0;
   document.getElementById('case-price').innerText = 0//
   
   grandTotal()

})
// product card none bank card block
document.getElementById("addButton").addEventListener("click", function(){
  document.getElementById("login-area").style.display = "block"

  document.getElementById("cardAria").style.display = "none"
 
})

 

  




