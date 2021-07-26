import { html, render } from '../node_modules/lit-html/lit-html.js';
import {logout} from        "../api/api.js";
import page from "/node_modules/page/page.mjs";

//render navigation in "header"
export function header() {

    let userId=sessionStorage.getItem('userId');
    let email=sessionStorage.getItem('email');

    const loggedTemplate=html`
    <div class="user">
                <a href="/create">Create Meme</a>
                <div class="profile">
                    <span>Welcome, ${email}</span>
                    <a href="/my-profile">My Profile</a>
                    <a href="javascript:void(0)" id="logoutBtn">Logout</a>
                </div>
    </div>`;

    const guestTemplate=html`
    <div class="guest">
                <div class="/profile">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>
                <a class="active" href="/">Home Page</a>
    </div>`;

    const template = html`    
    <nav>
        <a href="/all-memes">All Memes</a>        
        ${userId
              ? loggedTemplate
              : guestTemplate
              }    
    </nav>`;  
    
    const navTag = document.querySelector('nav');
    render(template, navTag);
    
    //logout
    if (sessionStorage.getItem('userId')) {        
        document.getElementById('logoutBtn').addEventListener('click', async ()=>{        
            await logout();    
            header();   
            page.redirect('/');        
        })
    }
}