function addItem() {
    
    let element = document.createElement('li');   
    element.textContent=document.querySelector('#newItemText').value;
    document.querySelector('#items').appendChild(element);    
}