/*
    this --- class

    this --- objeto -- class
*/

class Persona{

    constructor(nombre, edad){
        this.nombre= nombre;
        this.edad = edad;
    }
}

const persona1 = new Persona("Kat",23)

console.log(persona1)

persona1.nuevoMetodo = function(){
    console.log(`mi nombre es ${this.nombre}`)
}