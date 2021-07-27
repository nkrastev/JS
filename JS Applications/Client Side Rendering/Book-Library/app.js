import { html, render } from 'https://unpkg.com/lit-html?module';
import { getData, addBook, deleteBookById, getSingleBookById, editBook } from './api/data.js';

let main = document.querySelector('body');

//get data
//const booksData = Object.entries(await getData());

let tmplRow = item => html`<tr>    
    <td>${item[1].title}</td>
    <td>${item[1].author}</td>
    
    <td data-id="${item[0]}">
        <button class="editBtn">Edit</button>
        <button class="deleteBtn">Delete</button>
    </td>
</tr>`;

const tmplTable = booksData => html`
<table>
    <thead>
        <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody @click=${onClickButton}>
        ${booksData.map(tmplRow)}
    </tbody>
</table>`;

const tmplCreateForm = () => html`<form id="add-form" @submit=${addNewBook}>
    <h3>Add book</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title...">
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author...">
    <input type="submit" value="Submit">
</form>`;

const tmplEditForm = book => html`<form id="edit-form" @submit=${saveEditedBook}>
    <input type="hidden" name="id">
    <h3>Edit book</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title..." .value=${book.title}>
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author..." .value=${book.author}>
    <input type="submit" value="Save" id=${book._id}>
</form>`;

const layoutTemplate = (list, bookToEdit) => html`
    <button id="loadBooks" @click=${onClickLoadData}>LOAD ALL BOOKS</button>
    ${tmplTable(list)}
    ${bookToEdit ? tmplEditForm(bookToEdit) : tmplCreateForm()}`;

render(layoutTemplate([]), main);


async function onClickButton(event) {
    if (event.target.classList.contains('editBtn')) {
        //edit button functionallity
        const id = event.target.parentNode.dataset.id;
        console.log('edit ' + id);
        const fullList=Object.entries(await getData());
        //get data for the single book and pass it to template
        const targetBook=await getSingleBookById(id);
        render(layoutTemplate(fullList,targetBook), main);
        
    } else if (event.target.classList.contains('deleteBtn')) {
        //delete button functionallity
        const id = event.target.parentNode.dataset.id;        
        if (window.confirm("Delete Book with Id "+id)) {
            await deleteBookById(id);    
        }
        update();        
    }
}


//adding new book to DB
async function addNewBook(event){
    event.preventDefault();
    let title=document.querySelector('#add-form > input[type=text]:nth-child(3)');
    let author=document.querySelector('#add-form > input[type=text]:nth-child(5)');
    if (title.value=='' || author.value=='') {
        return;
    }   
    await addBook({"author":author.value, "title":title.value});    
    title.value='';
    author.value='';
    update();
}
//edit existing book
async function saveEditedBook(event){
    event.preventDefault();    
    let newTitle=document.querySelector('#edit-form > input[type=text]:nth-child(4)');
    let newAuthor=document.querySelector('#edit-form > input[type=text]:nth-child(6)');
    let id=document.querySelector('#edit-form > input[type=submit]:nth-child(7)').id;
    const newBookData=({"author":newAuthor.value, "title":newTitle.value});    
    await editBook(id, newBookData);
    update();
}

//common functions
async function update() {
    const newData=Object.entries(await getData());        
    render(layoutTemplate(newData),main);    
}

function onClickLoadData() {
    update();
}