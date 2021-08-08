import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from "../node_modules/page/page.mjs";

import { detailsQueryById } from '../api/data.js';
import { header } from "./header.js";

export async function detailsView(context) {
   
    const detailedData = await detailsQueryById(context.params.id);   
    const userId = sessionStorage.getItem('userId');
    let currentUserIsOwner;
    if (detailedData._ownerId == userId) {
        currentUserIsOwner = true;
    } else {
        currentUserIsOwner = false;
    }
    

    const layoutTemplate = item => html`
    <section id="viewdestinationDetails">
        <div class="destination-area">
            <div class="destination-area-left">
                <img src="${item.imageUrl}" alt="">
            </div>
            <div class="destination-area-right">
                <h3>${item.name}</h3>
                <div>${item.city}</div>
                <div class="data-and-time">
                    ${item.depDate}
                    <a href="/edit/${item._id}" class="edit-destination-detail"></a>
                </div>
                <div>
                ${item.duration} days
                </div>
            </div>
        </div>
    </section>        
        `;

    const main = document.querySelector('main');
    render(layoutTemplate(detailedData), main);

}