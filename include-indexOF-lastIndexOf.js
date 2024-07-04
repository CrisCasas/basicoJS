//includes ()
// determina si un array incluye un determinado MediaElementAudioSourceNode, devuelve
// true or false según corresponda

const numbers = [1,2,3,4,5]

const result1= numbers.includes(3)

console.log(result1)

const result2= numbers.includes(8)

console.log(result2)

//indexOF()

//Retorna el primer índice en el que se puede encontrar un elemento dado en el array
// ó retorna -1 si el elemento no esta presente

const frutas = ["manzana","pera","uva","pera","banana"]

const pera= frutas.indexOf("naranja")

console.log(frutas)
console.log(pera)

//lastIndexOf()

const posPera = frutas.lastIndexOf("pera")
console.log(posPera)