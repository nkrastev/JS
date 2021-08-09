import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from "../node_modules/page/page.mjs";

import { register } from '../api/data.js';
import { header } from "./header.js";

export async function registerView() {

    const layoutTemplate = (invalidMail, invalidPass, invalidRePass) => html`
    <section id="register-page" class="register">
        <form id="register-form" action="" method="" @submit=${onSubmit}>
            <fieldset>
                <legend>Register Form</legend>
                <p class="field">
                    <label for="email">Email</label>
                    <span class="input">
                        <input type="text" name="email" id="email" placeholder="Email">
                    </span>
                </p>
                <p class="field">
                    <label for="password">Password</label>
                    <span class="input">
                        <input type="password" name="password" id="password" placeholder="Password">
                    </span>
                </p>
                <p class="field">
                    <label for="repeat-pass">Repeat Password</label>
                    <span class="input">
                        <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password">
                    </span>
                </p>
                <input class="button submit" type="submit" value="Register">
            </fieldset>
        </form>
    </section>
    `;

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        const email = formData.get('email').trim();
        const password = formData.get('password').trim();
        const repeatPassword = formData.get('confirm-pass').trim();


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