function printDeckOfCards(cards) {
    let result=[];
    
    function createCard (inputFace, inputSuit){
        let card = {
            face: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
            suit: { S: '\u2660', H: '\u2665', D: '\u2666 ', C: '\u2663' },
            toString() {
                return `${inputFace}${card.suit[inputSuit]}`;
            }
        }            
        if (card.suit[inputSuit] && card.face.includes(inputFace)) {
            return card.toString();
        } else {
            throw new Error;
        }
    }

    for (let card of cards) {
          
        //very stupid solution 
        let faceForCard = card[0];
        let suitForCard = card[1];
        if (card.length===3) {
            faceForCard = card[0]+card[1];            
            suitForCard = card[2];            
        }              
        
        //console.log(faceForCard,suitForCard);
        //console.log(createCard(faceForCard, suitForCard));

        try {
            const currentCreatedCard=createCard(faceForCard, suitForCard);
            result.push(currentCreatedCard);
            
        } catch (error) {
            console.log(`Invalid card: ${faceForCard}${suitForCard}`);
            result=[];
        }
    }
    
    console.log(result.join(' '));

  }

  printDeckOfCards(['AS', '10D', 'KH', '2C']);
  printDeckOfCards(['5S', '3D', 'QD', '1C']);
  