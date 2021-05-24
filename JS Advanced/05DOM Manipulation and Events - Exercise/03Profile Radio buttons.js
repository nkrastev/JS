function lockedProfile() {
    
    let btnShowHide=Array
        .from(document.getElementsByTagName('button'))
        .forEach(btn=>btn.addEventListener('click', onClickShowHide));
    
    
    function onClickShowHide(event) {
        let parentDiv=event.target.parentNode;
        let hiddedField=parentDiv.getElementsByTagName('div')[0];
        let lockedBtn=parentDiv.getElementsByTagName('input')[0]; //first input holds LOCKED status true/false

        //console.log(lockedBtn.checked);

        if (lockedBtn.checked) {
            //profile is locked, show/hide is not working
        }
        else{

            //profile is UNlocked
            if ( event.target.textContent==='Show more') {
                //get hidden field, show it, change button text            
                
                hiddedField.style.display="inline";
                event.target.textContent='Hide it';
            }else{
                //hide info and change button text                       
                hiddedField.style.display="none";
                event.target.textContent='Show more';
            }
        }         
    }
}