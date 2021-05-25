function addItem() {
    
    
    let selectMenu=document.getElementById('menu');

    let newItem = document.createElement('option');
   
    newItem.text = document.getElementById('newItemText').value;
    newItem.value=document.getElementById('newItemValue').value;
    
    selectMenu.add(newItem);

    document.getElementById('newItemText').value='';
    document.getElementById('newItemValue').value='';

}