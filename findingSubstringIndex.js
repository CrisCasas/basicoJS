// Exercise

const frutas = ["manzana","pera","uva","pera","banana","kiwi"]

const target = "pera"

function estaPresente(array, target){
   
    const result={
        objetivoIncluidoString: false,
        primerOcurrencia: -1,
        ultimaOcurrencia: -1
    }
    
    frutas.forEach((elemento, indice)=>{
        if(elemento.includes(target)){
            result.objetivoIncluidoString = true;
            result.primerOcurrencia = frutas.indexOf(target);
            result.ultimaOcurrencia = frutas.lastIndexOf(target);
            
        }
    })

    return result;
}

const result = estaPresente(frutas,target)
console.log(result)