function solve(inputFace, inputSuit) {

    let card = {
        face: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
        suit: { S: '\u2660', H: '\u2665', D: '\u2666 ', C: '\u2663' },
        toString() {
            return `${inputFace}${card.suit[inputSuit]}`;
        }
    }

    //return card.toString();
    if (card.suit[inputSuit] && card.face.includes(inputFace)) {
        return card.toString();
    } else {
        throw new Error('Error');
    }
}

console.log(solve('10', 'H'));
console.log(solve('A', 'S'));
//console.log(solve('1', 'C'));