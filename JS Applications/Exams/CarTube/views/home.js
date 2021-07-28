import { html, render } from '/node_modules/lit-html/lit-html.js';
import page from "/node_modules/page/page.mjs";


export async function homeView() {

    const layoutTemplate = html`
    <section id="main">
        <div id="welcome-container">
            <h1>Welcome To Car Tube</h1>
            <img class="hero" src="/images/car-png.webp" alt="carIntro">
            <h2>To see all the listings click the link below:</h2>
            <div>
                <a href="/all-listings" class="button">Listings</a>
            </div>
        </div>
    </section>`;


    const main = document.querySelector('main');
    render(layoutTemplate, main);

}