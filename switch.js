// switch(expresion) {
//     case valor1:
//         // Bloque de código
//         break;
//     case valor2:
//         // Bloque de código
//         break;
//     case valor3:
//         // Bloque de código
//         break;
//     default:
//         // Bloque de código
//         break;
// }

let expresion = "Papayas"

switch(expresion) { //=== if(expresion === valor1)
    case "Papayas":
        console.log("El kilo de papayas cuesta $1.00");
        break;
    case "Narajas":
        console.log("El kilo de naranjas cuesta $0.50");
        break;
    case "Manzanas":
        console.log("El kilo de manzanas cuesta $0.75");
        break;
    default:
        console.log(`Lo siento, no tenemos ${expresion}, hasta luego.`);
}

console.log("¿Hay algo más que desees?")