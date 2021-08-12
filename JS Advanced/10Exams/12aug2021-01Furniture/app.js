window.addEventListener('load', solve);

function solve() {
    
    let btnAdd=document.querySelector('#add');
    btnAdd.addEventListener('click', onClickAdd);
    let furList=document.querySelector('#furniture-list');

    function onClickAdd(event){
        event.preventDefault();
        let model=document.querySelector('#model');
        let year=document.querySelector('#year');
        let desc=document.querySelector('#description');
        let price=document.querySelector('#price');

        if (model.value!='' && desc.value!='' && year.value>=0 && price.value>=0) {
            //TODO check numbers
            let priceValue=Number(price.value).toFixed(2);
            let topTR=e('tr',null,'info');
            let tdMod=e('td',model.value,null);
            let tdPrice=e('td',priceValue,null);
            let tdButtons=e('td',null,null);

            

            let btnMore=e('button','More Info', 'moreBtn');
            btnMore.addEventListener('click', onClickMore);
            let btnBuy=e('button', 'Buy it', 'buyBtn');
            btnBuy.addEventListener('click', onClickBuy);
            tdButtons.appendChild(btnMore);
            tdButtons.appendChild(btnBuy);

            topTR.appendChild(tdMod);
            topTR.appendChild(tdPrice);
            topTR.appendChild(tdButtons);

            let bottomTR=e('tr',null, 'hide');
            let tdYear=e('td','Year: '+year.value, null);
            let tdDesc=e('td', 'Description: '+desc.value,null);
            tdDesc.colSpan="3";
            bottomTR.appendChild(tdYear);
            bottomTR.appendChild(tdDesc);
            
            furList.appendChild(topTR);
            furList.appendChild(bottomTR);

            document.querySelector('#model').value='';
            document.querySelector('#year').value='';
            document.querySelector('#description').value='';
            document.querySelector('#price').value='';

        }
    }

    function onClickMore(event){
        let topElement=event.target.parentNode.parentNode;            
        let nextNode = topElement.nextSibling;

        if (event.target.innerHTML=='More Info') {
            event.target.innerHTML='Less Info';            
            nextNode.style.display='contents';
        }else{
            //hide it
            event.target.innerHTML='More Info';
            nextNode.style.display='none';
        }     
    }
    function onClickBuy(event){
        let topElement=event.target.parentNode.parentNode;            
        let nextNode = topElement.nextSibling;
        console.log(event.target.parentNode.parentNode);
        let priceItem=Number(event.target.parentNode.parentNode.querySelector('td:nth-child(2)').innerHTML);
        let priceField=document.querySelector('#information > tfoot > tr > td.total-price');
        let priceOld=Number(priceField.innerHTML);
        //set new price
        document.querySelector('#information > tfoot > tr > td.total-price').innerHTML=(priceOld+priceItem).toFixed(2);
        topElement.remove();
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
