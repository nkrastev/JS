function solve() {
    let btnAdd=document.querySelector('#container > button');
    btnAdd.addEventListener('click', onClickAddPet);

    function onClickAddPet(event){
        event.preventDefault();//prevent page from reloading

        let name=document.querySelector('#container > input[type=text]:nth-child(1)').value;
        let age=Number(document.querySelector('#container > input[type=text]:nth-child(2)').value);        
        let kind=document.querySelector('#container > input[type=text]:nth-child(3)').value;
        let currentOwner=document.querySelector('#container > input[type=text]:nth-child(4)').value;
        
        if (name!='' && kind!='' && currentOwner!='' && !isNaN(age)) {
            //valid data
            
            //can be done with simple HTML but...                                  
            
            let getSection = document.getElementById('adoption');
            let getList = getSection.getElementsByTagName('ul')[0];
            

            let pElement=document.createElement('p');             
            let createFirstStrong = document.createElement('strong');
            let createListItem = document.createElement('li');

            createFirstStrong.textContent = name;
            pElement.appendChild(createFirstStrong);
    
            pElement.innerHTML += ' is a ';
    
            let createSecondStrong = document.createElement('strong');
            createSecondStrong.textContent = age;
            pElement.appendChild(createSecondStrong);
    
            pElement.innerHTML += ' year old ';
    
    
            let createThirdStrong = document.createElement('strong');
            createThirdStrong.textContent = kind;
            pElement.appendChild(createThirdStrong);
    
            createListItem.appendChild(pElement);
    
            getList.appendChild(createListItem);
            createListItem.appendChild(pElement);
    
            let createSpan = document.createElement('span');
            createSpan.textContent = `Owner: ${currentOwner}`
            createListItem.appendChild(createSpan);
    
    
            let createButton = document.createElement('button');
            createButton.textContent = 'Contact with owner';
            createListItem.appendChild(createButton);
            createButton.addEventListener('click', onClickContact);
            
            
            //clear inputs
            document.querySelector('#container > input[type=text]:nth-child(1)').value='';
            document.querySelector('#container > input[type=text]:nth-child(2)').value='';
            document.querySelector('#container > input[type=text]:nth-child(3)').value='';
            document.querySelector('#container > input[type=text]:nth-child(4)').value='';
        }

    }

    function onClickContact(event){        
        //get parent li to add the div with new button and input
        let li=event.target.parentNode;
        
        let div=document.createElement('div');
        let input=document.createElement('input');
        let btnTakeIt=document.createElement('button');

        input.placeholder='Enter your names';
        btnTakeIt.innerText='Yes! I take it!';
        btnTakeIt.addEventListener('click', onClickTakeIt);
        
        div.appendChild(input);
        div.appendChild(btnTakeIt);
        li.appendChild(div);

        //remove contact button
        event.target.remove();
    }

    function onClickTakeIt(event){
        
        let newOwnerName=event.target.parentNode.querySelector('div > input').value;
        if (newOwnerName!='') {
            let li=event.target.parentNode.parentNode;
            let p=li.getElementsByTagName('p')[0];
            let span=document.createElement('span');
            let btnCheck=document.createElement('button');            

            //set values
            span.innerText=`New Owner: ${newOwnerName}`;
            btnCheck.innerText='Checked';
            btnCheck.addEventListener('click', onClickChecked);
            
            //append items
            let newLi=document.createElement('li');
            newLi.appendChild(p);
            newLi.appendChild(span);
            newLi.appendChild(btnCheck);
            
            //append li to new UL
            let ul=document.querySelector('#adopted > ul');
            ul.appendChild(newLi);

            //remove old Li
            li.remove();
        }        
    }

    function onClickChecked(event){
        event.target.parentNode.remove();
    }
}

