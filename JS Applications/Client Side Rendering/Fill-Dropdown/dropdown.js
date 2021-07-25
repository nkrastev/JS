import { html, render } from 'https://unpkg.com/lit-html?module';
import { getData,addItemOption } from './api/data.js';

//get data
const dbData= Object.values(await getData());

const template = (data) => html`
<h1>Dropdown Menu</h1>
<article>
    <div>
        <select id="menu">
            ${data.map(t=>html`<option value=${t._id}>${t.text}</option>`)}
        </select>
    </div>
    <form>
        <label for="itemText">
            Text:
        </label>
        <input type="text" id="itemText"/>
        <input @click=${addItem} type="submit" value="Add">
    </form>
</article>
`;

const main=document.body;
const resultForRender=template(dbData);
render(resultForRender, main);

async function addItem(event) {
    //event.preventDefault();    
    let newRecord=document.querySelector('#itemText');
    if (newRecord.value=='') {
        return;
    }
    //input is valid, add it to db and rerender template
    const bodyQuery = {
        text: newRecord.value       
    };

    try {
        const result = await addItemOption(bodyQuery);        
    } catch (err) {
        alert(err.message);
    }
}