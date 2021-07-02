window.addEventListener('load', async () => {
    let main = document.querySelector('main');
    main.innerHTML='';

    loadAll();
    
    
});

async function loadAll(){
    try {
        const url = `http://localhost:3030/jsonstore/cookbook/recipes`;
        const response = await fetch(url);
        const recipes = await response.json();
                
        for (const item of Object.values(recipes)) {            
            let artElement=e('article',null,'preview');
            let divTitle=e('div',null,'title');
            let divImage=e('div',null,'small');
            let imgItem=e('img');
            let h2=e('h2',item.name,null);
            imgItem.src=item.img;            
            divImage.appendChild(imgItem);
            divTitle.appendChild(h2);
            artElement.appendChild(divTitle);
            artElement.appendChild(divImage);
            document.querySelector('main').appendChild(artElement);
            artElement.setAttribute('id',item._id);
            artElement.addEventListener('click', onClickRecipeItem);
        }
        
    } catch (error) {
        console.log('Error Load All');
    }
}

function onClickRecipeItem(event){
    let id; //check for click area and get recipe ID
    if (event.target.id!=''){
        id=event.target.id;
    }else if (event.target.parentNode.id!='') {
        id=event.target.parentNode.id;
    }else{
        id=event.target.parentNode.parentNode.id;
    }
    try {
        const url = `http://localhost:3030/jsonstore/cookbook/details/`+id;
        const response = await fetch(url);
        const recipe = await response.json(); 

        console.log(recipe);
        document.getElementById(id).innerHTML='';

        
       
    } catch (error) {
        console.log('Error Load Specific Id');
    } 
    //TODO load in the DOM, data is in recipe OBJECT
        
    
}

function e(type, content, className){
    const result= document.createElement(type);
    result.textContent=content;
    if (className) {
        result.className=className;
    }
    return result;
}