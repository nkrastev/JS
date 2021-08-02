import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from "../node_modules/page/page.mjs";

import { getMemeDetailsById } from '../api/data.js';
import { editMeme } from '../api/data.js';
import { header } from "./header.js";

export async function editView(context) {

    const detailedData = await getMemeDetailsById(context.params.id);
    const userId = sessionStorage.getItem('userId');
    let currentUserIsOwner;
    if (detailedData._ownerId == userId) {
        currentUserIsOwner = true;
    } else {
        currentUserIsOwner = false;
    }    
    console.log(detailedData);

    

    const layoutTemplate = item => html`
    <section id="edit-meme">
        <form id="${item._id}" @submit=${saveEditedMeme}>
            <h1>Edit Meme</h1>
            <div class="container">
                <label for="title">Title</label>
                <input id="title" type="text" placeholder="Enter Title" name="title" value=${item.title}>
                <label for="description">Description</label>
                <textarea id="description" placeholder="Enter Description" name="description">${item.description}</textarea>
                <label for="imageUrl">Image Url</label>
                <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" value=${item.imageUrl} >
                <input type="submit" class="registerbtn button" value="Edit Meme">
            </div>
        </form>
    </section>
        `;
    
    async function saveEditedMeme(event){
        event.preventDefault();
        let id=event.target.id;
        console.log(id);

        const formData = new FormData(event.target);
        
        const title=formData.get('title');
        const description=formData.get('description');
        const imageUrl=formData.get('imageUrl');

        if (title=='' || description=='' || imageUrl=='') {
            alert('All fields are required for edition');
            return;
        }

        const editedMeme=Object.fromEntries(formData);

        await editMeme(id, editedMeme);
        page.redirect('/details/'+id);
    }


    const main = document.querySelector('main');    
    render(layoutTemplate(detailedData), main);    

}