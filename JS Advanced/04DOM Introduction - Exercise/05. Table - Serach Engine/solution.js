function solve() {

   document.querySelector('#searchBtn').addEventListener('click', onClick);   

   function onClick() {      

      let trs = document.querySelectorAll("tr");
      let searchTerm=document.getElementById('searchField').value;

      //clear the input field and remove all already selected classes 
      document.getElementById('searchField').value='';
      for (let index = 2; index < trs.length; index++) {
            //clear all selects         
            trs[index].setAttribute("class", "");        
      }
      
      //index 0 is head of the table, index 1 is the search button
      for (let index = 2; index < trs.length; index++) {
         
         if ((trs[index].textContent).includes(searchTerm)) {
            //set class name for current row
            trs[index].setAttribute("class", "select");
         }

      }

   }
}