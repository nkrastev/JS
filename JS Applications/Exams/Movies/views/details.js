import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from "../node_modules/page/page.mjs";

import { getMovieById } from '../api/data.js';
import { deleteMovie  } from '../api/data.js';
import { header } from "./header.js";

export async function detailsView(context) {

    const detailedData = await getMovieById(context.params.id);
    const userId = sessionStorage.getItem('userId');
    let likes=sessionStorage.getItem('likes'+context.params.id);
    if (!likes) {
        sessionStorage.setItem('likes'+context.params.id, 0);
    }


    let currentUserIsOwner;
    
    
    if (detailedData._ownerId == userId) {
        currentUserIsOwner = true;
    } else {
        currentUserIsOwner = false;
    }
    console.log('Is it owner? ' + currentUserIsOwner);
    console.log(detailedData);

    

    const layoutTemplate = (item, numberOfLikes) => html`
        <section id="movie-example">
        <div class="container">
            <div class="row bg-light text-dark">
                <h1>Movie title: ${item.title}</h1>

                <div class="col-md-8">
                    <img class="img-thumbnail" src="${item.img}" alt="${item.title}">
                </div>
                <div class="col-md-4 text-center">
                    <h3 class="my-3 ">Movie Description</h3>
                    <p>${item.description}</p>
                    <a class="btn btn-danger" href="#" @click=${onClickDelete} id=${context.params.id}>Delete</a>
                    <a class="btn btn-warning" href="/edit/${context.params.id}" id=${context.params.id}>Edit</a>
                    <a class="btn btn-primary" href="#" @click=${onClickLike} id=${context.params.id}>Like</a>
                    <span >Likes ( ${numberOfLikes} )</span>
                </div>
            </div>
        </div>
        </section>           
        `;
       
    function onClickLike(event)   {
        event.preventDefault();
        const id=event.target.id;
        console.log('Like clicked');
        console.log('Current Likes: '+Number(sessionStorage.getItem('likes'+id)));
        let currentLikes=Number(sessionStorage.getItem('likes'+id));
        sessionStorage.setItem('likes'+id,currentLikes+1);
        render(layoutTemplate(detailedData, sessionStorage.getItem('likes'+id)), main);        
    }
       
    async function onClickDelete(event){
        event.preventDefault();  
        console.log(event.target.id)
        const confirmed = confirm('Are you sure?');
        if(confirmed){
            await deleteMovie(event.target.id);
            page.redirect('/');
        }else{
            return
        }                
        
    }

    const main = document.querySelector('main');
    render(layoutTemplate(detailedData, likes), main);

}