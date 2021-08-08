import { html, render } from '/node_modules/lit-html/lit-html.js';
import page from "/node_modules/page/page.mjs";

import { homeQuery } from '../api/data.js';
import { sortedBy } from '../api/data.js';
import { getCountOfRecords } from '../api/data.js';
import { getSpecificProperties } from '../api/data.js';

export async function homeView() {

    let userId = sessionStorage.getItem('userId');

    const data=await homeQuery();
    const dataSortedByDuration=await sortedBy('duration');
    const dataCount=await getCountOfRecords();
    const dataSpecificProp=await getSpecificProperties('destination%2Ccity')

    //console.log(dataSortedByDuration);
    //console.log(dataCount);
    //console.log(dataSpecificProp);

    
    const templateItem = item => html`
    <a href="/details/${item._id}" class="added-destination">
        <img src="${item.imageUrl}" alt="" class="picture-added-destination">
        <h3>${item.name}</h3>
        <span>to Berlin what data is this?</span><span>${item.depDate}</span>
    </a>
    `;

    const layoutTemplate = dataItems => html`
    <section id="viewCatalog" class="background-img">
            ${userId
            ? html`<div class="added-destinations">${dataItems.map(templateItem)}</div>`
            : html`<div class="guest">No destinations possible! Please sign in...</div>`
        }                
    </section>`;

    const main = document.querySelector('main');
    render(layoutTemplate(data), main);

}