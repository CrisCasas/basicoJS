class Persona{

    constructor(nombre,edad){
        this.nombre=nombre;
        this.edad=edad;
    }

    saludar(){
        console.log(`HOla, mi nombre es: ${this.nombre} y tengo ${this.edad} años`)
    }
    
}

const persona1 = new Persona("Cristian", 18);

persona1.saludar();

