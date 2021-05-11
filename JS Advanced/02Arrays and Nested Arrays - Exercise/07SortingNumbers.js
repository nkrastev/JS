function solve(arr=[]){

    arr.sort(function(a, b){return a-b});

    let sortedArray=[];

    while (arr.length!=0) {
        let smallest=arr.shift();
        sortedArray.push(smallest);
       
        let biggest=arr.pop();
        sortedArray.push(biggest);      
    }

    //sortedArray.filter(number => number != undefined) ако са нечетен брой
    return sortedArray;
    
}

console.log(solve([1, 65, 3, 52, 48, 0, 63, 31, -3, 18, 56]));