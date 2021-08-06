import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from "../node_modules/page/page.mjs";

import { login } from '../api/data.js';
import { header } from "./header.js";

export async function loginView() {

    const layoutTemplate = html`
    <section id="form-login">
        <form class="text-center border border-light p-5" action="" method="" @submit=${onSubmit}>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" placeholder="Email" name="email" value="">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" placeholder="Password" name="password" value="">
            </div>
    
            <button type="submit" class="btn btn-primary">Login</button>
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