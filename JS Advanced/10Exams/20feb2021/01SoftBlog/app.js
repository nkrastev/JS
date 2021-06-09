function solve(){

    let bntCreate=document.querySelector("button.create");
    //bntCreate.type='button'; // type="button" prevent page from reloading !!!!    
    bntCreate.addEventListener('click', onClickCreate);
    
    let positionToAddArticles=document.querySelector('main > section');
   

    function onClickCreate(event){
        //get data
        event.preventDefault();
        const creator=document.getElementById('creator').value;
        const title=document.getElementById('title').value;
        const category=document.getElementById('category').value;
        const content=document.getElementById('content').value;

        //create and append
        
        let newArticle = document.createElement("article");
        
        let newH1 = document.createElement("h1");        
        newH1.textContent=title;
        newArticle.appendChild(newH1);

        let catParagraph=document.createElement("p");         
        catParagraph.innerHTML='Category: <strong>'+category+'</strong>';
        newArticle.appendChild(catParagraph);

        let creatorParagraph=document.createElement("p"); 
        creatorParagraph.innerHTML='Creator: <strong>'+creator+'</strong>';
        newArticle.appendChild(creatorParagraph);

        let descParagraph=document.createElement("p"); 
        descParagraph.textContent=content;
        newArticle.appendChild(descParagraph);

        //buttons
        let buttonsDiv= document.createElement("div");
        buttonsDiv.classList.add('buttons');

        //create button delete
        let btnDelete=document.createElement('button');
        btnDelete.classList.add('btn');
        btnDelete.classList.add('delete');
        //btnDelete.type='button';
        btnDelete.innerText='Delete';
        btnDelete.addEventListener('click', onClickDelete);
        //add delete to div
        buttonsDiv.appendChild(btnDelete);

        //create button archive
        let btnArchive=document.createElement('button');
        btnArchive.classList.add('btn');
        btnArchive.classList.add('archive');
        //btnArchive.type='button';
        btnArchive.innerText='Archive';
        btnArchive.addEventListener('click', onClickArchive);
        //add delete to div
        buttonsDiv.appendChild(btnArchive);


        //add buttons div to article
        newArticle.appendChild(buttonsDiv);

        //add article to document
        positionToAddArticles.appendChild(newArticle);        
    }

    function onClickDelete(event){
        event.target.parentNode.parentNode.remove();
    }
    function onClickArchive(event){
        //get data
        let liItem=document.createElement('li');
        liItem.textContent=(event.target.parentNode.parentNode).getElementsByTagName('h1')[0].textContent
        //delete article
        event.target.parentNode.parentNode.remove();
        //appent to list
        let archiveData=document.querySelector('.archive-section>ol');        
        archiveData.appendChild(liItem);

        //sorting stack overflow RULZ :)        
        let ol = document.getElementsByTagName('ol')[0];
        Array.from(ol.getElementsByTagName("li"))
        .sort((a, b) => a.textContent.localeCompare(b.textContent))
        .forEach(li => ol.appendChild(li));
    }
}


