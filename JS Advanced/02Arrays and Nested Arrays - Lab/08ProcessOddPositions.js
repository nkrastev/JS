function solve(arr)
{
    let resultArray=[];
    for (let index = 0; index < arr.length; index++) {
        if (index % 2!=0) {
            resultArray.push(arr[index]*2);
        }
    }

    resultArray.reverse();
    console.log(resultArray.join(' '));
}

solve([10, 15, 20, 25]);