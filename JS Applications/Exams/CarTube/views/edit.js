import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from "../node_modules/page/page.mjs";

import { getListingById } from '../api/data.js';
import { editListing } from '../api/data.js';
import { header } from "./header.js";

export async function editView(context) {

    const detailedData = await getListingById(context.params.id);
    const userId = sessionStorage.getItem('userId');
    let currentUserIsOwner;
    if (detailedData._ownerId == userId) {
        currentUserIsOwner = true;
    } else {
        currentUserIsOwner = false;
    }    
    console.log(detailedData);

    

    const layoutTemplate = item => html`
    <section id="edit-listing">
            <div class="container">
                <form id="edit-form" id="${item._id}" @submit=${saveEditedListing}>
                    <h1>Edit Car Listing</h1>
                    <p>Please fill in this form to edit an listing.</p>
                    <hr>

                    <p>Car Brand</p>
                    <input type="text" placeholder="Enter Car Brand" name="brand" value=${item.brand}>

                    <p>Car Model</p>
                    <input type="text" placeholder="Enter Car Model" name="model" value=${item.model}>

                    <p>Description</p>
                    <input type="text" placeholder="Enter Description" name="description" value=${item.description}>

                    <p>Car Year</p>
                    <input type="number" placeholder="Enter Car Year" name="year" value=${item.year}>

                    <p>Car Image</p>
                    <input type="text" placeholder="Enter Car Image" name="imageUrl" value=${item.imageUrl}>

                    <p>Car Price</p>
                    <input type="number" placeholder="Enter Car Price" name="price" value=${item.price}>

                    <hr>
                    <input type="submit" class="registerbtn" value="Edit Listing">
                </form>
            </div>
    </section>
`;
    
    async function saveEditedListing(event){
        event.preventDefault();
        let id=event.target.id;
        

        const formData = new FormData(event.target);
        
        const brand = formData.get('brand');
        const model = formData.get('model');
        const description = formData.get('description');
        const year = Number(formData.get('year'));
        const imageUrl = formData.get('imageUrl');
        const price = Number(formData.get('price'));      

        if (brand == '' || model == '' || description == '' || year=='' || imageUrl=='' || price=='') {
            alert('All fields are required');
            return;
        }

        const editedMeme={brand,model,description,year,imageUrl,price};
        console.log(typeof editedMeme.year);

        await editListing(id, editedMeme);
        page.redirect('/details/'+id);
    }

    const main = document.querySelector('main');    
    render(layoutTemplate(detailedData), main);    

}