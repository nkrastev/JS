import { html, render } from '../node_modules/lit-html/lit-html.js';
import { logout } from "../api/api.js";
import page from "../node_modules/page/page.mjs";

//render navigation in "header"
export function header() {

    let userId = sessionStorage.getItem('userId');

    const loggedTemplate = html`
        <div id="user">
            <a href="/create">Create</a>
            <a id="logoutBtn" href="javascript:void(0)">Logout</a>
        </div>`;

    const guestTemplate = html`
        <div id="guest">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
        </div>`;

    const template = html`    
        <h1><a class="home" href="/">SoftWiki</a></h1>
            <nav class="nav-buttons">
                <a href="/catalogue">Catalogue</a>
                <a href="/search">Search</a>
        ${userId
                ? loggedTemplate
                : guestTemplate
                }    
        </nav>    
    `;

    const headerTag = document.querySelector('header');
    render(template, headerTag);

    //logout
    if (sessionStorage.getItem('userId')) {
        document.getElementById('logoutBtn').addEventListener('click', async () => {
            await logout();
            header();
            page.redirect('/');
        })
    }
}