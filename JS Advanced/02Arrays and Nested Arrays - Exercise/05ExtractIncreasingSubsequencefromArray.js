function solve(arr=[]){

    let resultArr= arr.reduce(function(result, currentValue, index, initalArray) {
        if (currentValue >= result[result.length - 1] || result.length === 0) {
            result.push(currentValue);
        }
        return result;
    }, []);

    return resultArr;
    
}

console.log(solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    ));