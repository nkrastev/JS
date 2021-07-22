import { html, render } from 'https://unpkg.com/lit-html?module';
import page from "//unpkg.com/page/page.mjs";
import { deleteFurniture, getItemById } from '../api/data.js';

export async function detailsView(context) {

    const detailedData = await getItemById(context.params.id);
    const userId = sessionStorage.getItem('userId');
    let currentUserIsOwner;
    if (detailedData._ownerId==userId) {
        currentUserIsOwner=true;
    }else{
        currentUserIsOwner=false;
    }

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
            ${userId && currentUserIsOwner
              ? btnTemplate
              : ''
              }
        </div>
    </div>
</div>`;

    const btnTemplate = html`
    <div>
    <a href="/edit/${context.params.id}" class="btn btn-info">Edit</a>
    <a href="#" @click=${onDeleteItem} class="btn btn-red" id=${context.params.id}>Delete</a>
    </div>`;


    const main = document.querySelector('main');
    render(layoutTemplate(detailedData), main);

    async function onDeleteItem(event){
        event.preventDefault();        
        await deleteFurniture(event.target.id);
        page.redirect('/');
    }
    
}