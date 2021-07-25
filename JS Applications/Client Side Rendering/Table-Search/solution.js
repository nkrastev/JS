import { html, render } from 'https://unpkg.com/lit-html?module';
import { getData } from './api/data.js';

//get data
const dbData = Object.values(await getData());


const container = document.querySelector('body > table > tbody');
document.querySelector('#searchBtn').addEventListener('click', onClick);

const rowtemplate = (data, selectClass) => html`  
   <tr class=${selectClass ? 'select' : ''}>
   <td>${data.firstName} ${data.lastName}</td>
   <td>${data.email}</td>
   <td>${data.course}</td>
   </tr>  
`;

update(dbData);


function update(dbData, textForMatch=''){
   const result=dbData.map(function(item) {
      if (Object.values(item).some(v=>textForMatch && v.toLowerCase().includes(textForMatch.toLowerCase()))) {         
         return rowtemplate(item, true);
      }else{         
         return rowtemplate(item,false);
      }      
   })
   render(result, container);
}


function onClick(event) {
   event.preventDefault();
   const inputData=document.querySelector('#searchField');
   if (inputData.value=='') {
      return;
   }
   update(dbData, inputData.value)
}

