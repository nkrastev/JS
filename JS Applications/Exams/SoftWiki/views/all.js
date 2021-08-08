import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from "../node_modules/page/page.mjs";

import { getDataForCatalogue } from '../api/data.js';
import { header } from "./header.js";

export async function catalogueView() {

    const queryData = await getDataForCatalogue();    

    console.log(queryData);

    const templateItem = item => html`
    <a class="article-preview" href="/details/${item._id}">
    <article>
        <h3>Topic: <span>${item.title}</span></h3>
        <p>Category: <span>${item.category}</span></p>
    </article>
    </a>`;

    const layoutTemplate = data => html`
        <section id="catalog-page" class="content catalogue">
            <h1>All Articles</h1>
            ${
                data.length === 0
                ? html`<h3 class="no-articles">No articles yet</h3>`
                : data.map(templateItem)
            }
        </section>`;
    

    

    const main = document.querySelector('main');
    render(layoutTemplate(queryData), main);

}