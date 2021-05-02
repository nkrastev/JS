function solve(input){
    
    let originalArr=input;
    let originalSum=0;
    let modifiedSum=0;

    for (let index = 0; index < input.length; index++) {
        originalSum+=input[index];
        if (input[index] % 2===0) {
            //even
            input[index]+=index;
        }
        else{
            //odd
            input[index]-=index;
        }
        modifiedSum+=input[index];
    }
    
    console.log(input);
    console.log(originalSum);
    console.log(modifiedSum);
}

solve([5, 15, 23, 56, 35])