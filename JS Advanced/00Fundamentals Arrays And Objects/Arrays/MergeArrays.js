function solve(firstArr, secondArr){
    //are arrays with equal lenght?

    let third=[];

    for (let index = 0; index < firstArr.length; index++) {
        if (index %2 ===0) {
            //even, add sum
            third.push(Number(firstArr[index])+Number(secondArr[index]));
        }       
        else{
            //odd, add concatenation
            third.push(firstArr[index]+secondArr[index]);
        }
    }

    console.log(third.join(' - '));
}

solve(['5', '15', '23', '56', '35'],['17', '22', '87', '36', '11']);