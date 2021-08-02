import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from "../node_modules/page/page.mjs";

import { login } from '../api/data.js';
import { header } from "./header.js";

export async function loginView() {

    const layoutTemplate = html`
    <section id="login">
        <form id="login-form" @submit=${onSubmit}>
            <div class="container">
                <h1>Login</h1>
                <label for="email">Email</label>
                <input id="email" placeholder="Enter Email" name="email" type="text">
                <label for="password">Password</label>
                <input id="password" type="password" placeholder="Enter Password" name="password">
                <input type="submit" class="registerbtn button" value="Login">
                <div class="container signin">
                    <p>Dont have an account?<a href="login">Sign up</a>.</p>
                </div>
            </div>
        </form>
    </section>
    `;

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get('email').trim();
        const password = formData.get('password').trim();

        await login(email, password);
        header();        
        page.redirect('/all-memes');

    }

    const main = document.querySelector('main');    
    render(layoutTemplate, main);

}