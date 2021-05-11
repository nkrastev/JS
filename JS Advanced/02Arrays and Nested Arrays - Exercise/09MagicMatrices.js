function solve(matrix=[[]]){
    let isMagic=true;
    const reducer = (accumulator, currentValue) => accumulator + currentValue;   
    let sumOfFirstRow=(matrix[0].reduce(reducer));

    //console.log(sumOfFirstRow);

    //go throught rows
    for (let row = 0; row < matrix.length; row++) {
        if (sumOfFirstRow!=matrix[row].reduce(reducer)) {
            isMagic=false;
        }
    }

    //check cols
    //result an array with sum of cols 
    const sumArray = (array) => {
        const newArray = [];
        array.forEach(sub => {
           sub.forEach((num, index) => {
              if(newArray[index]){
                 newArray[index] += num;
              }else{
                 newArray[index] = num;
              }
           });
        });
        return newArray;
     }     

    sumArray(matrix).forEach(function(element) {
        if (element!=sumOfFirstRow) {
            isMagic=false;
        }
      });

    //The output is a Boolean result indicating whether the matrix is magical or not.
    return isMagic;
}

console.log(solve([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   ));

