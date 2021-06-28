window.addEventListener('load', solution);

function solution() {
  const btnSubmit=document.querySelector('#submitBTN');
  const btnEdit=document.querySelector('#editBTN');
  const btnContinue=document.querySelector('#continueBTN');

  btnSubmit.addEventListener('click', onSubmit);
  btnEdit.addEventListener('click', onEdit);
  btnContinue.addEventListener('click', onContinue);

  function onSubmit(event) {
    event.preventDefault();//prevent page from reloading
    let fullName=document.querySelector('#fname').value;
    let email=document.querySelector('#email').value;
    let phone=document.querySelector('#phone').value;
    let address=document.querySelector('#address').value;
    let code=document.querySelector('#code').value;
    
    if (fullName!='' && email!='') {
      let ulElement=document.querySelector('#infoPreview');

      let liName=e('li','Full Name: '+fullName,null);
      let liMail=e('li','Email: '+email,null);
      let liPhone=e('li','Phone Number: '+phone,null);
      let liAddress=e('li','Address: '+address,null);
      let liCode=e('li','Postal Code: '+code,null);
      
      ulElement.appendChild(liName);
      ulElement.appendChild(liMail);
      ulElement.appendChild(liPhone);
      ulElement.appendChild(liAddress);
      ulElement.appendChild(liCode);

      btnSubmit.disabled=true;
      btnEdit.disabled=false;
      btnContinue.disabled=false;

      document.querySelector('#fname').value='';
      document.querySelector('#email').value='';
      document.querySelector('#phone').value='';
      document.querySelector('#address').value='';
      document.querySelector('#code').value='';
    }

  }

  function onEdit(event) {
    let f1=document.querySelector('#infoPreview > li:nth-child(1)').textContent.slice(11);
    let f2=document.querySelector('#infoPreview > li:nth-child(2)').textContent.slice(7);
    let f3=document.querySelector('#infoPreview > li:nth-child(3)').textContent.slice(14);
    let f4=document.querySelector('#infoPreview > li:nth-child(4)').textContent.slice(9);
    let f5=document.querySelector('#infoPreview > li:nth-child(5)').textContent.slice(13);
    
    document.querySelector('#fname').value=f1;
    document.querySelector('#email').value=f2;
    document.querySelector('#phone').value=f3;
    document.querySelector('#address').value=f4;
    document.querySelector('#code').value=f5;

    document.querySelector('#infoPreview').innerHTML='';
    btnSubmit.disabled=false;
    btnEdit.disabled=true;
    btnContinue.disabled=true;
  }
  function onContinue(event) {
    document.querySelector('#block').innerHTML='<h3>Thank you for your reservation!</h3>';
  }
  //factory function, create DOM element
  function e(type, content, className){
    const result= document.createElement(type);
    result.textContent=content;
    if (className) {
        result.className=className;
    }
    return result;
  }

}
