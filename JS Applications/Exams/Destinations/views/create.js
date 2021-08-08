import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from "../node_modules/page/page.mjs";

import { createQuery } from '../api/data.js';
import { header } from "./header.js";
import { notifications } from "./notifications.js";

export async function createView() {

    if (!sessionStorage.getItem('userId')) {
        //user is not logged in check
        alert('You have to be logged in order to access this page.');
        page.redirect('/');
    }



    const layoutTemplate = item => html`
    <section id="viewAdddestination">
        <h2>Add new destination</h2>
        <form id="formAdddestination"  @submit=${onSubmit}>
            <label for="destination">Destination name:</label>
            <input type="text" id="destination" name="destination" placeholder="Destination name">
            <label for="city">City:</label>
            <input type="text" id="city" name="city" placeholder="City">
            <label for="duration">Duration:</label>
            <input type="number" id="duration" name="duration" placeholder="Duration">
            <label for="departureDate">Departure Date:</label>
            <input type="date" id="departureDate" name="departureDate">
            <label for="imgUrl">Image:</label>
            <input type="text" id="imgUrl" name="imgUrl" placeholder="https://">
    
            <input type="submit" class="create" value="Add">
        </form>
    </section>    
    `;

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        const destination = formData.get('destination');
        const city = formData.get('city');
        const duration = Number(formData.get('duration'));
        const departureDate = formData.get('departureDate');
        const imageUrl = formData.get('imgUrl');        

        if (destination == '' || city == '' || duration == '' || departureDate=='' || imageUrl=='') {
            notifications('error','All fields are required');            
            return;
        }

        const itemForQuery = { destination, city, duration:duration,departureDate,imageUrl };

        await createQuery(itemForQuery);
        notifications('success','Successful Created Item');
        page.redirect('/');

    }

    const main = document.querySelector('main');
    render(layoutTemplate(), main);

}