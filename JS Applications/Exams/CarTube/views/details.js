import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from "../node_modules/page/page.mjs";

import { getListingById } from '../api/data.js';
import { deleteListing } from '../api/data.js';
import { header } from "./header.js";

export async function detailsView(context) {

    const detailedData = await getListingById(context.params.id);
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
        <div class="listings-buttons">
                    <a href="/edit/${context.params.id}" class="button-list" id=${context.params.id}>Edit</a>
                    <a href="#" @click=${onClickDelete} class="button-list" id=${context.params.id}>Delete</a>
        </div>`;

    const layoutTemplate = item => html`
        <section id="listing-details">
            <h1>Details</h1>
            <div class="details-info">
                <img src="${item.imageUrl}">
                <hr>
                <ul class="listing-props">
                    <li><span>Brand:</span>${item.brand}</li>
                    <li><span>Model:</span>${item.model}</li>
                    <li><span>Year:</span>${item.year}</li>
                    <li><span>Price:</span>${item.price}$</li>
                </ul>

                <p class="description-para">${item.description}</p>
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
            await deleteListing(event.target.id);
            page.redirect('/');
        }else{
            return
        }                
        
    }

    const main = document.querySelector('main');
    render(layoutTemplate(detailedData), main);

}