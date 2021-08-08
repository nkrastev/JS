import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from "../node_modules/page/page.mjs";

import { register } from '../api/data.js';
import { header } from "./header.js";

export async function registerView() {

    const layoutTemplate = (invalidMail, invalidPass, invalidRePass) => html`
    <section id="register-page" class="content auth">
        <h1>Register</h1>
        <form id="register" action="#" method="" @submit=${onSubmit} >
            <fieldset>
                <blockquote>
                    Knowledge is not simply another commodity. On the contrary. Knowledge is never used up. It increases by diffusion and grows by
                    dispersion.
                </blockquote>
                <p class="field email">
                    <label for="register-email">Email:</label>
                    <input type="email" id="register-email" name="email" placeholder="sample@email.com" required />
                </p>
                <p class="field password">
                    <label for="register-pass">Password:</label>
                    <input type="password" name="password" id="register-pass" required />
                </p>
                <p class="field password">
                    <label for="register-rep-pass">Repeat password:</label>
                    <input type="password" name="rep-pass" id="register-rep-pass" required />
                </p>
                <p class="field submit">
                    <input class="btn submit" type="submit" value="Register" />
                </p>
                <p class="field">
                    <span>If you already have profile click <a href="/login">here</a></span>
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
        const rePass = formData.get('rep-pass').trim();


        if (email == '' || password == '' || rePass == '' || password != rePass) {
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