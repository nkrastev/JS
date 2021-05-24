function deleteByEmail() {
    const searchedEmail=document.querySelector('input').value;
    let isFound=false;
    let resultBox=document.getElementById('result');
    
    //get all TDs, filter these which are equal 
    let matches=Array.from(document.querySelectorAll('td')).filter(x=>x.textContent==searchedEmail);

    //delete parent
    for (item of matches) {
        isFound=true;
        item.parentNode.remove();
    }

    //print result of deletion
    if (isFound) {
        resultBox.textContent='Deleted.';
    }
    else{
        resultBox.textContent='Not found.';
    }

    //console.log(searchedTDs);
}