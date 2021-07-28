import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from "../node_modules/page/page.mjs";

import { login } from '../api/data.js';
import { header } from "./header.js";

export async function loginView() {

    const layoutTemplate = html`
    <section id="login">
        <div class="container">
            <form id="login-form" action="#" method="post" @submit=${onSubmit}>
                <h1>Login</h1>
                <p>Please enter your credentials.</p>
                <hr>
    
                <p>Username</p>
                <input placeholder="Enter Username" name="username" type="text">
    
                <p>Password</p>
                <input type="password" placeholder="Enter Password" name="password">
                <input type="submit" class="registerbtn" value="Login">
            </form>
            <div class="signin">
                <p>Dont have an account?
                    <a href="/register">Sign up</a>.
                </p>
            </div>
        </div>
    </section>    
    `;

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const username = formData.get('username').trim();
        const password = formData.get('password').trim();

        await login(username, password);
        header();
        page.redirect('/all-listings');

    }

    const main = document.querySelector('main');
    render(layoutTemplate, main);

}