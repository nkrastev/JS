function solve(arr, numberOfRotations){
    //array and number of rotations you have to perform (first element goes at the end). 
    //cheesy solution, extend the array :)
    
    for (let index = 0; index < numberOfRotations; index++) {
        
        let first=arr[index];
        arr[index]='';
        arr.push(first);
        
    }
    
    console.log(arr.join(' '))
}

solve([51, 47, 32, 61, 21],2);