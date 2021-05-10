function solve(arr=[], number){

    for (let index = 0; index < number; index++) {        
        let numberToBeRotated=arr.pop();
        arr.unshift(numberToBeRotated);
    }

    console.log(arr.join(' '));
}

solve(['1', 
'2', 
'3', 
'4'], 
2
);

