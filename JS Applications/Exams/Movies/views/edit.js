import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from "../node_modules/page/page.mjs";

import { getMovieById } from '../api/data.js';
import { editMovie } from '../api/data.js';
import { header } from "./header.js";

export async function editView(context) {

    const detailedData = await getMovieById(context.params.id);
    const userId = sessionStorage.getItem('userId');
    let currentUserIsOwner;
    if (detailedData._ownerId == userId) {
        currentUserIsOwner = true;
    } else {
        currentUserIsOwner = false;
    }
    console.log(detailedData);



    const layoutTemplate = item => html`
    <section id="edit-movie">
        <form class="text-center border border-light p-5" action="#" method="" id="${item._id}"
            @submit=${saveEditedListing}>
            <h1>Edit Movie</h1>
            <div class="form-group">
                <label for="title">Movie Title</label>
                <input type="text" class="form-control" placeholder="Movie Title" value=${item.title} name="title">
            </div>
            <div class="form-group">
                <label for="description">Movie Description</label>
                <textarea class="form-control"  name="description">${item.description}</textarea>
            </div>
            <div class="form-group">
                <label for="imageUrl">Image url</label>
                <input type="text" class="form-control" placeholder="Image Url" value=${item.img} name="imageUrl">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </section>
`;

    async function saveEditedListing(event) {
        event.preventDefault();
        let id = event.target.id;


        const formData = new FormData(event.target);

        const title = formData.get('title');
        const description = formData.get('description');
        const imageUrl = formData.get('imageUrl');        

        if (title == '' || description == '' || imageUrl == '') {
            alert('All fields are required');
            return;
        }

        const dataForEdit = { title, description, img:imageUrl };

        await editMovie(id, dataForEdit);
        page.redirect('/details/' + id);
    }

    const main = document.querySelector('main');
    render(layoutTemplate(detailedData), main);

}