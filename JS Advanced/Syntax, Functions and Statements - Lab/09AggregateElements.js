function arrOperations(inputArr){
    
    let sumOfElements=inputArr.reduce(function(inputArr, b) { return inputArr + b; }, 0);
    let sumOfInverseElements=inputArr.reduce(function(inputArr, b) { return inputArr + 1/b; }, 0);
    let sumOfStrings=inputArr.reduce(function(inputArr, b) { return inputArr + b.toString(); });

    console.log(sumOfElements)
    console.log(sumOfInverseElements)
    console.log(sumOfStrings)
}