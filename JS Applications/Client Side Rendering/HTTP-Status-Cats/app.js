import { html, render } from 'https://unpkg.com/lit-html?module';
import { cats } from './catSeeder.js'; //this is the data

const section = document.querySelector('#allCats');

const catCardTemplate=(cat)=> html`
<li>
    <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
    <div class="info">
        <button class="showBtn">Show status code</button>
        <div class="status" style="display: none" id=" ${cat.id}">
            <h4>Status Code: ${cat.statusCode}</h4>
            <p>${cat.statusMessage}</p>
        </div>
    </div>
</li>`;

const catList=html`<ul @click=${toggleInfo}>${cats.map(catCardTemplate)}</ul>`;

render(catList, section);

function toggleInfo(event) {  
    let statusDiv=event.target.parentNode.getElementsByClassName('status')[0];    

    if (statusDiv.style.display=='none') {
        statusDiv.style.display='block';
    }else{
        statusDiv.style.display='none';
    }
}