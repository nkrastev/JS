import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from "../node_modules/page/page.mjs";

import { getUserMemes } from '../api/data.js';
import { header } from "./header.js";

export async function myProfileView() {

    const userId = sessionStorage.getItem('userId');
    const userGender = sessionStorage.getItem('gender');
    const userUsername = sessionStorage.getItem('username');
    const userEmail = sessionStorage.getItem('email');


    if (!userId) {
        //user is not logged in check
        alert('You have to be logged in order to access this page.');
        page.redirect('/');
    }

    const userMemes = await getUserMemes(userId);
    const userMemesCount = userMemes.length;

    const userItem = { userId, userGender, userUsername, userEmail, userMemesCount };


    const templateNoMemes = html`<p class="no-memes">No memes in database.</p>`;
    const templateUserMemesItems = item => html`
    <div class="user-meme">
        <p class="user-meme-title">${item.title}</p>
        <img class="userProfileImage" alt="meme-img" src="${item.imageUrl}">
        <a class="button" href="./details/${item._id}">Details</a>
    </div>
    `;


    const layoutTemplate = (user,memes) => html`
    <section id="user-profile-page" class="user-profile">
        <article class="user-info">
            <img id="user-avatar-url" alt="user-profile" src="/images/female.png">
            <div class="user-content">
                <p>Username: ${user.userUsername}</p>
                <p>Email: ${user.userEmail}</p>
                <p>My memes count: ${user.userMemesCount}</p>
            </div>
        </article>
        <h1 id="user-listings-title">User Memes</h1>
        <div class="user-meme-listings">
                ${memes.length>0
                    ? memes.map(templateUserMemesItems)
                    : templateNoMemes
                    }
        </div>
    </section>`;


    const main = document.querySelector('main');

    console.log(userMemes);
    render(layoutTemplate(userItem,userMemes), main);
}
