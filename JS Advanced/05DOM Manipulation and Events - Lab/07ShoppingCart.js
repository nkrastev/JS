function solve() {
   //selecting elements
   let btnsAddProduct=Array.from(document.getElementsByClassName('add-product'));
   let btnCheckOut=document.getElementsByClassName('checkout')[0];

   let cart=[]; //array of cart objects

   //adding event handlers
   btnCheckOut.addEventListener('click', onClickCheckout)
   for (element of btnsAddProduct) {
      element.addEventListener('click', onClickAddButton)
   }

   function onClickAddButton(event) {
      let clickedProductDiv=event.target.parentNode.parentNode;
      
      let productName=clickedProductDiv.getElementsByClassName('product-title')[0].textContent;
      let productPrice=Number(clickedProductDiv.getElementsByClassName('product-line-price')[0].textContent);

      let item={};
      item['productName']=productName;
      item['productPrice']=productPrice;

      cart.push(item);
      document.getElementsByTagName('textarea')[0].value+=`Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;      
   }

   function onClickCheckout(event) {
      let totalPrice=calculateTotal(cart);
      let list=prepareProductList(cart);
      document.getElementsByTagName('textarea')[0].value+=`You bought ${list.join(', ')} for ${totalPrice.toFixed(2)}.`;
      disableAllButtons();
   }

   function calculateTotal(cart){
      let total=0;
      for (const product of cart) {
         total+=product.productPrice;
      }     
      return total;
   }
   function prepareProductList(cart){
      let list=[];
      for (const product of cart) {
         if (!list.includes(product.productName)) {
            list.push(product.productName);
         }
      }     
      return list;
   }
   function disableAllButtons() {
      Array.from(document.getElementsByTagName('button')).forEach(b=>b.disabled=true);
   }
   
}