function test(){
    let btn=document.querySelector('main > section > button');
    btn.addEventListener('click', onSortClick);

    function onSortClick(event){
        console.log('Sorting...');
        let ul=document.querySelector('main > section > div > ul');
        let li=ul.getElementsByTagName('li');

        let nameDate=[];

        for (const iterator of li) {
            let items=iterator.textContent.trim().split(' - ');
            //remove Del text from date 
            let dateForObject= items[1].slice(0, -3);
            let obj={lecture:items[0], date:dateForObject}
            
            nameDate.push(obj);
        }
        nameDate.sort((a, b) => a.date > b.date && 1 || -1);

        for (let index = 0; index < nameDate.length; index++) {
            let liElement=document.createElement('li');
            liElement.classList.add('flex');
            let h4Element=document.createElement('h4');
            h4Element.textContent=nameDate[index].lecture+' - '+nameDate[index].date;
            liElement.appendChild(h4Element);
            let btnDelete=document.createElement('button');
            btnDelete.textContent='Del';
            btnDelete.classList.add('red');
            ul.appendChild(liElement);
            //btnDelete.addEventListener('click', onClickDelete);
        }

        
    }
}