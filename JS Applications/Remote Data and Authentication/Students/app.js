let fromCreate=document.querySelector('#form');
fromCreate.addEventListener('submit', onSubmitForm);

function loadData(){
    let xhttp= new XMLHttpRequest;
    let data={};
    let tableElement=document.querySelector('#results');
    tableElement.innerHTML='';
    
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState === 4) {            
            data=JSON.parse(xhttp.response);            
            //console.log(data);
            for (const item of Object.values(data)) {                
                let newRow=tableElement.insertRow();
                let cellFirstName=newRow.insertCell();
                let cellLastName=newRow.insertCell();
                let cellNumber=newRow.insertCell();
                let cellGrade=newRow.insertCell();
                cellFirstName.innerHTML=item.firstName;
                cellLastName.innerHTML=item.lastName;
                cellNumber.innerHTML=item.facultyNumber;
                cellGrade.innerHTML=item.grade;
            }
        }
    }    
    xhttp.open('GET', 'http://localhost:3030/jsonstore/collections/students', true);
    xhttp.send('');
}

async function onSubmitForm(event){
    event.preventDefault();
    let formData=new FormData(event.target);
    
    // Validate FormData Entries pair[0] key, pair[1] value
    for(let pair of formData.entries()) {        
        if (pair[1]=='') {
            return;
        }
    }

    let response = await fetch('http://localhost:3030/jsonstore/collections/students', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(Object.fromEntries(formData))
        });
    let data=await response.json();
    loadData();
}

loadData();