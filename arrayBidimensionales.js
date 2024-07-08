let array1D = [1,2,3] //Unidimensional

let array2D = [[1,2,3],[4,5,6],[7,8,9]] //bidimensional

let matriz=[
    [1,2,3],
    [4,5,10],
    [7,8,9]
]

matriz[1][2] = 10

console.log(matriz)

let value = matriz[0][1]
console.log(value)

//Operations

// for (let i=0; i<matriz.length;i++) {
//     for(let j=0;j<matriz[i].length;j++){
//         console.log(matriz[i][j])
//     }
// }

//buscar elementos especificos
function findELements(matriz,elemento){

    for (let i=0; i<matriz.length;i++) {
        for(let j=0;j<matriz[i].length;j++){
            if(matriz[i][j]===elemento){
                console.log(`elemento encontrado ${elemento} en la posición ${matriz[i][j]}`)
                return true
            }
        }
    }

    console.log(`elemento NO encontrado ${elemento}`)
    return false;

}


findELements(matriz,11)

function duplicateMatriz(matriz){

    let newMatrizValueDuplicate = []
    for(let i=0;i<matriz.length;i++){
        newMatrizValueDuplicate[i] = [...matriz[i]]
        // for (let j = 0; j < matriz.length; j++) {
        //     newMatrizValueDuplicate[i] = [...matriz[j]]
        // }
    }
    return newMatrizValueDuplicate;
}

console.log(duplicateMatriz(matriz))


