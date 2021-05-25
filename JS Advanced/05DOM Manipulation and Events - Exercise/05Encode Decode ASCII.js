function encodeAndDecodeMessages() {
    
    const btnEncodeSend=document.getElementsByTagName('button')[0];
    const btnDecodeRead=document.getElementsByTagName('button')[1];

    btnEncodeSend.addEventListener('click', onClickEncodeSend);
    btnDecodeRead.addEventListener('click', onClickDecode);
  
    let message='';

    function onClickEncodeSend(event) {
        
        let input=document.getElementsByTagName('textarea')[0].value;        
        for (let index = 0; index < input.length; index++) {
            //current ASCII symbol input.charCodeAt(index)           
            message+=String.fromCharCode(input.charCodeAt(index)+1);           
        }
        document.getElementsByTagName('textarea')[1].value=message;
        document.getElementsByTagName('textarea')[0].value='';
        message='';
    }


    function onClickDecode(event) {
        message='';
        let input=document.getElementsByTagName('textarea')[1].value;
        for (let index = 0; index < input.length; index++) {
            //reverse ASCII 
            message+=String.fromCharCode(input.charCodeAt(index)-1);           
        }
        document.getElementsByTagName('textarea')[1].value=message;
    }

}