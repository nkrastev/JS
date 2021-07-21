import { html, render } from 'https://unpkg.com/lit-html?module';
import { getItemById } from '../api/data.js';

export async function detailsView(context) {

    const detailedData = await getItemById(context.params.id);
    const userId = sessionStorage.getItem('userId');

    const layoutTemplate = item => html`<div class="container">
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Furniture Details</h1>
        </div>
    </div>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="card text-white bg-primary">
                <div class="card-body">
                    <img src="${item.img.replace('./', '/')}" />
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <p>Make: <span>${item.make}</span></p>
            <p>Model: <span>${item.model}</span></p>
            <p>Year: <span>${item.year}</span></p>
            <p>Description: <span>${item.description}</span></p>
            <p>Price: <span>${item.price}</span></p>
            <p>Material: <span>${item.material}</span></p>
            ${userId
              ? btnTemplate
              : ''
              }
        </div>
    </div>
</div>`;

    const btnTemplate = html`
    <div>
    <a href=”#” class="btn btn-info">Edit</a>
    <a href=”#” class="btn btn-red">Delete</a>
    </div>`;



    const main = document.querySelector('main');
    render(layoutTemplate(detailedData), main);

}