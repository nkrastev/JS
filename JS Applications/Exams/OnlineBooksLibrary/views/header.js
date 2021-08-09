import { html, render } from '../node_modules/lit-html/lit-html.js';
import { logout } from "../api/api.js";
import page from "../node_modules/page/page.mjs";

//render navigation in "header"
export function header() {

    let userId = sessionStorage.getItem('userId');    
    let email = sessionStorage.getItem('email');

    const loggedTemplate = html`
    <div id="user">
        <span>Welcome, ${email}</span>
        <a class="button" href="/mybooks">My Books</a>
        <a class="button" href="/create">Add Book</a>
        <a class="button" href="javascript:void(0)" id="logoutBtn">Logout</a>
    </div>`;

    const guestTemplate = html`
    <div id="guest">
        <a class="button" href="/login">Login</a>
        <a class="button" href="/register">Register</a>
    </div>`;

    const template = html`
    <nav class="navbar">
        <section class="navbar-dashboard">
            <a href="/">Dashboard</a>
            ${userId
          ? loggedTemplate
          : guestTemplate
      }
    
        </section>
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