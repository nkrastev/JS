import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from "../node_modules/page/page.mjs";

import { detailsQueryById } from '../api/data.js';
import { editQueryById } from '../api/data.js';
import { header } from "./header.js";

export async function editView(context) {

    const detailedData = await detailsQueryById(context.params.id);
    const userId = sessionStorage.getItem('userId');
    let currentUserIsOwner;
    if (detailedData._ownerId == userId) {
        currentUserIsOwner = true;
    } else {
        currentUserIsOwner = false;
    }
    console.log(detailedData);



    const layoutTemplate = item => html`
    <section id="viewEditdestination">
        <h2>Edit existing destination</h2>
        <form id="formAdddestination" @submit=${saveItem} action="/edit/${item._id}">
            <label for="destination">Destination name:</label>
            <input type="text" id="destination" name="destination" value="${item.destination}">
            <label for="city">City:</label>
            <input type="text" id="city" name="city" value="${item.city}">
            <label for="duration">Duration:</label>
            <input type="number" id="duration" name="duration" value="${item.duration}">
            <label for="departureDate">Departure Date:</label>
            <input type="date" id="departureDate" name="departureDate" value="${item.depDate}">
            <label for="imgUrl">Image:</label>
            <input type="text" id="imgUrl" name="imgUrl" value="${item.imageUrl}">    
            <input type="submit" class="create" value="Edit">
        </form>
    </section>`;

    async function saveItem(event) {
        event.preventDefault();
        let id = context.params.id;    

        const formData = new FormData(event.target);

        const destination = formData.get('destination');
        const city = formData.get('city');
        const duration = Number(formData.get('duration'));
        const depDate = formData.get('departureDate');
        const imageUrl = formData.get('imgUrl');        

        if (destination == '' || city == '' || duration == '' || depDate == '' || imageUrl == '') {
            alert('All fields are required');
            return;
        }

        const editedData = { destination, city, duration:duration, depDate, imageUrl };
        console.log(editedData)
        await editQueryById(id, editedData);
        page.redirect('/details/' + id);
    }

    const main = document.querySelector('main');
    render(layoutTemplate(detailedData), main);

}