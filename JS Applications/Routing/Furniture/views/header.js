import { html, render } from 'https://unpkg.com/lit-html?module';

//render navigation in "header"
export function header() {

    let userId=sessionStorage.getItem('userId');
    
    const loggedTemplate=html`
    
    <div id="user">
        <a id="createLink" href="/create">Create Furniture</a>
        <a id="profileLink" href="/my-furniture">My Publications</a>
        <a id="logoutBtn" href="javascript:void(0)">Logout</a>
    </div>`;

    const guestTemplate=html`
    <div id="guest">
    <a id="loginLink" href="/login">Login</a>
    <a id="registerLink" href="/register">Register</a>
    </div>`;

    const template = html`
    <h1><a href="/">Furniture Store</a></h1>
    <nav>
        <a id="catalogLink" href="/" class="active">Dashboard</a>
        ${userId
              ? loggedTemplate
              : guestTemplate
              }    
    </nav>`;

    


    const headerTag = document.querySelector('header');
    render(template, headerTag);
}