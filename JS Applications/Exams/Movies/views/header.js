import { html, render } from '../node_modules/lit-html/lit-html.js';
import { logout } from "../api/api.js";
import page from "../node_modules/page/page.mjs";

//render navigation in "header"
export function header() {

    let userId = sessionStorage.getItem('userId');
    let username = sessionStorage.getItem('username');
    let email = sessionStorage.getItem('email');

    const loggedTemplate = html`
    <li class="nav-item">
        <a class="nav-link">Welcome, ${email}</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="javascript:void(0)" id="logoutBtn">Logout</a>
    </li>`;

    const guestTemplate = html`
    <li class="nav-item">
        <a class="nav-link" href="/login">Login</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="/register">Register</a>
    </li>`;

    const template = html`    
    <a class="navbar-brand text-light" href="/">Movies</a>
    <ul class="navbar-nav ml-auto ">
        ${userId
              ? loggedTemplate
              : guestTemplate
              }    
    </ul>`;

    const headerTag = document.querySelector('nav');
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