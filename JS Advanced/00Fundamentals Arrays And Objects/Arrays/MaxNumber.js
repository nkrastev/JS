function solve(arr){
    //A top integer is an integer which is bigger than all the elements to its right. 

    let maxNumbers=[];

    for (let index = 0; index < arr.length; index++) {
        let currentNumber=arr[index];
        let isValid=true;

        for (let i = index; i < arr.length; i++) {
            if (arr[index]<=arr[i+1]) {
                isValid=false;
            }
        }

        if (isValid) {
            maxNumbers.push(arr[index]);
        }
    }

    console.log(maxNumbers.join(' '));

}

//solve([1, 4, 3, 2]);
//solve([14, 24, 3, 19, 15, 17]);
solve([41,41,34,20]);