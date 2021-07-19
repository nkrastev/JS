//import { html, render } from './node_modules/lit-html/lit-html.js';

import {html, render} from 'https://unpkg.com/lit-html?module';


const btn=document.querySelector('#btnLoadTowns');
btn.addEventListener('click', onClick);

const template = (data) => 
html`
  <ul>
        ${data.map(i => html`<li>${i}</li>`)}
  </ul>  
`;
const placeToRender=document.querySelector('#root');


function onClick(event) {
    event.preventDefault();
    let data=document.querySelector('#towns');
    if (data.value=='') {
        return;
    }    
    let items=data.value.split(',');
    render(template(items),placeToRender);
    data.value='';
}
