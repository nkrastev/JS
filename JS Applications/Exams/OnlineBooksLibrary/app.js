import page from "/node_modules/page/page.mjs";

import { header } from "./views/header.js";
import { homeView } from "./views/home.js";

import { loginView } from "./views/login.js";
import { registerView } from "./views/register.js";
import { createView } from "./views/create.js";
import { detailsView } from "./views/details.js";
import {editView} from      "./views/edit.js";
import {myBooksView} from      "./views/mybooks.js";



//routes and views
page('/', homeView);
page('/register', registerView);
page('/login', loginView);
page('/create', createView);
page('/details/:id', detailsView);
page('/edit/:id', editView);
page('/mybooks', myBooksView);


page.start();

//navigation
header();