import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from "../node_modules/page/page.mjs";

import { register } from '../api/data.js';
import { header } from "./header.js";

export async function registerView() {

    const layoutTemplate = (invalidMail, invalidPass, invalidRePass) => html`
    <section id="register">
        <div class="container">
            <form id="register-form" @submit=${onSubmit}>
                <h1>Register</h1>
                <p>Please fill in this form to create an account.</p>
                <hr>
    
                <p>Username</p>
                <input type="text" placeholder="Enter Username" name="username" required>
    
                <p>Password</p>
                <input type="password" placeholder="Enter Password" name="password" required>
    
                <p>Repeat Password</p>
                <input type="password" placeholder="Repeat Password" name="repeatPass" required>
                <hr>
    
                <input type="submit" class="registerbtn" value="Register">
            </form>
            <div class="signin">
                <p>Already have an account?
                    <a href="/login">Sign in</a>.
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
        const rePass = formData.get('repeatPass').trim();


        if (username == '' || password == '' || rePass == '' || password != rePass) {
            alert('Some field is empty OR passwords dont match');
            return;
        } else {
            await register(username, password);
            header();
            page.redirect('/');
        }


    }

    const main = document.querySelector('main');
    render(layoutTemplate(false, false, false), main);

}