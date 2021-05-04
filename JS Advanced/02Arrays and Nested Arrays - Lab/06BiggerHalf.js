function solve(arr){    

    arr.sort(function(a, b) {return a - b;});
    let arrayCutFrom=(Math.floor(arr.length /2));    
    return arr.slice(arrayCutFrom);

}

solve([4, 7, 2, 5]);
//solve([3, 19, 14, 7, 2, 19, 6]);