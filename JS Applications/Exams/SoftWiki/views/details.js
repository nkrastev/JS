import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from "../node_modules/page/page.mjs";

import { getArticleById } from '../api/data.js';
import { deleteArticle } from '../api/data.js';
import { header } from "./header.js";

export async function detailsView(context) {

    const detailedData = await getArticleById(context.params.id);
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
        <div class="buttons">
            <a @click=${onClickDelete} href="javascript:void(0)" class="btn delete" id=${context.params.id}>Delete</a>
            <a href="/edit/${context.params.id}" class="btn edit">Edit</a>            
        </div>`;

    const layoutTemplate = item => html`
        <section id="details-page" class="content details">
            <h1>${item.title}</h1>
            <div class="details-content">
                <strong>Published in category ${item.category}</strong>
                <p>${item.content}</p>
                ${userId && currentUserIsOwner
                    ? btnTemplate
                    : ''} 
            </div>
        </section>
        `;
       
    async function onClickDelete(event){
        event.preventDefault();  
        console.log(event.target.id)
        const confirmed = confirm('Are you sure?');
        if(confirmed){
            await deleteArticle(event.target.id);
            page.redirect('/');
        }else{
            return
        }                
        
    }

    const main = document.querySelector('main');
    render(layoutTemplate(detailedData), main);

}