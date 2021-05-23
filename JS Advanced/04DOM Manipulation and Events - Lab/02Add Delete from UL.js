function addItem() {
    
    //creating element and HREF
    let element = document.createElement('li'); 
    element.innerHTML=document.querySelector('#newItemText').value+' <a href="#">Delete</a>';

    //get list from DOM
    let listItem=document.querySelector('#items'); 
    
    //event listener on HREF click and adding element to DOM   
    element.addEventListener("click", deleteItem);

    listItem.appendChild(element);
    list.appendChild(listItem);

    function deleteItem() {
        element.remove();
    }

    //chrome OK, judge 0/100 :(
}