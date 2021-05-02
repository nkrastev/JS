function solve(arr){
    let numbersToCut = arr.shift();

    let firstK = arr.slice(0,numbersToCut);
    let lastK = arr.slice(arr.length-numbersToCut,arr.length);

    console.log(firstK.join(' '));
    console.log(lastK.join(' '));

}

solve([2, 7, 8, 9]);