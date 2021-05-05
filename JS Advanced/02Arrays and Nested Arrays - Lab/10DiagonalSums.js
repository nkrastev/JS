function solve(matrix){

    let primary = 0;
    let secondary=0;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (row===col) {
                primary+=matrix[row][col];
            }
            if ((row + col) === (matrix.length - 1)){
                secondary += matrix[row][col];
            }

                
        }
        
    }

    console.log(primary+' '+secondary);

}

solve([[20, 40],
    [10, 60]]
   );

solve([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
   );