/**
 * Manipulacion Arreglos
 * 
 */

// foreach

var letras = ['a','s','d','f','g','h','z'];
// console.log(letras.length);

// for (let i = 1; i < letras.length; i++) {
//     const element = letras[i];
//     console.log(element);
// }

letras.forEach((elemento) => console.log(elemento))

//push --- shift ---  pop

var letras = ['a','s','d','f','g','h','z'];
letras.push('q', 'w');
console.log(letras);

var letras = ['a','s','d','f','g','h','z'];
letras.push('q', 'w');
console.log(letras);
var primerElemento = letras.shift();
console.log(letras);
console.log(primerElemento);
letras.pop();
console.log(letras);
var ultimoElemento = letras.pop();
console.log(ultimoElemento);

// map
var estudiantes = ['alex','seba','diego','fabiana','giselle','hilda','zulma'];
var asistenscia = estudiantes.map((nombre) => {
    return {
        nombre: nombre,
        asistencia : false
    }
})
console.log(estudiantes);
console.log(asistenscia);
console.log(estudiantes);

var estudiantes = ['alex','seba','diego','fabiana','giselle','hilda','zulma'];
var asistenscia = estudiantes.map((nombre) => `${nombre}.`)
console.log(estudiantes);
console.log(asistenscia);
console.log(estudiantes);

var productos = [
    {nombre: 'camisetas', precio: 15},
    {nombre: 'zapatilla', precio: 20},
    {nombre: 'camipantalonsetas', precio: 25},
]
var productosImpuestos = productos.map((productos) => {
    //productos.impuesto = .12;
    return {
        ...productos,   //spredd operador JS6
        impuesto: .12
    }
})

var precios = productos.map((productos ) => productos.precio)
console.log(productos);
console.log(productosImpuestos);
console.log(precios);