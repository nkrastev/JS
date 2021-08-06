import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from "../node_modules/page/page.mjs";

import { register } from '../api/data.js';
import { header } from "./header.js";

export async function registerView() {

    const layoutTemplate = (invalidMail, invalidPass, invalidRePass) => html`
    <section id="form-sign-up">
    <form class="text-center border border-light p-5" action="#" method="post" @submit=${onSubmit}>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" placeholder="Email" name="email" value="">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" placeholder="Password" name="password" value="">
        </div>

        <div class="form-group">
            <label for="repeatPassword">Repeat Password</label>
            <input type="password" class="form-control" placeholder="Repeat-Password" name="repeatPassword" value="">
        </div>

        <button type="submit" class="btn btn-primary">Register</button>
    </form>
    </section>        
    `;

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        const email = formData.get('email').trim();        
        const password = formData.get('password').trim();
        const repeatPassword = formData.get('repeatPassword').trim();


        if (email == '' || password == '' || repeatPassword == '' || password != repeatPassword) {
            alert('Some field is empty OR passwords dont match');
            return;
        } else {
            await register(email, password);
            header();
            page.redirect('/');
        }
    }

    const main = document.querySelector('main');
    render(layoutTemplate(false, false, false), main);

}