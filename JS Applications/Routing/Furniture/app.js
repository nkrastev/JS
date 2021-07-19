import page from "//unpkg.com/page/page.mjs";


import {header} from        "./views/header.js";
import {homeView} from      "./views/home.js";
import {detailsView} from   "./views/details.js";
import {registerView} from  "./views/register.js";
import {loginView} from     "./views/login.js";
import { logout } from "./api/api.js";

//routes and views
page('/', homeView);
page('/details/:id', detailsView);
page('/register', registerView);
page('/login', loginView);

page.start();

//navigation
header();

//logout
document.getElementById('logoutBtn').addEventListener('click', async ()=>{
    await logout();
    header();
    page.redirect('/');
})
