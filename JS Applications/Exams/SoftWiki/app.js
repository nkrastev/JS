import page from "/node_modules/page/page.mjs";

import {homeView} from           "./views/home.js";
import {header} from             "./views/header.js";
import {createView} from         "./views/create.js";
import {catalogueView} from      "./views/all.js";
import {detailsView} from        "./views/details.js";
import {editView} from           "./views/edit.js";
import {searchView} from           "./views/search.js";

/*
import {allListingsView} from      "./views/all.js";
import {myListingsView} from      "./views/my-listings.js";*/


import {registerView} from  "./views/register.js";
import {loginView} from     "./views/login.js";


//routes and views
page('/', homeView);
page('/register', registerView);
page('/login', loginView);
page('/create', createView);
page('/catalogue', catalogueView);
page('/details/:id', detailsView);
page('/edit/:id', editView);
page('/search', searchView);

/*page('/all-listings', allListingsView);
page('/my-listing', myListingsView);*/

page.start();

//navigation
header();
