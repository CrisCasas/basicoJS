/*slice crea una copia superficial
(shallow copy) de una porción del array especificada por índices de inicio
fin y fin (fin no incluido)
*/

const animals = ["ant","bison", "camel", "duck", "elephant"]

console.log(animals.slice(2))

console.log(animals.slice(2,4))
console.log(animals.slice(1,5))
console.log(animals.slice(-2))
console.log(animals.slice(2,-1))
console.log(animals.slice())