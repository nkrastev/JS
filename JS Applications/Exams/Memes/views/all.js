import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from "../node_modules/page/page.mjs";

import { getAllMemes } from '../api/data.js';
import { header } from "./header.js";

export async function allMemesView() {

    console.log('before query get all memes')
    //const queryData = await getAllMemes();    


    const url='http://localhost:3030/data/memes?sortBy=_createdOn%20desc';
    const response = await fetch(url);        
       
    let queryData;
    if (response.status !== 200 ) {       
        console.log('Invalid GET request');             
    }else{
        queryData = await response.json();
    }
    console.log(queryData);
    
    

    const layoutTemplate = data => html`
    <section id="meme-feed">
        <h1>All Memes</h1>
        <div id="memes">
            ${data
              ? data.map(templateItem)
              : templateEmpty
              }
        </div>
    </section>
    `;

    const templateEmpty = html`<p class="no-memes">No memes in database.</p>`;
    
    const templateItem = item => html`
    <div class="meme">
        <div class="card">
            <div class="info">
                <p class="meme-title">${item.title}</p>
                <img class="meme-image" alt="meme-img" src="${item.imageUrl}">
            </div>
            <div id="data-buttons">
                <a class="button" href="details/${item._id}" id=${item._id}>Details</a>
            </div>
        </div>
    </div>
    `;    

    const main = document.querySelector('main');    
    render(layoutTemplate(queryData), main);

}