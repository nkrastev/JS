function solve(arr=[], number){

    let resultArray=[];

    for (let index = 0; index < arr.length; index+=number) {
        resultArray.push(arr[index]);
    }

    return resultArray;

}

solve(['5', 
'20', 
'31', 
'4', 
'20'], 
2
);