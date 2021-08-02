import page from "/node_modules/page/page.mjs";

import {header} from            "./views/header.js";
import {homeView} from         "./views/home.js";
import {allMemesView} from      "./views/all.js";
import {detailsView} from      "./views/details.js";
import {createView} from      "./views/create.js";
import {editView} from      "./views/edit.js";
import {myProfileView} from      "./views/my-profile.js";


import {registerView} from  "./views/register.js";
import {loginView} from     "./views/login.js";


//routes and views
page('/', homeView);
page('/register', registerView);
page('/login', loginView);
page('/all-memes', allMemesView);
page('/details/:id', detailsView);
page('/edit/:id', editView);
page('/create', createView);
page('/my-profile', myProfileView);

page.start();

//navigation
header();




