// 1. spread operator
//copia o combina arrays, crea arrays con elementos adicionales

//copping an array 

const originalArray = [1,2,3,4,5]
const copiOfAnArray = [...originalArray] // este es el spread operator 

console.log(originalArray)
console.log(copiOfAnArray)

//2. Combining arrays

const array1= [1,2,3]
const array2= [4,5,6]

const combinedArray=[...array1,...array2]

console.log(combinedArray)

//3. Creating arrays with addtional elements 

const baseArray = [1,2,3]
const arrayWithAddionalELements=[...baseArray,1,2,3]

console.log(arrayWithAddionalELements)

//4. Pass elementes to functions

function sum(a,b,c){
    return a+b+c;
}

const numbers=[1,2,3]
const result= sum(...numbers)

console.log(result)

