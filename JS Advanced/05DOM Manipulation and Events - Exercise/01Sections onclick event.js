function create(words) {
   
   for (let index = 0; index < words.length; index++) {
   
      let divItem=document.createElement('div');
      let paragraphItem=document.createElement('p');
      paragraphItem.style.display='none';

      paragraphItem.textContent=words[index];
      divItem.appendChild(paragraphItem);

      document.getElementById('content').appendChild(divItem);
      
      divItem.addEventListener('click', onClickHandler);      
      
   }

   function onClickHandler(event){
      //select current P
      event.target.getElementsByTagName('p')[0].style.display='';
   }
}