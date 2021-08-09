import { html, render } from '/node_modules/lit-html/lit-html.js';
import page from "/node_modules/page/page.mjs";
import { getMyBooks } from "../api/data.js";

export async function myBooksView() {


    let userId = sessionStorage.getItem('userId');

    console.log(userId);

    if (!userId) {
        console.log('User have to be logged in');
        return;
    }

    const myBooksData = await getMyBooks(userId);

    const templateItems = item => html`
    <li class="otherBooks">
        <h3>${item.title}</h3>
        <p>Type: ${item.type}</p>
        <p class="img"><img src="${item.imageUrl}"></p>
        <a class="button" href="/details/${item._id}">Details</a>
    </li>    
    `;


    const layoutTemplate = data => html`               
    
    <section id="my-books-page" class="my-books">
            <h1>My Books</h1>
        ${data.length > 0
          ? html`<ul class="my-books-list">${data.map(templateItems)}</ul>`
          : html`<p class="no-books">No books in database!</p>`
        }    
    </section>`;


    const main = document.querySelector('main');
    render(layoutTemplate(myBooksData), main);

}