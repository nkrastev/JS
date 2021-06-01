function validate() {
    
    const element=document.getElementById('email');
    element.addEventListener('change', onChangeValidate);

    function onChangeValidate(event) {
        const mailValue=event.target.value;
        const regex = new RegExp('[a-z]+@[a-z]+\.[a-z]+');
     
        //console.log(regex.test(mailValue));

        if (!regex.test(mailValue)) {
            event.target.classList.add('error');
        }else{
            event.target.classList.remove('error');
        }        
    }    
}