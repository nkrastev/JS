function solve() {
    const btnAddBook=document.querySelector('body > form > button');    
    btnAddBook.addEventListener('click', onAddBook);

    let profitContainer=document.querySelector('body > h1:nth-child(3)').textContent;
    let profitValue=profitContainer.slice(0, -4);
    profitValue=Number(profitValue.slice(20));    

    function onAddBook(event){
        event.preventDefault();//prevent page from reloading
        let title=document.querySelector('body > form > input[type=text]:nth-child(2)').value;
        let year=Number(document.querySelector('body > form > input[type=number]:nth-child(4)').value);
        let price=Number(document.querySelector('body > form > input[type=number]:nth-child(6)').value);

        if (year>0 && price>0 && title!='') {            
            if (year>=2000) {
                //create and add new book
                addingNewBook(title, year, price);
            }else{
                //create and add old book
                addingOldBook(title, year, price);
            }
        }
    }
    
    function onBuyNewbook(event){
        let currentPrice=event.target.textContent.slice(0, -4);                        
        profitValue+=Number(currentPrice.slice(16));
        document.querySelector('body > h1:nth-child(3)').textContent=`Total Store Profit: ${profitValue.toFixed(2)} BGN`;
        event.target.parentNode.remove();
    }

    function onMoveToOld(event){        
        let pElement=event.target.parentNode.querySelector('p');
        let forMovement=e('div', null, 'book');
        //getting price of the new book to transfer it to the old section
        let eventBtnWithTextPrice=event.target.parentNode.querySelector('button').textContent.slice(0, -4);        
        let price=Number(eventBtnWithTextPrice.slice(16));
        let discountedPrice=price-price*15/100;

        let btnBuy=e('button',`Buy it only for ${discountedPrice.toFixed(2)} BGN`);
        btnBuy.addEventListener('click', onBuyNewbook);
        
        forMovement.appendChild(pElement);
        forMovement.appendChild(btnBuy);
        document.querySelector('#outputs > section:nth-child(1) > div').appendChild(forMovement);
        event.target.parentNode.remove();
    }

    

    //TODO put everything in a single function
    function addingNewBook(title, year, price){        
        let divElement=e('div', null, 'book');
        let pElement=e('p',`${title} [${year}]`,null);
        let btnBuy=e('button',`Buy it only for ${price.toFixed(2)} BGN`);
        btnBuy.addEventListener('click', onBuyNewbook);
        let btnMoveToOld=e('button','Move to old section',null);
        btnMoveToOld.addEventListener('click', onMoveToOld);

        divElement.appendChild(pElement);
        divElement.appendChild(btnBuy);
        divElement.appendChild(btnMoveToOld);
        document.querySelector('#outputs > section:nth-child(2) > div').appendChild(divElement);
    }
    function addingOldBook(title, year, price){        
        let divElement=e('div', null, 'book');
        let pElement=e('p',`${title} [${year}]`,null);
        let discountedPrice=price-price*15/100;
        let btnBuy=e('button',`Buy it only for ${discountedPrice.toFixed(2)} BGN`);
        btnBuy.addEventListener('click', onBuyNewbook);
        
        divElement.appendChild(pElement);
        divElement.appendChild(btnBuy);        
        document.querySelector('#outputs > section:nth-child(1) > div').appendChild(divElement);
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

