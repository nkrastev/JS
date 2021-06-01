function extract(content) {

    let textInDom=document.getElementById(content).textContent;

    // regex again :(
    let pattern = /\(([^)]+)\)/g;
    let result = [];

    let match = pattern.exec(textInDom);
    while(match) {
        result.push(match[1]);
        match = pattern.exec(textInDom);
    }

    //console.log(result.join('; '))
    return result.join('; ');


    //console.log(textInDom);
}