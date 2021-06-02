function toggle() {
    let buttonObj = document.getElementsByClassName('button')[0];
    let elementToManipulate=document.getElementById('extra');

    if (buttonObj.textContent==='More') {
        buttonObj.textContent='Less';
        elementToManipulate.style.display='block';
    }else{
        buttonObj.textContent='More';
        elementToManipulate.style.display='none';
    }
}