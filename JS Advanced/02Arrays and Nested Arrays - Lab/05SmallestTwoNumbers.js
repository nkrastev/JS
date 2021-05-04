function solve(arr){

    arr.sort(compareNumbers);

    function compareNumbers(a, b) { return a - b; }

    console.log(arr[0]+' '+arr[1]);
}

solve([30, 15, 50, 5])