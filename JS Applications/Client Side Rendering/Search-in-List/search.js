//load data
import {html, render} from 'https://unpkg.com/lit-html?module';
import {towns} from './towns.js';

const townsList=document.querySelector('#towns');

const searchTemplate=(towns, match)=>html`
<article>
        <div id="towns">
            <ul>
                ${towns.map(t=> itemForTemplate(t, match))}
            </ul>
        </div>
        <input type="text" id="searchText" .value=${match}>
        <button @click=${search}>Search</button>
        <div id="result">${counter(towns, match)}</div>
    </article>
`;

const itemForTemplate=(town, match)=>html`
<li class=${match && town.toLowerCase().includes(match.toLowerCase()) ? 'active' : ''}>${town}</li>
`;

const main=document.body;
update();

function update(match=''){
    const resultForRender= searchTemplate(towns, match);
    render(resultForRender, main);
}


function search(event){
    const match=event.target.parentNode.querySelector('input').value;
    update(match);
}

function counter(towns, match){
    const count=towns.filter(t=>match && t.toLowerCase().includes(match.toLowerCase())).length;
    if (count) {
        return `${count} matches found`
    }else{
        return '';
    }
}
