//Unir o enlazar dos o más arrays

//concat() uné dos o más arrays

//no modifica el array original

const morseCode1= ['....','---'] // H O
const morseCode2= ['.-..','.-'] // L A

// Combine with concat() way 1

const morseCodeMessage = morseCode1.concat(morseCode2) //para dos arrays

console.log(morseCode1)
console.log(morseCode2)
console.log(morseCodeMessage)

// Combine with concat() way 2

const morseCodeMessage2 = [].concat(morseCode1,morseCode2) //para más de dos array

console.log(morseCode1)
console.log(morseCode2)
console.log(morseCodeMessage2)

//combine with spread operator


function combinarArrays(morseCode1, morseCode2){
    return [...morseCode1,...morseCode2]
}

console.log(combinarArrays(morseCode1,morseCode2))

const numbers = [1,2,3]
const string = 'string'

console.log(combinarArrays(numbers,string))//separa por caracteres para hacer la unión


//Join() Concatena todos los elementos de un array en una cadena de texto, separados
// por un delimitador especifico

const morseCodeMessagesString = morseCodeMessage.join('')

console.log(morseCode1)
console.log(morseCode2)
console.log(morseCodeMessage)
console.log(morseCodeMessagesString)