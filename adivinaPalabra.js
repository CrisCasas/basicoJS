/*

Juguemos adivinar la palabra.

El usuario tiene 3 intentos para adivinar la palabra oculta.

Requerimientos:

1. El juego debe tener una palabra oculta.
2. EL juego puede dar una pista al usuario.
3. El usuario debe ingresar una suposición.
4. El juego debe verificar si la suposición es correcta.
5. El juego debe tener un número limitado de intentos
6. El juego debe terminar si el usuario adivina 
    la palabra o si se quedan sin intentos.
*/

console.log ("Bienvenido a adivina la palabra")

let palabraOculta = "javascript"

let pista = "Es un lenguaje de programación para web";

let intentos = 3;

do{

    alert(pista)

    let suposicion= prompt("Qué palabra crees que es?")

    if(suposicion.toLowerCase()===palabraOculta){
        alert(`Felicidades lo lograste la palabra era ${palabraOculta}`)
        intentos=0;
    }else{
        alert(`te quedan ${intentos-1} intentos`)
    } 

    intentos--;

}while (intentos>0)
