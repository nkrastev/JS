import page from "//unpkg.com/page/page.mjs";


import {header} from        "./views/header.js";
import {homeView} from      "./views/home.js";
import {detailsView} from   "./views/details.js";
import {registerView} from  "./views/register.js";
import {loginView} from     "./views/login.js";
import {createView} from    "./views/create.js";
import {editView} from      "./views/edit.js";
import {myFurnitureView} from      "./views/my-furniture.js";

import {logout} from      "./api/api.js";

//routes and views
page('/', homeView);
page('/details/:id', detailsView);
page('/register', registerView);
page('/login', loginView);
page('/create', createView);
page('/edit/:id', editView);
page('/my-furniture', myFurnitureView);

page.start();

//navigation
header();

//logout
if (sessionStorage.getItem('userId')) {
    document.getElementById('logoutBtn').addEventListener('click', async ()=>{
        await logout();
        header();
        page.redirect('/');
    })
}

