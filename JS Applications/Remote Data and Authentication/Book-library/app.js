let btnLoadAll=document.querySelector('#loadBooks');
let tableElement=document.querySelector('body > table');
let form=document.querySelector('body > form');

btnLoadAll.addEventListener('click', onClickLoadAll);
form.addEventListener('submit', onFormSubmit);

async function onClickLoadAll(event) {
    event.preventDefault();
    tableElement.innerHTML='';
    try {      
        const url='http://localhost:3030/jsonstore/collections/books';
        const response = await fetch(url);        
        
        if (response.status !== 200 ) {       
            console.log('Invalid GET request');             
        }else{
            data = await response.json();                      
            for (const item of Object.entries(data)) {                            
                let newRow=tableElement.insertRow();
                let cellTitle=newRow.insertCell();
                let cellAuthor=newRow.insertCell();
                let cellButtons=newRow.insertCell();

                let btnEdit=e('button','Edit',null);
                let btnDelete=e('button','Delete',null);
                btnEdit.setAttribute('id', item[0]);
                btnDelete.setAttribute('id', item[0]);
                btnEdit.addEventListener('click', onEdit);
                btnDelete.addEventListener('click', onDelete);
                
                cellTitle.innerHTML=item[1].title;
                cellAuthor.innerHTML=item[1].author;
                cellButtons.appendChild(btnEdit);
                cellButtons.appendChild(btnDelete);
            }
            
        }            
    }
    catch (err) {
        console.log(err);       
    }    
}

async function onFormSubmit(event) {
    event.preventDefault();
    let formData=new FormData(event.target);        

    let response = await fetch('http://localhost:3030/jsonstore/collections/books', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(Object.fromEntries(formData))
        });
    let data=await response.json();
    document.querySelector('body > form > input[type=text]:nth-child(3)').value='';
    document.querySelector('body > form > input[type=text]:nth-child(5)').value='';
    btnLoadAll.click();
}

async function onEdit(event){
    event.preventDefault();
    document.querySelector('body > form > h3').textContent='Edit FORM';
    const idToBeEdited=event.target.id;
    try {                    
        const response = await fetch('http://localhost:3030/jsonstore/collections/books/'+idToBeEdited);
        let data=await response.json();
        document.querySelector('body > form > input[type=text]:nth-child(3)').value=data.title;
        document.querySelector('body > form > input[type=text]:nth-child(5)').value=data.author;
        document.querySelector('body > form > button').textContent='Save';
        //set id to form in order to know which record to update
        document.querySelector('body > form').setAttribute('id', idToBeEdited);
        //remove event listener on the form to prevent submission
        form.removeEventListener('submit', onFormSubmit);
        form.addEventListener('submit', onFormSave);
    }
    catch (err) {
        console.log(err.message);            
    }
}

async function onFormSave(event) {
    event.preventDefault();
    const idToBeEdited=event.target.id;
    //TODO remove ID from the form, change button label, change H3 for the form
    console.log(idToBeEdited);
    try {   
        let dataForPUT={};
        let newTitle=document.querySelector('body > form > input[type=text]:nth-child(3)').value;
        let newAuthor=document.querySelector('body > form > input[type=text]:nth-child(5)').value;

        dataForPUT={title:newTitle, author:newAuthor};
        
        let response = await fetch('http://localhost:3030/jsonstore/collections/books/'+idToBeEdited, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataForPUT)
        });
        //remove ID of form, clear inputs, rename button, change event listeners of form, h3 rename, reload data
        form.removeAttribute('id');
        document.querySelector('body > form > input[type=text]:nth-child(3)').value='';
        document.querySelector('body > form > input[type=text]:nth-child(5)').value='';
        document.querySelector('body > form > button').textContent='Submit';
        document.querySelector('body > form > h3').textContent='FORM';
        form.removeEventListener('submit', onFormSave);
        form.addEventListener('submit', onFormSubmit);        

        btnLoadAll.click();
    }
    catch (err) {
        console.log(err);            
    }
}

async function onDelete(event){
    event.preventDefault();    
        const idToBeDeleted=event.target.id;
        //delete from DOM
        event.target.parentNode.parentNode.remove();
        //delete from Server by the ID        
        try {                    
            const response = await fetch('http://localhost:3030/jsonstore/collections/books/'+idToBeDeleted, {
                    method: 'DELETE'
                });        
            
            if (response.status !== 200 ) {
                console.log('Error DELETE request');                 
            }else{
                console.log('DELETE request successful');                 
            }        
        }
        catch (err) {
            console.log(err.message);            
        }
}

function e(type, content, className){
    const result= document.createElement(type);
    result.textContent=content;
    if (className) {
        result.className=className;
    }
    return result;
}  