// exercise: card game implementaion
const deck = ["♠", "♥", "♦", "♣","♠", "♥", "♦", "♣","♠", "♥", "♦", "♣"];

//algoritmo de fisher-yates
function shuffleDEck(){

    for(let i=deck.length-1; i>0;i--){
        const j = Math.floor(Math.random() * (i+1));
        [deck[i],deck[j]]=[deck[j],deck[i]]
    }
}

function dealCards(numCard){

    const dealCards = deck.splice(0,numCard)
    return dealCards
    
}


const player1Hand = dealCards(3);
const player2Hand = dealCards(3);
const player3Hand = dealCards(3);

console.log('Player 1 Hand: ',player1Hand);
console.log('Player 1 Hand: ',player2Hand);
console.log('Player 1 Hand: ',player3Hand);