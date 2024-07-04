// let persona = {
//     nombre: "Cristian",
//     apellido: "Casas",
//     edad: 23,
// }

function Persona(nombre,apellido,edad){
    this.nombre = nombre;
    this.apellido=apellido;
    this.edad=edad;
}

const persona1 = new Persona("Juan", "Perez", 20);

console.log(persona1);

persona1.nacionalidad = "Colombiano";

console.log(persona1);

const persona2 = new Persona("Cristian","Casas", 20);

console.log(persona2);

// añadir nuevos atributos al constructor
Persona.prototype.saludar = function (){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
};

persona1.saludar();
persona2.saludar();

Persona.prototype.nacion = function (nacionalidad){
    this.nacionalidad=nacionalidad;
};

const persona3 = new Persona("Cristian","Casas", 20, "Colombiano");
console.log(persona3)
persona3.nacion("Colombiano");
console.log(persona3);