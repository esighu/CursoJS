/**
 * Funciones
 * 
 */

// declarativas

// function nombredelafuncion(){
//     //cuerpo de nuestra funcion
// }

function saludar() {
    console.log('Hola funciones');
}

saludar();

//var nombre = 'Esteban';
function saludar(nombre) {
    console.log(`Hola soy ${nombre}`);
}

saludar('Esteban');

function saludar(nombre) {
    return `Hola soy el ingeniero ${nombre}`;
}
   

var saludos = saludar('Esteban');
console.log(saludos);
console.log(saludar('Esteban la vas a romper en jS'));

//Funciones de expresion o anonimas

var suma = function(a,b){
    return a + b ;
}
suma(5,6);
console.log(suma(5,6));

// arrow funciones

var restar = (a,b)=>{
if (typeof a === 'number' && typeof b === 'number'){
    return a - b;
}else {
    return 'Solo se pueden restar numeros'
}
  
}
console.log(restar(4,3))

var multiplicar = (a,b) => a * b; 
console.log(multiplicar(4,3))

