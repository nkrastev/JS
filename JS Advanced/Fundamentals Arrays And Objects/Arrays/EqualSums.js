function solve(arr){

    let indexForResult=-1;
    

    for (let index = 0; index < arr.length; index++) {
        
        let leftSum=0;
        let rightSum=0;
        let currentElement=arr[index];
       

        //Calculate left sum
        for (let i = 0; i < index; i++) {
            leftSum+=arr[i];
        }
        //Calculate right sum
        for (let i = index+1; i < arr.length; i++) {
            rightSum+=arr[i];
        }

        //console.log(leftSum+' '+rightSum);
        
        if (leftSum===rightSum) {
            indexForResult=index;
            //console.log('Equal')
        }
    }

    

    if (indexForResult!==-1) {
        console.log(indexForResult);
    }else{
        console.log('no');
    }
}

solve([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);