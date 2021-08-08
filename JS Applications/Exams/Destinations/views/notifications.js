import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from "../node_modules/page/page.mjs";

export function notifications(templateType, message) {


    if (templateType=='loading') {        
        document.getElementsByClassName('loadingBox')[0].style.display='block';  
        disappear('loadingBox');                      
    }
    if (templateType=='error') {        
        document.getElementsByClassName('errorBox')[0].style.display='block';                
        document.getElementsByClassName('errorBox')[0].innerHTML=message;        
        disappear('errorBox');
    }
    if (templateType=='success') {        
        document.getElementsByClassName('infoBox')[0].style.display='block';                
        document.getElementsByClassName('infoBox')[0].innerHTML=message;        
        disappear('infoBox');
    }



    function disappear(classToDisappear) {
        document.getElementsByClassName(classToDisappear)[0].addEventListener('click',onClickQuickClose);
        function onClickQuickClose(){
            document.getElementsByClassName(classToDisappear)[0].style.display='none' ;
        }
        setTimeout(function()
            { 
                document.getElementsByClassName(classToDisappear)[0].style.display='none';  
            }, 3000);
    }
    
}

