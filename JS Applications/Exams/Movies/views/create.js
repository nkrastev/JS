import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from "../node_modules/page/page.mjs";

import { createMovie } from '../api/data.js';
import { header } from "./header.js";

export async function createView() {

    if (!sessionStorage.getItem('userId')) {
        //user is not logged in check
        alert('You have to be logged in order to access this page.');
        page.redirect('/');
    }

    

    const layoutTemplate = item => html`
    <section id="add-movie">
        <form class="text-center border border-light p-5" action="#" method="" @submit=${onSubmit}>
            <h1>Add Movie</h1>
            <div class="form-group">
                <label for="title">Movie Title</label>
                <input type="text" class="form-control" placeholder="Title" name="title" value="">
            </div>
            <div class="form-group">
                <label for="description">Movie Description</label>
                <textarea class="form-control" placeholder="Description" name="description"></textarea>
            </div>
            <div class="form-group">
                <label for="imageUrl">Image url</label>
                <input type="text" class="form-control" placeholder="Image Url" name="imageUrl" value="">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </section>`;

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        const title = formData.get('title');
        const description = formData.get('description');
        const imageUrl = formData.get('imageUrl');
               

        if (title == '' || description == '' || imageUrl == '' ) {
            alert('All fields are required');
            return;
        }

        const itemForQuery = {title,description,img:imageUrl};        

        await createMovie(itemForQuery);

        page.redirect('/');

    }

    const main = document.querySelector('main');
    render(layoutTemplate(), main);

}