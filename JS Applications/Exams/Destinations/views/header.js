import { html, render } from '../node_modules/lit-html/lit-html.js';
import { logout } from "../api/api.js";
import page from "../node_modules/page/page.mjs";

//render navigation in "header"
export function header() {

    let userId = sessionStorage.getItem('userId');
    let email = sessionStorage.getItem('email');

    const loggedTemplate = html`
    <div class="left-container">
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/destinations">Destinations</a></li>
            <li><a href="/create">Add +</a></li>
    
        </ul>
    </div>
    <div class="right-container">
        <span>Welcome, ${email} |</span>
        <a href="javascript:void(0)" id="logoutBtn" class="log-out">Logout</a>
    </div>`;

    const guestTemplate = html`
    <div class="left-container">
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Register</a></li>
        </ul>
    </div>
    `;

    const template = html`        
        ${userId
              ? loggedTemplate
              : guestTemplate
              }
    `;

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