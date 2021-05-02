function solve(arr1, arr2){

    for (let index1 = 0; index1 < arr1.length; index1++) {
        for (let index2 = 0; index2 < arr2.length; index2++) {
            if (arr1[index1]===arr2[index2]) {
                console.log(arr1[index1]);
            }
        }
    }

}

solve(['Hey', 'hello', 2, 4, 'Peter', 'e'],['Petar', 10, 'hey', 4, 'hello', '2'])