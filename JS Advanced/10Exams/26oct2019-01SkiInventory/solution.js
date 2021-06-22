function solve() {

   const btnAddProduct=document.querySelector('#add-new > button');
   const btnFilter=document.querySelector('#products > div > button');

   btnAddProduct.addEventListener('click', onClickAddProduct);
   btnFilter.addEventListener('click', onClickFilter);

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