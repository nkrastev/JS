import page from "/node_modules/page/page.mjs";

import { header } from "./views/header.js";
import { notifications } from "./views/notifications.js";
import { homeView } from "./views/home.js";
import { createView } from "./views/create.js";
import { detailsView } from "./views/details.js";
import { editView } from "./views/edit.js";
import { myDestinationsView } from "./views/destinations.js";

import { registerView } from "./views/register.js";
import { loginView } from "./views/login.js";


//routes and views
page('/', homeView);
page('/register', registerView);
page('/login', loginView);
page('/create', createView);
page('/details/:id', detailsView);
page('/edit/:id', editView);
page('/destinations', myDestinationsView);

page.start();

//navigation
header();

