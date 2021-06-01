function notify(message) {
  
    const element=document.getElementById('notification');
    element.style.display='block';
    element.textContent=message;

    element.addEventListener('click', onClickDiv);

    function onClickDiv(event) {
      event.target.style.display='none';
    }

}