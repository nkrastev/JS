function solve(arr, start, end) {

    let firstIndex= arr.indexOf(start);
    let secondIndex= arr.indexOf(end);

    return arr.slice(firstIndex, secondIndex+1);

}

solve(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
)

