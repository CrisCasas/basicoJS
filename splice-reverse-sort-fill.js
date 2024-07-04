// four methods that modify the original array

//.splice

const vegetables = ['carrot', 'brocoli','spinach','tomato']
const removedVegetables = vegetables.splice(2,1,'cucumber','onion')

console.log(vegetables)
console.log(removedVegetables)

// reverse

const numbers= [1,2,3,4,5]
console.log(numbers)
const reverseNumbers = numbers.reverse()
console.log(reverseNumbers)

// sort with number

const unsortedNumbers1= [4,18,1,62,34]
const unicodesortedNumbers= unsortedNumbers1.sort()

console.log(unsortedNumbers1)
console.log(unicodesortedNumbers)

//para números

const unsortedNumbers2= [4,18,1,62,34]
const sortedNumbers= unsortedNumbers2.sort((a,b)=> a - b)
// 4-18=-14 mantiene el orden
// 18-1= 17 entonces cambia el orden de los números
console.log(unsortedNumbers2)

//funcion comparacioón para sort

const numbersExample = [34,77,2,16,20]
numbersExample.sort((a,b)=> a-b);
console.log(numbersExample)

//sort con strings. organice about UTF-16 same to ABC

const cities = ['Bogotá','Paris','Tokio','London']
const sortedCities = cities.sort()

console.log(sortedCities)

//Fill

const ages= [21,35,45,50]
console.log(ages.fill(0,2,4))

console.log(ages.fill(4))