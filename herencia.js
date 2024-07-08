//clases
//funciones constructoras (estos dos tipos de estructuras pueden crear prototipos)


//Estos prototipo contienen 
//  métodos
//  atributos

class Animal{

    constructor(nombre,tipo){
        this.nombre = nombre;
        this.tipo = tipo;
    }

    emitirSonido(){
        console.log("El animal emite un sonido")
    }

}

class Perro extends Animal{
    constructor(nombre, tipo, raza){
        
        super(nombre,tipo);
        this.raza=raza;

    }

    emitirSonido(){
        console.log("El perro ladra")
    }

    correr(){
        console.log(`${this.nombre} corre alegremente`)
    }
}

const perro1 = new Perro("Fiona","Perro","Cocker")

console.log(perro1)
perro1.emitirSonido()
perro1.correr()

perro1.nuevoMetodo = function (){
    console.log("Este es un método");
}

perro1.nuevoMetodo()

Perro.prototype.segundoMetodo = function (){ //hay que acceder a la clase y luego al prototype
    console.log("Segundo método");
}

perro1.segundoMetodo()

let currentPrototype = Object.getPrototypeOf(perro1);
  for (;currentPrototype !== null; currentPrototype = Object.getPrototypeOf(currentPrototype)) {
    console.log(currentPrototype);
  }