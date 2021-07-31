import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from "../node_modules/page/page.mjs";

import { searchQuery } from '../api/data.js';
import { header } from "./header.js";

export async function searchView() {    
    
    
    const record = items =>html`
    <a class="article-preview" href="/details/${items._id}">
    <article>
        <h3>Topic: <span>${items.title}</span></h3>
        <p>Category: <span>${items.category}</span></p>
    </article>
    </a>`;    

    const layoutTemplate = (search, query) => html`
        <section id="search-page" class="content">
            <h1>Search</h1>
            <form @submit=${onSearch} id="search-form">
                <p class="field search">
                    <input type="text" placeholder="Search by article title" name="search" .value=${query}>
                </p>
                <p class="field submit">
                    <input class="btn submit" type="submit" value="Search">
                </p>
            </form>
            <div class="search-container">
                
                ${
                search.length === 0
                    ? html`<h3 class="no-articles">No matching articles</h3>`
                    : search.map(record)
                }
                
            </div>
        </section>`;
    
    async function onSearch(event){
        event.preventDefault();
        console.log(event.target.search.value);
        const queryResults = await searchQuery(event.target.search.value);    
        render(layoutTemplate(queryResults, event.target.search.value), main);
    }
    
    const main = document.querySelector('main');
    render(layoutTemplate([],null), main);

}