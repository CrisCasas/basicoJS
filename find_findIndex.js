// Dos métodos que no modifican el array, pero ayudan aencontrar indices y elementos

//find()
// Devuelve el valor del primer elemento que cumple la función de prueba proporcionada


const number = [5,10,15,20]

const mayorAdiez = number.find(num=>num>10);

console.log(number)
console.log(mayorAdiez)

//findIndex()
//devuelve el índice del primer elemento en un array que satisface una condición  propocionada
// en forma de función. Si no encuentra ningún elemento que cumpla la codición, devuelve -1

const mayorAdiezIndex = number.findIndex(num=>num>10);
console.log(mayorAdiezIndex)

//Verificar si es ganador de la rifa

const winningParticipants = [
    { id: 1, name: 'Luber', ticketNumber: 1 },
    { id: 2, name: 'Cristian', ticketNumber: 2 },
    { id: 3, name: 'Katherine', ticketNumber: 3 },
]

function findWinnerByname(name){
    const winner = winningParticipants.find(participans => participans.name === name)
    return winner || 'No winner found with that name.'
}

function findIndexWinnerByTicket(ticketNumber){
    const index = winningParticipants.findIndex( participans => participans.ticketNumber === ticketNumber)
    return index !==-1 ? index : 'No winner found with that ticket number.'
}

function displayWinnerInformation (winner){
    if(winner!== undefined && winner != null && winner != 'No winner found with that name.'){
        console.log("Winner Information: ", winner)
    }else {
        console.log('No winner found. ')
    }
}

const winnerByName= findWinnerByname('Cristian')
const indexWinnerByTicket = findIndexWinnerByTicket(1)

displayWinnerInformation(winnerByName)
console.log('Index of WInner by ticket number: ', indexWinnerByTicket)