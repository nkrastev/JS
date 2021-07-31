import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from "../node_modules/page/page.mjs";

import { getArticleById } from '../api/data.js';
import { editArticle } from '../api/data.js';
import { header } from "./header.js";

export async function editView(context) {

    const detailedData = await getArticleById(context.params.id);
    const userId = sessionStorage.getItem('userId');
    let currentUserIsOwner;
    if (detailedData._ownerId == userId) {
        currentUserIsOwner = true;
    } else {
        currentUserIsOwner = false;
    }
    console.log(detailedData);



    const layoutTemplate = item => html`
    <section id="edit-page" class="content">
        <h1>Edit Article</h1>
        <form @submit=${saveEditedArticle} id="${item._id}" action="#" method="">
            <fieldset>
                <p class="field title">
                    <label for="title">Title:</label>
                    <input type="text" name="title" id="title" placeholder="Enter article title" .value=${item.title}>
                </p>
                <p class="field category">
                    <label for="category">Category:</label>
                    <input type="text" name="category" id="category" placeholder="Enter article category"
                        .value=${item.category}>
                </p>
                <p class="field">
                    <label for="content">Content:</label>
                    <textarea name="content" id="content" .value=${item.content}></textarea>
                </p>
                <p class="field submit">
                    <input class="btn submit" type="submit" value="Save Changes">
                </p>
            </fieldset>
        </form>
    </section>
`;

    async function saveEditedArticle(event) {
        event.preventDefault();
        let id = event.target.id;
        console.log(id);

        const formData = new FormData(event.target);

        const title = formData.get('title');
        const category = formData.get('category');
        const content = formData.get('content');
        

        if (title == '' || category == '' || content == '') {
            alert('All fields are required');
            return;
        }

        const editedArticle = { title, category, content};
        console.log('Before edit query')
        await editArticle(id, editedArticle);
        page.redirect('/details/' + id);
    }

    const main = document.querySelector('main');
    render(layoutTemplate(detailedData), main);

}