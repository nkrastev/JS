import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from "../node_modules/page/page.mjs";

import { getItemById } from '../api/data.js';
import { deleteItem } from '../api/data.js';
import { header } from "./header.js";

export async function detailsView(context) {

    const detailedData = await getItemById(context.params.id);
    const userId = sessionStorage.getItem('userId');
    /*let likes = sessionStorage.getItem('likes' + context.params.id);
    if (!likes) {
        sessionStorage.setItem('likes' + context.params.id, 0);
    }*/


    let currentUserIsOwner;


    if (detailedData._ownerId == userId) {
        currentUserIsOwner = true;
    } else {
        currentUserIsOwner = false;
    }
    console.log('Is it owner? ' + currentUserIsOwner);
    console.log(detailedData);

    const btnTemplate = html`
    <a class="button" href="/edit/${context.params.id}">Edit</a>
    <a class="button" href="#" @click=${onClickDelete} id=${context.params.id}>Delete</a>`;

    const layoutTemplate = (item) => html`
        <section id="details-page" class="details">
            <div class="book-information">
                <h3>${item.title}</h3>
                <p class="type">Type: ${item.type}</p>
                <p class="img"><img src="${item.imgUrl}"></p>
                <div class="actions">
                    <!-- Edit/Delete buttons ( Only for creator of this book )  -->
                    ${userId && currentUserIsOwner
                    ? btnTemplate
                    : ''}  
        
                    <!-- Bonus -->
                    <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
                    <a class="button" href="#">Like</a>
        
                    <!-- ( for Guests and Users )  -->
                    <div class="likes">
                        <img class="hearts" src="/images/heart.png">
                        <span id="total-likes">Likes: 0</span>
                    </div>
                    <!-- Bonus -->
                </div>
            </div>
            <div class="book-description">
                <h3>Description:</h3>
                <p>${item.description}</p>
            </div>
        </section>
        `;



    async function onClickDelete(event) {
        event.preventDefault();
        console.log(event.target.id)
        const confirmed = confirm('Are you sure?');
        if (confirmed) {
            await deleteItem(event.target.id);
            page.redirect('/');
        } else {
            return
        }

    }

    const main = document.querySelector('main');
    render(layoutTemplate(detailedData), main);

}