import { html, render } from '../node_modules/lit-html/lit-html.js';
import { logout } from "../api/api.js";
import page from "../node_modules/page/page.mjs";

//render navigation in "header"
export function header() {

    let userId = sessionStorage.getItem('userId');
    let username=sessionStorage.getItem('username');

    

    const loggedTemplate = html`
    <div id="profile">
        <a>Welcome ${username}</a>
        <a href="/my-listing">My Listings</a>
        <a href="/create">Create Listing</a>
        <a href="javascript:void(0)" id="logoutBtn">Logout</a>
    </div>`;

    const guestTemplate = html`
    <div id="guest">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
    </div>`;

    const template = html`    
    <nav>
        <a class="active" href="/">Home</a>
        <a href="/all-listings">All Listings</a>
        <a href="/by-year">By Year</a>
        ${userId
      ? loggedTemplate
      : guestTemplate
  }
    </nav>`;

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