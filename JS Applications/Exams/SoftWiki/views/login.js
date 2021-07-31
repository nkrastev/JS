import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from "../node_modules/page/page.mjs";

import { login } from '../api/data.js';
import { header } from "./header.js";

export async function loginView() {

    const layoutTemplate = html`
    <section id="login-page" class="content auth">
        <h1>Login</h1>
        <form @submit=${onSubmit} id="login" action="#" method="">
            <fieldset>
                <blockquote>
                    Knowledge is like money: to be of value it must circulate, and in circulating it can increase in quantity and, hopefully, in value
                </blockquote>
                <p class="field email">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="sample@email.com" required />
                </p>
                <p class="field password">
                    <label for="login-pass">Password:</label>
                    <input type="password" id="login-pass" name="password" required />
                </p>
                <p class="field submit">
                    <input class="btn submit" type="submit" value="Log in" />
                </p>
                <p class="field">
                    <span>If you don't have profile click <a href="/register">here</a></span>
                </p>
            </fieldset>
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
        page.redirect('/');

    }

    const main = document.querySelector('main');
    render(layoutTemplate, main);

}