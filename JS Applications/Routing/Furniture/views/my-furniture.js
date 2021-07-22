import { html, render } from 'https://unpkg.com/lit-html?module';
import page from "//unpkg.com/page/page.mjs";
import { getMyFurniture } from '../api/data.js';

export async function myFurnitureView(context) {

    //const detailedData = await getItemById(context.params.id);
    const userId = sessionStorage.getItem('userId');
    const ownedFurniture= await getMyFurniture(userId);

    const data=[];
    const itemTemplate = item => html`
    <div class="col-md-4">
        <div class="card text-white bg-primary">
            <div class="card-body">
                <img src="${item.img}" />
                <p>${item.description}</p>
                <footer>
                    <p>Price: <span>${item.price} $</span></p>
                </footer>
                <div>
                    <a href="/details/${item._id}" class="btn btn-info">Details</a>
                </div>
            </div>
        </div>
    </div>`;

    const layoutTemplate = data => html`
    <div class="container">
        <div class="row space-top">
            <div class="col-md-12">
                <h1>My Furniture</h1>
                <p>This is a list of your publications.</p>
            </div>
        </div>
        <div class="row space-top">
            ${data.map(itemTemplate)}
        </div>
    </div>`;

    

    const main = document.querySelector('main');
    render(layoutTemplate(ownedFurniture), main);





}