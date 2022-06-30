/**
 * Variables
 * 3 formas de definir variables
 * 
 * ver
 * Let
 * const
 */


//variables con VAR

var nombre ='ESteban'; //x=2
console.log(nombre);

var edad =44;
console.log(edad);

var persona = {
    nombre:'Esteban',
    apellido:'Hurtado',
    edad:44,
    direccion:{calle:'sna martin',
                numero: 641
            },
    ciudades:[
        'La Plata',
        'ENsenada',
        'City Bell'
    ]
}
var ciudad;
ciudad = 'Quito';
ciudad= 'Puerto Piramide';
ciudad = 89;
console.log(ciudad);

//variables con Let

let nombre= 'Esteban';
console.log(nombre);

{
    let saludos='Buenas noches';
    console.log(saludos);
}
console.log(saludos);

{
    var saludos='Buenas noches';
    console.log(saludos);
}
console.log(saludos);

// variables con const
const PI_numero= 3.145;
//PI_numero= 24
console.log(PI_numero);

var nombre='Esteban';
var saludos= `tengo sueño ${nombre}

Como estas?
`;
console.log(saludos);