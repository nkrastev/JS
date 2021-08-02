import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from "../node_modules/page/page.mjs";

import { createMeme } from '../api/data.js';
import { header } from "./header.js";

export async function createView() {
    
    if (!sessionStorage.getItem('userId')) {
        //user is not logged in check
        alert('You have to be logged in order to access this page.');
        page.redirect('/');
    }

    const layoutTemplate = item => html`
    <section id="create-meme">
        <form id="create-form" @submit=${onSubmit}>
            <div class="container">
                <h1>Create Meme</h1>
                <label for="title">Title</label>
                <input id="title" type="text" placeholder="Enter Title" name="title">
                <label for="description">Description</label>
                <textarea id="description" placeholder="Enter Description" name="description"></textarea>
                <label for="imageUrl">Meme Image</label>
                <input id="imageUrl" type="text" placeholder="Enter meme ImageUrl" name="imageUrl">
                <input type="submit" class="registerbtn button" value="Create Meme">
            </div>
        </form>
    </section>`;

    async function onSubmit(event){
        event.preventDefault();        
        const formData = new FormData(event.target);
        
        const title=formData.get('title');
        const description=formData.get('description');
        const imageUrl=formData.get('imageUrl');

        if (title=='' || description=='' || imageUrl=='') {
            alert('All fields are required');
            return;
        }

        const itemForQuery=Object.fromEntries(formData);
        await createMeme(itemForQuery);

        page.redirect('/');

    }

    const main = document.querySelector('main');
    render(layoutTemplate(), main);

}