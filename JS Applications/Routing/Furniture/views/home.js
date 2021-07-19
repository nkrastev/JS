import { html, render } from 'https://unpkg.com/lit-html?module';
import { getAllFurniture } from '../api/data.js';

export async function homeView() {
    const allData = await getAllFurniture();
    console.log(allData);

    const layoutTemplate = data => html`
    <div class="container">
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Welcome to Furniture System</h1>
                <p>Select furniture from the catalog to view details.</p>
            </div>
        </div>
        <div class="row space-top">
    
            ${data.map(itemTemplate)}
    
        </div>
    </div>`;

    const itemTemplate = item => html`<div class="col-md-4">
    <div class="card text-white bg-primary">
        <div class="card-body">
            <img src="${item.img}" />
            <p>${item.description}</p>
            <footer>
                <p>Price: <span>${item.price} $</span></p>
            </footer>
            <div>
                <a href="details/${item._id}" id=${item._id} class="btn btn-info">Details</a>
            </div>
        </div>
    </div>
</div>`;

    const main = document.querySelector('main');
    render(layoutTemplate(allData), main);

}