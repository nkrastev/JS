import { html, render } from '/node_modules/lit-html/lit-html.js';
import page from "/node_modules/page/page.mjs";
import { homeQuery } from "../api/data.js";

export async function homeView() {

    const homeData = await homeQuery();
    let userId = sessionStorage.getItem('userId');

    const templateItems = item => html`
    <li class="otherBooks">
        <h3>${item.title}</h3>
        <p>Type: ${item.type}</p>
        <p class="img"><img src="${item.imageUrl}"></p>
        <a class="button" href="/details/${item._id}">Details</a>
    </li>
    `;


    const layoutTemplate = data => html`
    
    <section id="dashboard-page" class="dashboard">
        <h1>Dashboard</h1>
        <!-- Display ul: with list-items for All books (If any) -->
        ${homeData.length>0
          ? html`<ul class="other-books-list">${data.map(templateItems)}</ul>`
          : html`<p class="no-books">No books in database!</p>`
        }        
    </section>`;
    
    


    const main = document.querySelector('main');
    render(layoutTemplate(homeData), main);

}