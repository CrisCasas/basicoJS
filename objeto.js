/*
    Un objeto es una estructura de datos,

    que permite almacenar datos de una forma parcticulas

    key / value

    propiedad = valor


    objeto{
        propiedad: valor,
        propiedad: valor,
        propiedad: valor
    }

*/




const persona = {
    nombre: "Cristian",
    edad: 30,
    dirección: {
        calle: "Avenida siempre viva",
        ciudad: "Springfield",
    },

    saludar(){
        console.log(`hola, mi nombre es ${persona.nombre}`)
    }
}


//consumir un objeto

console.log(persona);

console.log(persona.nombre)
persona.saludar()

persona.telefono = "333-333-3333";


persona.despedirse = () => {
    console.log("Chao")
}

persona.despedirse();
console.log(persona.dirección.calle)

delete persona.telefono;

delete persona.despedirse();