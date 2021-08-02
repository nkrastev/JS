import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from "../node_modules/page/page.mjs";

import { createListing } from '../api/data.js';
import { header } from "./header.js";

export async function createView() {

    if (!sessionStorage.getItem('userId')) {
        //user is not logged in check
        alert('You have to be logged in order to access this page.');
        page.redirect('/');
    }

    

    const layoutTemplate = item => html`
    <section id="create-listing">
        <div class="container">
            <form id="create-form" @submit=${onSubmit}>
                <h1>Create Car Listing</h1>
                <p>Please fill in this form to create an listing.</p>
                <hr>
    
                <p>Car Brand</p>
                <input type="text" placeholder="Enter Car Brand" name="brand">
    
                <p>Car Model</p>
                <input type="text" placeholder="Enter Car Model" name="model">
    
                <p>Description</p>
                <input type="text" placeholder="Enter Description" name="description">
    
                <p>Car Year</p>
                <input type="number" placeholder="Enter Car Year" name="year">
    
                <p>Car Image</p>
                <input type="text" placeholder="Enter Car Image" name="imageUrl">
    
                <p>Car Price</p>
                <input type="number" placeholder="Enter Car Price" name="price">
    
                <hr>
                <input type="submit" class="registerbtn" value="Create Listing">
            </form>
        </div>
    </section>`;

    async function onSubmit(event) {
        event.preventDefault();
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

        const itemForQuery = {brand,model,description,year,imageUrl,price};
        console.log(typeof itemForQuery.year);

        await createListing(itemForQuery);

        page.redirect('/');

    }

    const main = document.querySelector('main');
    render(layoutTemplate(), main);

}