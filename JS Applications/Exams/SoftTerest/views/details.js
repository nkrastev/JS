import { html, render } from '/node_modules/lit-html/lit-html.js';
import page from "/node_modules/page/page.mjs";

import { getDetailsById } from '../api/data.js';
import { deleteById } from '../api/data.js';


export async function detailsView(context) {

    const detailedData = await getDetailsById(context.params.id);

    const userId = sessionStorage.getItem('userId');
    let currentUserIsOwner;
    if (detailedData._ownerId == userId) {
        currentUserIsOwner = true;
    } else {
        currentUserIsOwner = false;
    }
    console.log('Is it owner? ' + currentUserIsOwner);
    console.log(detailedData);

    const btnTemplate=html`<a href="#" @click=${onClickDelete} class="btn detb" id=${context.params.id}>Delete</a>`;

    const layoutTemplate = item => html`
    <div class="container home some">
        <img class="det-img" src="${item.img.replace('.', '')}" />
        <div class="desc">
            <h2 class="display-5">${item.title}</h2>
            <p class="infoType">Description:</p>
            <p class="idea-description">${item.description}</p>
        </div>
        <div class="text-center">
                ${userId && currentUserIsOwner
                    ? btnTemplate
                    : ''}  
        </div>
    </div>
        
    
        `;
       
    async function onClickDelete(event){
        event.preventDefault();  
        console.log(event.target.id)
        const confirmed = confirm('Are you sure?');
        if(confirmed){
            await deleteById(event.target.id);
            page.redirect('/');
        }else{
            return
        }                
        
    }

    const main = document.querySelector('main');
    render(layoutTemplate(detailedData), main);

}