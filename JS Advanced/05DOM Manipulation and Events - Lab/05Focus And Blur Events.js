function focused() {
    
    let inputFields=document.querySelectorAll('input');

    for (element of inputFields) {
        element.addEventListener('focus', onFocusHandler);
        element.addEventListener('blur', onBlurHandler);
    }

    function onFocusHandler(event) {
        //!!! Judge Need class name to be "focused" 
        event.target.parentNode.className='focus';
    }
    function onBlurHandler(event) {
        event.target.parentNode.className='';
    }

}