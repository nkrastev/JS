import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from "../node_modules/page/page.mjs";

import { getMemeDetailsById } from '../api/data.js';
import { deleteMeme } from '../api/data.js';
import { header } from "./header.js";

export async function detailsView(context) {

    const detailedData = await getMemeDetailsById(context.params.id);
    const userId = sessionStorage.getItem('userId');
    let currentUserIsOwner;
    if (detailedData._ownerId == userId) {
        currentUserIsOwner = true;
    } else {
        currentUserIsOwner = false;
    }
    console.log('Is it owner? ' + currentUserIsOwner);
    console.log(detailedData);

    const btnTemplate=html`
    <a class="button warning" href="/edit/${context.params.id}" id=${context.params.id}>Edit</a>
    <button class="button danger" @click=${onClickDelete} id=${context.params.id}>Delete</button>`;

    const layoutTemplate = item => html`
    <section id="meme-details">
        <h1>Meme Title: ${item.title}</h1>
        <div class="meme-details">
            <div class="meme-img">
                <img alt="meme-alt" src="${item.imageUrl}">
            </div>
            <div class="meme-description">
                <h2>Meme Description</h2>
                <p>
                    ${item.description}
                </p>
                ${userId && currentUserIsOwner
                    ? btnTemplate
                    : ''}                    
            </div>
        </div>
    </section>
        `;
       
    async function onClickDelete(event){
        event.preventDefault();  
        console.log(event.target.id)
        const confirmed = confirm('Are you sure?');
        if(confirmed){
            await deleteMeme(event.target.id);
            page.redirect('/');
        }else{
            return
        }                
        
    }

    const main = document.querySelector('main');
    render(layoutTemplate(detailedData), main);

}