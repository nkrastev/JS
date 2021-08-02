import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from "../node_modules/page/page.mjs";

import { getAllListings } from '../api/data.js';
import { header } from "./header.js";

export async function allListingsView() {

    const queryData = await getAllListings();    

    const layoutTemplate = data => html`
    <section id="car-listings">
        <h1>Car Listings</h1>
        <div class="listings">
            ${data
              ? data.map(templateItem)
              : templateEmpty
              }
        </div>
    </section>    
    `;

    const templateEmpty = html`<p class="no-cars">No cars in database.</p>`;

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
                <a href="details/${item._id}" id=${item._id} class="button-carDetails">Details</a>
            </div>
        </div>
    </div>
    `;

    const main = document.querySelector('main');
    render(layoutTemplate(queryData), main);

}