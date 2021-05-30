function colorize() {
    

    // let arr=Array.from(document.getElementsByTagName('tr'));

    // var filtered = arr.filter(function(element, index, array) {
    //     return (index % 2 != 0);
    //   });
      
    // for (let row of filtered) {
    //     row.style.backgroundColor='teal';
    // }

    //v2
    let arr=Array.from(document.getElementsByTagName('tr'));

    for (let index = 0; index < arr.length; index++) {
        
        if(index % 2 != 0) arr[index].style.backgroundColor='teal';
    }

}