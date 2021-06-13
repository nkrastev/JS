function solve() {
    let btnAddTask=document.querySelector('#add');
    btnAddTask.addEventListener('click', onClickAddTask);

    function onClickAddTask(event) {
        event.preventDefault();//prevent page from reloading
        let task=document.querySelector('#task').value;
        let description=document.querySelector('#description').value;
        let date=document.querySelector('#date').value;
        
        if (task!='' && description!='' && date!=''){
            //data validated
            let divForPlacement=document.querySelector('body > main > div > section:nth-child(2) > div:nth-child(2)');
            let articleTag=document.createElement('article');
            let h3tag=document.createElement('h3');
            h3tag.textContent=task;            
            let p1=document.createElement('p');
            p1.textContent='Description: '+description;
            let p2=document.createElement('p');
            p2.textContent='Due Date: '+date;
            let divWithButtons=document.createElement('div');
            divWithButtons.classList.add('flex');
            let btnStart=document.createElement('button');
            btnStart.classList.add('green');
            btnStart.textContent='Start';
            btnStart.addEventListener('click', onClickStartOpen);
            let btnDelete=document.createElement('button');
            btnDelete.classList.add('red');
            btnDelete.textContent='Delete';
            btnDelete.addEventListener('click', onClickDeleteOpen);

            divWithButtons.appendChild(btnStart);
            divWithButtons.appendChild(btnDelete);

            articleTag.appendChild(h3tag);
            articleTag.appendChild(p1);
            articleTag.appendChild(p2);
            articleTag.appendChild(divWithButtons);

            divForPlacement.appendChild(articleTag);

        }
    }

    function onClickStartOpen(event){        
        let articleForMovement=event.target.parentNode.parentNode;
        articleForMovement.getElementsByClassName('flex')[0].remove();
        
        //new buttons        
        let btnDelete=document.createElement('button');
        btnDelete.classList.add('red');
        btnDelete.textContent='Delete';
        btnDelete.addEventListener('click', onClickDeleteInProgress);                

        let btnFinish=document.createElement('button');
        btnFinish.classList.add('orange');
        btnFinish.textContent='Finish';
        btnFinish.addEventListener('click', onClickFinishInProgress);        
        
        //temp div
        let divForDeleteFinish=document.createElement('div');
        divForDeleteFinish.classList.add('flex');
        divForDeleteFinish.appendChild(btnDelete);
        divForDeleteFinish.appendChild(btnFinish);
        articleForMovement.appendChild(divForDeleteFinish);

        
        let targetForMovement=document.querySelector('#in-progress');
        targetForMovement.appendChild(articleForMovement);
    }

    function onClickDeleteOpen(event){
        event.target.parentNode.parentNode.remove();
    }

    function onClickDeleteInProgress(event){
        event.target.parentNode.parentNode.remove();
    }

    function onClickFinishInProgress(event){
        let articleForFinish=event.target.parentNode.parentNode;
        articleForFinish.getElementsByClassName('flex')[0].remove();

        let finishPanel=document.querySelector('body > main > div > section:nth-child(4) > div:nth-child(2)');
        finishPanel.appendChild(articleForFinish);
    }
}