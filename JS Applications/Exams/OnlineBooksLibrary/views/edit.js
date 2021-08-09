import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from "../node_modules/page/page.mjs";

import { getItemById } from '../api/data.js';
import { editItem } from '../api/data.js';
import { header } from "./header.js";

export async function editView(context) {

    const detailedData = await getItemById(context.params.id);
    const userId = sessionStorage.getItem('userId');
    let currentUserIsOwner;
    if (detailedData._ownerId == userId) {
        currentUserIsOwner = true;
    } else {
        currentUserIsOwner = false;
    }
    console.log(detailedData);



    const layoutTemplate = item => html`
    <section id="edit-page" class="edit">
        <form id="edit-form" action="#" method="" @submit=${saveEdited}>
            <fieldset>
                <legend>Edit my Book</legend>
                <p class="field">
                    <label for="title">Title</label>
                    <span class="input">
                        <input type="text" name="title" id="title" .value=${item.title}>
                    </span>
                </p>
                <p class="field">
                    <label for="description">Description</label>
                    <span class="input">
                        <textarea name="description" id="description" .value=${item.description}></textarea>
                    </span>
                </p>
                <p class="field">
                    <label for="image">Image</label>
                    <span class="input">
                        <input type="text" name="imageUrl" id="image" .value=${item.imageUrl}>
                    </span>
                </p>
                <p class="field">
                    <label for="type">Type</label>
                    <span class="input">
                        <select id="type" name="type" value="Fiction">
                            <option value="Fiction" selected>Fiction</option>
                            <option value="Romance">Romance</option>
                            <option value="Mistery">Mistery</option>
                            <option value="Classic">Clasic</option>
                            <option value="Other">Other</option>
                        </select>
                    </span>
                </p>
                <input class="button submit" type="submit" value="Save">
            </fieldset>
        </form>
    </section>
        `;

    async function saveEdited(event) {
        event.preventDefault();
        let id = context.params.id;
        console.log(id);

        const formData = new FormData(event.target);

        const title = formData.get('title');
        const description = formData.get('description');
        const imageUrl = formData.get('imageUrl');
        const type = formData.get('type');

        if (title == '' || description == '' || imageUrl == '') {
            alert('All fields are required for edition');
            return;
        }

        const editedItem = Object.fromEntries(formData);

        await editItem(id, editedItem);
        page.redirect('/details/' + id);
    }


    const main = document.querySelector('main');
    render(layoutTemplate(detailedData), main);

}