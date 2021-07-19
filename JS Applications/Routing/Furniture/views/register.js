import { html, render } from 'https://unpkg.com/lit-html?module';
import page from "//unpkg.com/page/page.mjs";
import { register } from '../api/data.js';
import { header } from "./header.js";

export async function registerView() {

    const layoutTemplate = (invalidMail, invalidPass, invalidRePass) => html`
    <div class="container">
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Register New User</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit=${onSubmit}>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="email">Email</label>
                        <input class=${'form-control' + (invalidMail ? ' is-invalid' : '' )} id="email" type="text"
                            name="email">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="password">Password</label>
                        <input class=${'form-control' + (invalidPass ? ' is-invalid' : '' )} id="password" type="password"
                            name="password">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="rePass">Repeat</label>
                        <input class=${'form-control' + (invalidRePass ? ' is-invalid' : '' )} id="rePass" type="password"
                            name="rePass">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Register" />
                </div>
            </div>
        </form>
    </div>
    `;

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get('email').trim();
        const password = formData.get('password').trim();
        const rePass = formData.get('rePass').trim();

        let invalidMail = false;
        let invalidPass = false;
        let invalidRePass = false;

        if (email == '') {
            console.log('empty mail');
            invalidMail = true;
        }

        if (password == '') {
            console.log('empty pass');
            invalidPass = true;
        }
        if (rePass == '') {
            console.log('empty re pass');
            invalidRePass = true;
        }
        if (password != rePass) {
            return alert('Passwords do not match!!!');
        }

        if (invalidMail || invalidPass || invalidRePass) {
            render(layoutTemplate(invalidMail, invalidPass, invalidRePass), main);
        } else {
            await register(email, password);
            header();
            page.redirect('/');
        }


    }

    const main = document.querySelector('main');
    render(layoutTemplate(false, false, false), main);

}