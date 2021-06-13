function solve() {
    const btnAdd=document.querySelector('main > section.admin-view.section-view > div > div > form > div:nth-child(4) > button');
    btnAdd.addEventListener('click', onClickAddLecture);

    function onClickAddLecture(event){
        event.preventDefault();//prevent page from reloading

        const lecName=document
        .querySelector('main > section.admin-view.section-view > div > div > form > div:nth-child(1) > input[type=text]').value;
        const lecDate=document
        .querySelector('main > section.admin-view.section-view > div > div > form > div:nth-child(2) > input[type=datetime-local]').value;
        const lecModule=document
        .querySelector('main > section.admin-view.section-view > div > div > form > div:nth-child(3) > select').value;
        
        if (lecName!='' && lecDate!='' && lecModule!='Select module') {
            //TODO, check if date is in the past

            let trainingSection=document.querySelector('main > section.user-view.section-view > div');
            
            //check if module Exists
            let h3Tags = document.getElementsByTagName("h3");
            let searchModule = lecModule.toUpperCase()+'-MODULE';
            let found;
            for (let i = 0; i < h3Tags.length; i++) {
                if (h3Tags[i].textContent == searchModule) {
                    found = h3Tags[i];
                    break;
                }
            }

            //search is finished

            if (found) {
                //add lecture to existing module, found is ref to the targeted H3                
                let divTagOfCurrentModule=found.parentElement;
                let ulElement=divTagOfCurrentModule.getElementsByTagName('ul')[0];                
                
                let liElement=document.createElement('li');
                let h4=document.createElement('h4');
                let btnDelete=document.createElement('button');

                btnDelete.textContent='Del';
                btnDelete.classList.add('red');
                btnDelete.addEventListener('click', onClickDelete);
                h4.textContent=lecName+' - '+dateChanger(lecDate);            
                liElement.classList.add('flex');
                liElement.appendChild(h4);
                liElement.appendChild(btnDelete);
                ulElement.appendChild(liElement);     
                //TODO Sorting    
                
                sortLiElements(ulElement);

            }
            else{
                //if the module is new, new DIV creation          
                let divTagForModule=document.createElement('div');
                divTagForModule.classList.add('module');
                
                //adding module H3
                let h3tag=document.createElement('h3');
                h3tag.textContent=lecModule.toUpperCase()+'-MODULE';
                divTagForModule.appendChild(h3tag);

                //adding lecture name, date and DEL btn
                let ulElement=document.createElement('ul');
                let liElement=document.createElement('li');
                let h4=document.createElement('h4');
                let btnDelete=document.createElement('button');

                btnDelete.textContent='Del';
                btnDelete.classList.add('red');
                btnDelete.addEventListener('click', onClickDelete);
                let uselessDateReplace=dateChanger(lecDate).replace('-',' - ');

                h4.textContent=lecName+' - '+uselessDateReplace;            
                liElement.classList.add('flex');
                liElement.appendChild(h4);
                liElement.appendChild(btnDelete);
                ulElement.appendChild(liElement);
                divTagForModule.appendChild(ulElement);

                //append to DOM            
                trainingSection.appendChild(divTagForModule);
            }
            
        }
    }

    function onClickDelete(event){
        let mainDiv=event.target.parentElement.parentElement.parentElement;
        //if main div contains more the 1 Li elements, delete only the current LI, else remove the main div        
        if (mainDiv.getElementsByTagName('li').length>1) {
            event.target.parentElement.remove();
        }else{
            mainDiv.remove();
        }

        console.log(mainDiv);
    }

    function dateChanger(str){
        let result='';
        for (let index = 0; index < str.length; index++) {
            if (str[index]=='-') {
                result+='/';
            }else if (str[index]=='T') {
                result+='-'
            }else{
                result+=str[index];
            }
        }        
        return result;
    }

    function sortLiElements(ul){
        console.log('Sorting...');        
        let li=ul.getElementsByTagName('li');

        let nameDate=[];

        for (const iterator of li) {
            let items=iterator.textContent.split(' - ');
            let dateForObject= '';
            dateForObject=items[1];
            console.log(dateForObject);
            if (items.length==3) {
                dateForObject=items[1]+'-'+items[2];                
            }            
            //remove Del text from date 
            dateForObject=dateForObject.replace('Del','');
            //hardcode remove dash and add it again with spaces
            dateForObject=dateForObject.replace('-',' - ');
            let obj={lecture:items[0], date:dateForObject}
            
            nameDate.push(obj);
        }
        nameDate.sort((a, b) => a.date > b.date && 1 || -1);
        
        ul.innerHTML = '';

        for (let index = 0; index < nameDate.length; index++) {
            let liElement=document.createElement('li');
            liElement.classList.add('flex');
            let h4Element=document.createElement('h4');
            //let uselessDateReplace=nameDate[index].date.replace('-',' - ');
            h4Element.textContent=nameDate[index].lecture+' - '+nameDate[index].date;
            liElement.appendChild(h4Element);
            let btnDelete=document.createElement('button');
            btnDelete.textContent='Del';
            btnDelete.classList.add('red');
            liElement.appendChild(btnDelete);
            ul.appendChild(liElement);
            btnDelete.addEventListener('click', onClickDelete);
        }
    }
};