//método Map() se aplica una función a cada elemento de un array

const numbers = [1,2,3,4,5]
const squareNumbers = [numbers.map(num=>num*num)]

console.log(numbers)
console.log(squareNumbers)


//for each

const numbers2 = [1,2,3,4,5]

numbers2.forEach(num => {
    console.log(num)
});


const colors= ['red','pink','blue']
const iteratedColors = colors.forEach(
    color => console.log(color))

console.log


//conversión de grados Fahrenheit a Celsius

//Exercise: Fahrenheit to Celsius conversion

const tempInFahren= [32,67,86,206,103]
const tempInCelsius= tempInFahren.map(fahrenheit => (5/9)*(fahrenheit-32))

console.log('Temperature in Fahrenheit: ', tempInFahren);
console.log('Temperature in Celsius: ', tempInCelsius)


//suma de los elementos de un array

const numeros= [32,67,86,206,103]

let sum= 0;

numeros.forEach(number=>{
    sum= sum+ number
})


console.log('Array of Number: ', numeros)
console.log('Suma de números ', sum)



