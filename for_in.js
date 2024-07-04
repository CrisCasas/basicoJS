/*

for in ----> objetos

propiedades = valor

array,string

item

for(variable in objeto){
    // code
}

*/


let vida = {eat:3 ,sleep:1,code: 100,repeat:1000};


for (let actividad in vida){
    console.log(actividad);
}

for (let actividad in vida){
    console.log(`${actividad}: ${vida[actividad]}`)
}