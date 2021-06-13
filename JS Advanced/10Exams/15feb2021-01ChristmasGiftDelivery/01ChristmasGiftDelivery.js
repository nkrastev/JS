function solution() {
    //adding gift
    const btnAddGift=document.querySelector('div > section:nth-child(1) > div > button');
    btnAddGift.addEventListener('click', onClickAddGift);

    function onClickAddGift(event){
        
        let ulContainer=document.querySelector('div > section:nth-child(2) > ul');
        let liItem=document.createElement('li');
        let dataForInsert=document.querySelector('div > section:nth-child(1) > div > input[type=text]').value;
        
        liItem.textContent=dataForInsert;
        liItem.classList.add('gift');

        //create buttons
        let btnSend=document.createElement('button');
        btnSend.textContent='Send';
        btnSend.id='sendButton';

        let btnDiscard=document.createElement('button');
        btnDiscard.textContent='Discard';
        btnDiscard.id='discardButton';

        //event listener on two buttons
        btnSend.addEventListener('click', onClickSend);
        btnDiscard.addEventListener('click', onClickDiscard);

         //append buttons
        liItem.appendChild(btnSend);
        liItem.appendChild(btnDiscard);
        
        //append LI
        ulContainer.appendChild(liItem);       

        //sort... stackoverflow
        Array.from(ulContainer.getElementsByTagName("li"))
        .sort((a, b) => a.textContent.localeCompare(b.textContent))
        .forEach(li => ulContainer.appendChild(li));

        //clear input
        document.querySelector('div > section:nth-child(1) > div > input[type=text]').value='';
    }

    function onClickSend(event){            
               
        //add data to send section        
        let ulContainer=document.querySelector('div > section:nth-child(3) > ul');
        let liItem=document.createElement('li');
        liItem.textContent=(event.target.parentNode.textContent).replace('SendDiscard','');  
        ulContainer.appendChild(liItem);
        
        //remove gift LI
        event.target.parentNode.remove();
    }
    function onClickDiscard(event){
        
        //add data to discard section        
        let ulContainer=document.querySelector('div > section:nth-child(4) > ul');
        let liItem=document.createElement('li');
        liItem.textContent=(event.target.parentNode.textContent).replace('SendDiscard','');  
        ulContainer.appendChild(liItem);
        
        //remove gift LI
        event.target.parentNode.remove();
    }
}