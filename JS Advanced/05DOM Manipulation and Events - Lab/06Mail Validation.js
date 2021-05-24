function validate() {
        
    const emailField=document.getElementById('email');

    emailField.addEventListener('change', onChangeHandler);

    function onChangeHandler(event) {

        //Regex from Stackoverflow
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(String(event.target.value).toLowerCase())) {
            //valid
            event.target.className='';
        }
        else{
            //invalid
            event.target.className='error';
        }       

    }

}