function solve() {
    
    
    const btnOnScreen=document.querySelector('#container > button');
    const btnClear=document.querySelector('#archive > button');
    
    btnOnScreen.addEventListener('click',onClickOnScreen);
    btnClear.addEventListener('click', onClickClear);
    

    function onClickOnScreen(event){
        
        event.preventDefault();//prevent page from reloading
        let name=document.querySelector("#container > input[type=text]:nth-child(1)").value;
        let hall=document.querySelector("#container > input[type=text]:nth-child(2)").value;
        let price=document.querySelector("#container > input[type=text]:nth-child(3)").value;        

        if (name!='' && hall!='' && !isNaN(price) && price!='') {
            
            price=Number(price).toFixed(2);

            const liElement=document.createElement('li');
            const spanElement=document.createElement('span');
            spanElement.textContent=name;
            
            const strongHallElement=document.createElement('strong');
            strongHallElement.textContent='Hall: '+hall;
            
            const divElement=document.createElement('div');

            const strongPriceElement=document.createElement('strong');
            strongPriceElement.textContent=price;
                        
            const inputElement=document.createElement('input');         

            const buttonElement=document.createElement('button');
            buttonElement.textContent='Archive';            

            inputElement.placeholder='Tickets Sold';
            buttonElement.addEventListener('click', onClickArchive);

            divElement.appendChild(strongPriceElement);
            divElement.appendChild(inputElement);
            divElement.appendChild(buttonElement);

            liElement.appendChild(spanElement);
            liElement.appendChild(strongHallElement);
            liElement.appendChild(divElement);

            let ulTarget=document.querySelector('#movies > ul');
            ulTarget.appendChild(liElement);

            //clear inputs
            document.querySelector('#container > input[type=text]:nth-child(1)').value='';
            document.querySelector('#container > input[type=text]:nth-child(2)').value='';
            document.querySelector('#container > input[type=text]:nth-child(3)').value='';
        }    
    }

    function onClickArchive(event){
        event.preventDefault();//prevent page from reloading
        const mainLi=event.target.parentNode.parentNode;        
        const inputTicketsSold=mainLi.getElementsByTagName('input')[0].value;        
        if (!isNaN(inputTicketsSold) && inputTicketsSold!='') {
            const movieName=mainLi.querySelector('span').textContent;
            const pricePerTicket=mainLi.querySelector('div > strong').textContent;
            console.log(movieName);
            console.log(pricePerTicket);

            const archiveLi=e('li');
            const archiveSpan=e('span',movieName);            
            const archiveStrong=e('strong',`Total amount: ${Number(inputTicketsSold*pricePerTicket).toFixed(2)}`);            
            const archiveButton=e('button','Delete');
            archiveButton.addEventListener('click',onClickDelete);

            archiveLi.appendChild(archiveSpan);
            archiveLi.appendChild(archiveStrong);
            archiveLi.appendChild(archiveButton);

            const archiveUl=document.querySelector('#archive > ul');
            archiveUl.appendChild(archiveLi);

            //remove screen li
            mainLi.remove();
        }

    }

    function onClickDelete(event){
        event.preventDefault();//prevent page from reloading
        event.target.parentNode.remove();
    }

    function onClickClear(event){
        event.preventDefault();//prevent page from reloading
        let ulElement=document.querySelector('#archive > ul');
        ulElement.innerHTML='';
    }


    //factory function, create DOM element
    function e(type, content, className){
        const result= document.createElement(type);
        result.textContent=content;
        if (className) {
            result.className=className;
        }
        return result;
    }
}