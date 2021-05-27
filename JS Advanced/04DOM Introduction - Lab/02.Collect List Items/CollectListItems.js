function extractText() {
    // TODO
    const elements = document.getElementsByTagName('li');
    let resultItem='';

    for (let item of elements) {
        resultItem+=item.textContent+'\n';        
    }
    
    let resultElement=document.getElementById('result');
    resultElement.textContent=resultItem;  

}