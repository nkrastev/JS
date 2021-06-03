function search() {
   let data=document.getElementById('towns').getElementsByTagName('li');
   let searchTerm=document.getElementById('searchText').value;

   let matches=0;

   for (let index = 0; index < data.length; index++) {
      
      if ((data[index].textContent).includes(searchTerm)) {
         matches++;
         data[index].style.fontWeight='bold';
         data[index].style.textDecoration='underline';
      }
   }

   document.getElementById('result').textContent=`${matches} matches found`;
}
