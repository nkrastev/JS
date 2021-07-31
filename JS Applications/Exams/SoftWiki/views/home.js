import { html, render } from '/node_modules/lit-html/lit-html.js';
import page from "/node_modules/page/page.mjs";

import { getHome} from '../api/data.js';


export async function homeView() {

    const homePosts = await getHome();
     
    const data = {
        js : homePosts.filter(x => x.category === 'JavaScript'),
        python : homePosts.filter(x => x.category === 'Python'),
        csharp : homePosts.filter(x => x.category === 'C#'),
        java : homePosts.filter(x => x.category === 'Java'),
    }

    const record = (item) => html`
        <article>
        <h3>${item.title}</h3>
        <p>${item.content}</p>
        <a href="/details/${item._id}" class="btn details-btn">Details</a>
        </article>`;

    const layoutTemplate =  html`
    <section id="home-page" class="content">
        <h1>Recent Articles</h1>
        <section class="recent js">
            <h2>JavaScript</h2>
            ${
                data.js.length === 0 
                ? html`<h3 class="no-articles">No articles yet</h3>`
                : data.js.map(record)
            }
        </section>
        <section class="recent csharp">
            <h2>C#</h2>
            ${
                data.csharp.length === 0 
                ? html`<h3 class="no-articles">No articles yet</h3>`
                : data.csharp.map(record)
            }
        </section>
        <section class="recent java">
            <h2>Java</h2>
            ${
                data.java.length === 0 
                ? html`<h3 class="no-articles">No articles yet</h3>`
                : data.java.map(record)
            }
        </section>
        <section class="recent python">
            <h2>Python</h2>
            ${
                data.python.length === 0 
                ? html`<h3 class="no-articles">No articles yet</h3>`
                : data.python.map(record)
            }
        </section>
    </section>
    `;


    const main = document.querySelector('main');
    render(layoutTemplate, main);

}