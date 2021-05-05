function solve(matrix) {

    let pairs = 0;

    for (let row = 0; row < matrix.length - 1; row++) {
        for (let col = 1; col < matrix[row].length; col++) {

            if (matrix[row][col] === matrix[row + 1][col]) {
                pairs++;
            }
            if (matrix[row][col] === matrix[row][col - 1]) {
                pairs++;
            }
        }
    }

    for (let col = 0; col < matrix[matrix.length - 1].length; col++) {
        if (matrix[matrix.length - 1][col] === matrix[matrix.length - 1][col + 1]) {
            pairs++;
        }
    }

    for (let row = 0; row < matrix.length - 1; row++) {
        if (matrix[row][0] === matrix[row + 1][0]) {
            pairs++;
        }
    }

    return pairs;

}

// solve([['2', '3', '4', '7', '0'],
// ['4', '0', '5', '3', '4'],
// ['2', '3', '5', '4', '2'],
// ['9', '8', '7', '5', '4']]
// );

// solve([['test', 'yes', 'yo', 'ho'],
// ['well', 'done', 'yo', '6'],
// ['not', 'done', 'yet', '5']]
// );