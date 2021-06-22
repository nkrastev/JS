function solve() {

   const btnAddProduct=document.querySelector('#add-new > button');
   const btnFilter=document.querySelector('#products > div > button');
   const btnBuy=document.querySelector('#myProducts > button');

   btnAddProduct.addEventListener('click', onClickAddProduct);
   btnFilter.addEventListener('click', onClickFilter);
   btnBuy.addEventListener('click', onClickBuy);

   function onClickAddProduct(event){
      event.preventDefault();//prevent page from reloading

      //TODO Validate data
      const name=document.querySelector('#add-new > input[type=text]:nth-child(2)').value;
      const quantity=Number(document.querySelector('#add-new > input[type=text]:nth-child(3)').value);
      const price=Number(document.querySelector('#add-new > input[type=text]:nth-child(4)').value);

      const targetUl=document.querySelector('#products > ul');

      //create LI
      let liElement=e('li','','');
      let spanElement=e('span',name, null);
      let strongAvailable=e('strong','Available: '+quantity,null);
      let divElement=e('div',null,null);
      let strongPrice=e('strong',price.toFixed(2),null);
      let buttonElement=e('button','Add to Client\'s List',null);
      buttonElement.addEventListener('click', onClickAddMyProducts);

      //appending items
      divElement.appendChild(strongPrice);
      divElement.appendChild(buttonElement);

      liElement.appendChild(spanElement);
      liElement.appendChild(strongAvailable);
      liElement.appendChild(divElement);

      targetUl.appendChild(liElement);
   }

   function onClickFilter(event) {
      event.preventDefault();//prevent page from reloading
      const searchedTerm=document.querySelector('#filter').value;

      const spanItems=Array.from(document.querySelectorAll('#products > ul > li > span'));

      for (let currentSpan of spanItems) {
       
         if (!currentSpan.textContent.toLowerCase().includes(searchedTerm.toLowerCase())) {
            //hide current li
            currentSpan.parentNode.style.display='none';
         }
      }
      //Unhide all items with set display to block, not by condition
      if (searchedTerm=='') {
         for (let currentSpan of spanItems) {
            currentSpan.parentNode.style.display='block';
         }
      }

   }

   function onClickAddMyProducts(event){
      event.preventDefault();//prevent page from reloading

      const liNode=event.target.parentNode.parentNode;


      const prodName=liNode.querySelector('span').textContent;
      const available=liNode.querySelector('strong').textContent;
      const price=Number(liNode.querySelectorAll('strong')[1].textContent);
      
      //add li to my products
      const ulMyProducts=document.querySelector('#myProducts > ul');
      
      let liToBeAdded=e('li',prodName,null);      
      let priceToBeAdded=e('strong',price.toFixed(2),null);      
      liToBeAdded.appendChild(priceToBeAdded);
      ulMyProducts.appendChild(liToBeAdded);

      //total price change
      let totalPrice=document.querySelector('body > h1:nth-child(4)');
      let totalPriceNumber=Number(totalPrice.textContent.replace('Total Price: ',''));
      totalPrice.textContent='Total Price: '+(totalPriceNumber+Number(priceToBeAdded.textContent)).toFixed(2);


      if (available=='Available: 1') {
         //remove li
         event.target.parentNode.parentNode.remove();
      }else{
         //decrease availability
         let availabilityItem=liNode.querySelector('strong');
         let availabilityNumber=Number(availabilityItem.textContent.replace('Available: ',''));
         availabilityItem.textContent='Available: '+(availabilityNumber-1);
      }

   }

   function onClickBuy(event) {
      event.preventDefault();//prevent page from reloading
      document.querySelector('body > h1:nth-child(4)').textContent='Total Price: 0.00';      
      document.querySelector('#myProducts > ul').innerHTML='';
   }

   //factory function, create DOM element
   function e(type, content, className){
      const result= document.createElement(type);
      result.textContent=content;
      if (className) {
          result.className=className;
      }
      return result;
  }
}