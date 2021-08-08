import { html, render } from '/node_modules/lit-html/lit-html.js';
import page from "/node_modules/page/page.mjs";
import { getAllMovies } from "../api/data.js";

export async function homeView() {

    const moviesData=await getAllMovies();
    console.log(moviesData);

    const templateMovies = item => html`
    <div class="card mb-4">
        <img class="card-img-top" src="${item.img}" alt="Card image cap" width="400">
        <div class="card-body">
            <h4 class="card-title">${item.title}</h4>
        </div>
        <div class="card-footer">
            <a href="/details/${item._id}">
                <button type="button" class="btn btn-info">Details</button>
            </a>
        </div>
    </div>
    `;

    const layoutTemplate = data => html`        
    <h1 class="text-center">Movies, Home view</h1>
    <section id="add-movie-button">
        <a href="/create" class="btn btn-warning ">Add Movie</a>
    </section>
    <section id="movie">
        <div class=" mt-3 ">
            <div class="row d-flex d-wrap">
                <div class="card-deck d-flex justify-content-center">
                    ${data.map(templateMovies)}
                </div>
            </div>
        </div>
    </section>`;


    const main = document.querySelector('main');
    render(layoutTemplate(moviesData), main);

}