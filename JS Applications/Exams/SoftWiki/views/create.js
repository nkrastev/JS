import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from "../node_modules/page/page.mjs";

import { createArticle } from '../api/data.js';
import { header } from "./header.js";

export async function createView() {

    if (!sessionStorage.getItem('userId')) {
        //user is not logged in check
        alert('You have to be logged in order to access this page.');
        page.redirect('/');
    }



    const layoutTemplate = item => html`
    <section id="create-page" class="content">
        <h1>Create Article</h1>
        <form @submit=${onSubmit} id="create" action="#" method="">
            <fieldset>
                <p class="field title">
                    <label for="create-title">Title:</label>
                    <input type="text" id="create-title" name="title" placeholder="Enter article title" required />
                </p>
                <p class="field category">
                    <label for="create-category">Category:</label>
                    <input type="text" id="create-category" name="category" placeholder="Enter article category" required />
                </p>
                <p class="field">
                    <label for="create-content">Content:</label>
                    <textarea name="content" id="create-content" required></textarea>
                </p>
                <p class="field submit">
                    <input class="btn submit" type="submit" value="Create" />
                </p>
            </fieldset>
        </form>
    </section>
    `;

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        const title = formData.get('title');
        const category = formData.get('category');
        const content = formData.get('content');        

        if (content == '' || category == '' || title == '') {
            alert('All fields are required');
            return;
        }

        const itemForQuery = { title, category, content};
        
        await createArticle(itemForQuery);

        page.redirect('/');

    }

    const main = document.querySelector('main');
    render(layoutTemplate(), main);

}