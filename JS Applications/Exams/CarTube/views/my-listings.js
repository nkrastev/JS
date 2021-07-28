import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from "../node_modules/page/page.mjs";

import { getUserListings } from '../api/data.js';
import { header } from "./header.js";

export async function myListingsView() {

    
    console.log('My Listings view');
    const userId = sessionStorage.getItem('userId');    

    if (!userId) {
        //user is not logged in check
        alert('You have to be logged in order to access this page.');
        page.redirect('/');
    }

    const userListings = await getUserListings(userId);
    console.log(userListings);

    const templateNoItems = html`<p class="no-cars"> You haven't listed any cars yet.</p>`;
    const templateItem = item => html`
    <div class="listing">
        <div class="preview">
            <img src="${item.imageUrl}">
        </div>
        <h2>${item.brand} ${item.model}</h2>
        <div class="info">
            <div class="data-info">
                <h3>Year: ${item.year}</h3>
                <h3>Price: ${item.price} $</h3>
            </div>
            <div class="data-buttons">
                <a href="/details/${item._id}" class="button-carDetails">Details</a>
            </div>
        </div>
    </div>
    `;


    const layoutTemplate = (listings) => html`
    <section id="my-listings">
        <h1>My car listings</h1>
        <div class="listings">
            ${listings.length > 0
                    ? listings.map(templateItem)
                    : templateNoItems
                    }
        </div>
    </section>
    `;


    const main = document.querySelector('main');
    
    render(layoutTemplate(userListings), main);
}
