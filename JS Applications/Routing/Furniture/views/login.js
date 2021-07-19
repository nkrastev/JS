import { html, render } from 'https://unpkg.com/lit-html?module';
import page from "//unpkg.com/page/page.mjs";
import { login } from '../api/data.js';
import {header} from        "./header.js";

export async function loginView() {

    const layoutTemplate = html`
    <div class="container">
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Login User</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit=${onSubmit}>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="email">Email</label>
                        <input class="form-control" id="email" type="text" name="email">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="password">Password</label>
                        <input class="form-control" id="password" type="password" name="password">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Login" />
                </div>
            </div>
        </form>
    </div>
    `;

    async function onSubmit(event){
        event.preventDefault();
        const formData=new FormData(event.target);
        const email=formData.get('email').trim();
        const password=formData.get('password').trim();
       
        await login(email, password);
        header();
        page.redirect('/');
        
    }

    const main = document.querySelector('main');
    render(layoutTemplate, main);

}