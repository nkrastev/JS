import { html, render } from '/node_modules/lit-html/lit-html.js';
import page from "/node_modules/page/page.mjs";

import { getDashboard } from '../api/data.js';


export async function dashboardView() {

    const data = await getDashboard();

    const layoutTemplate = data => html`
    <div id="dashboard-holder">
        ${data
              ? data.map(templateItem)
              : templateEmpty
          }
    </div>`;

    const templateEmpty = html`<h1>No ideas yet! Be the first one :)</h1>`;

    const templateItem = item => html`
    <div class="card overflow-hidden current-card details" style="width: 20rem; height: 18rem;">
            <div class="card-body">
                <p class="card-text">${item.title}</p>
            </div>
            <img class="card-image" src="${item.img}" alt="Card image cap">
            <a class="btn" href="/details/${item._id}" id=${item._id}>Details</a>
    </div>    
    `;

    const main = document.querySelector('main');
    render(layoutTemplate(data), main);

}