//métodos que no modifican el array original

// filter()

/*
Crea un nuevo array con elementos que cumplen una condición dada por una función
*/


const numbers = [1,2,3,4,5,6,7,8,9,10]
const evenNumbers= numbers.filter(number => 
    number%2 === 0)

console.log(numbers)
console.log(evenNumbers)

// reduce() case 1
// Ejecuta un función reductora sobre cada elemento de un array devolviendo como resultado un valor único

const numbersReduce = [1,2,3,4,5]
const sum = numbersReduce.reduce((accumulator, currentValue)=>accumulator+ currentValue,0)

console.log(numbersReduce)
console.log(sum);

// reduce() case 2

const words = ['apple', 'banana', 'hello', 'bye', 'bye', 'banana']

const repetWords= words.reduce((accumulator,currentValue)=>{
    if(accumulator[currentValue]){
        accumulator[currentValue]++;
    }else{
        accumulator[currentValue]=1;
    }
    return accumulator;
},{})

console.log(repetWords)

//Ejercicio Calificaciones más de 70

const calificaciones=[85,60,40,90,70,72,92,94,32]

const aprobados = calificaciones.filter(notas => notas>= 70)

const averageAprobados= aprobados.reduce((sum,nota)=> sum + nota,0) / aprobados.length;

console.log(calificaciones)
console.log(aprobados)
console.log(averageAprobados)



