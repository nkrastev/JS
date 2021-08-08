import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from "../node_modules/page/page.mjs";

import { filterByOwnerId } from '../api/data.js';
import { deleteItemById } from '../api/data.js';
import { header } from "./header.js";

export async function myDestinationsView(context) {


    if (!sessionStorage.getItem('userId')) {
        //user is not logged in check
        alert('You have to be logged in order to access this page.');
        page.redirect('/');
    }
    const listOwnerId = sessionStorage.getItem('userId');
    const dataByOwner = await filterByOwnerId(listOwnerId);
    
    const templateNoItems = html`<p style="text-align:center">No Items... fix the message</p>`;
    const templateItem = item => html`
    <div class="destination-ticket">
        <div class="destination-left">
            <img src="${item.imageUrl}" alt="">
        </div>
        <div class="destination-right">
            <div>
                <h3>${item.destination}</h3><span>${item.depDate}</span>
            </div>
            <div>
                to ${item.city}
            </div>
            <p>${item.duration} days </p>
            <a href="" @click=${onClickDelete} class="remove" id=${item._id}>REMOVE</a>
            <a href="/details/${item._id}" class="details">Details</a>
        </div>
    
    </div>
    `;

    const layoutTemplate =data=> html`
    <section id="viewMydestinations">
        <h3>Your destinations</h3> 
        ${data.length > 0
                    ? data.map(templateItem)
                    : templateNoItems
                    }        
    </section>
    `;

    async function onClickDelete(event){
        event.preventDefault();          
        const confirmed = confirm('Are you sure?');
        if(confirmed){
            await deleteItemById(event.target.id);
            page.redirect('/destinations');
        }else{
            return
        }                
        
    } 


    const main = document.querySelector('main');
    render(layoutTemplate(dataByOwner), main);

}