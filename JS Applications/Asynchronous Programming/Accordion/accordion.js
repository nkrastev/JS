async function solution() {
    let mainElement=document.querySelector('#main');

    try {
        const url = `http://localhost:3030/jsonstore/advanced/articles/list`;
        const response = await fetch(url);
        const data = await response.json();

        data.forEach(item => {
            //console.log(item);
            let divAccordion=e('div',null,'accordion');
            let divHead=e('div',null,'head');
            let span=e('span',item.title,null);
            let button=e('button','More','button');
            button.setAttribute('id',item._id);                                    
            divHead.appendChild(span);
            divHead.appendChild(button);
            divAccordion.appendChild(divHead);
            mainElement.appendChild(divAccordion);
        });

       
    } catch (error) {
        console.log('Response error');
    }
    
    let buttons=Array
        .from(document.getElementsByTagName('button'))
        .forEach(btn=>btn.addEventListener('click', OnMoreClick));

    async function OnMoreClick(event) {
        
        try {
            const urlDetails = `http://localhost:3030/jsonstore/advanced/articles/details/${event.target.id}`;
            const responseDetails = await fetch(urlDetails);
            const detailData = await responseDetails.json();  
            let mainDiv=event.target.parentNode.parentNode;
            
            if (event.target.textContent=='Less') {
                //extra div already exists, hide it
                let extraDivToShow=mainDiv.querySelector('.extra');
                extraDivToShow.style.display='none';
                event.target.textContent='More';
            }else{
                //extra div not exists or have to be shown
                if (mainDiv.querySelector('.extra')!=undefined) {
                    mainDiv.querySelector('.extra').style.display='block';
                    event.target.textContent='Less';
                }else{
                    let divExtra=e('div',null,'extra');  
                    let p=e('p',detailData.content,null);
                    divExtra.style.display='block';  
                    divExtra.innerHTML='';
                    divExtra.appendChild(p);
                    mainDiv.appendChild(divExtra);
                    event.target.textContent='Less';
                }              
            }                               
            
        } catch (error) {
           console.log('Error at target id details response') 
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
}

solution();