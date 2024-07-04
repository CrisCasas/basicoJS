/*
Resumen de la clase
Ambos métodos vistos en esta clase no mutan el array original si no que retornan un booleano de la siguiente manera:

.every() → Retorna true si todos los elementos del arreglo cumplen la función callback
.some() → Retorna true si al menos un solo del arreglo cumplen la función callback

*/

const ages = [21,25,30,19,22]

// every() todos

const allAreAdults = ages.every(age => age>18)

console.log(ages)
console.log(allAreAdults)

// some() // al menos uno 

const atLeastOneIsOver30 =  ages.some(age =>age >29)

console.log(ages)
console.log(atLeastOneIsOver30)