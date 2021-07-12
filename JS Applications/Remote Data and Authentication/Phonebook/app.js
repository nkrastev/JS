function attachEvents() {
    const btnLoad=document.querySelector('#btnLoad');
    const btnCreate=document.querySelector('#btnCreate');
    let ulElement=document.querySelector('#phonebook');

    btnLoad.addEventListener('click', onLoad);
    btnCreate.addEventListener('click', onCreate);

    async function onLoad(event){
        event.preventDefault();
        ulElement.innerHTML='';
        try {                    
            const response = await fetch('http://localhost:3030/jsonstore/phonebook');   
            
            if (response.status !== 200 ) {
                console.log('Load Button Error GET request');                 
            }else{
                console.log('Load Button GET request successful'); 
                let data=await response.json();
                console.log(data);

                for (const item of Object.values(data)) { 
                    console.log(item.person+item.phone);
                    let btnDelete=e('button','Delete',null);
                    btnDelete.setAttribute('id', item._id);
                    btnDelete.addEventListener('click', onDeleteRecord);
                    let liElement=e('li',item.person+': '+item.phone, null);
                    liElement.setAttribute('id',item._id);
                    liElement.appendChild(btnDelete);
                    ulElement.appendChild(liElement);                    
                }
            }        
        }
        catch (err) {
            console.log(err.message);            
        }
    }

    async function onDeleteRecord(event) {
        event.preventDefault();
        const idToBeDeleted=event.target.id;
        //delete from DOM
        event.target.parentNode.remove();
        //delete from Server by the ID
        console.log(idToBeDeleted)
        try {                    
            const response = await fetch('http://localhost:3030/jsonstore/phonebook/'+idToBeDeleted, {
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

    async function onCreate(event) {
        event.preventDefault();
        let personData=document.querySelector('#person');
        let phoneData=document.querySelector('#phone');

        if (personData.value=='' || phoneData.value=='') {
            return;
        }

        const data={person:personData.value, phone:phoneData.value};

        try {                    
            const response = await fetch('http://localhost:3030/jsonstore/phonebook', {
                    method: 'post',
                    headers: { 'Content-type': 'application/json' },
                    body: JSON.stringify(data),
                });        
            
            if (response.status !== 200 ) {
                console.log('Error POST request');                 
            }else{
                console.log('POST request successful');                
            }        
        }
        catch (err) {
            console.log(err.message);            
        }

        personData.value='';
        phoneData.value='';
        btnLoad.click();
    }

    function e(type, content, className){
        const result= document.createElement(type);
        result.textContent=content;
        if (className) {
            result.className=className;
        }
        return result;
    }  
}

attachEvents();