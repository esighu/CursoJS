/**
 * Operadores
 */

/** 
 * Operadores de Asignacion 
 * 
 * */

//Operador asignacion

var x = 2;
var y = true;

// OPerador de asignacion de adiccion (+=)

var x = 2;
var y = 1;
x += y;
console.log(x);

// OPerador de asignacion de resta (-=)

var x = 6;
var y = 5;
y -= x;
console.log(y);

//Operadores Asignacion de multiplicacion (*=)

var x = 6;
var y = 5;
y *= x;
console.log(y);

// Operadores de Asignacion de division (/=)
var x = 6;
var y = 5;
y /= x;
console.log(y);

// Operadores de Asignacion de residuo/modulo (%=)
var x = 6;
var y = 12;
y %= x;
console.log(y);

// Operadores de Asignacion de exponencicaion (**=)
var x = 2;
var y = 12;
y **= x;
console.log(y);
/**Operadores de comparacion
 * 
 */

//Operadores de comparacion (==)
console.log (3 == 3);
console.log (3 == '3');

// Operador no es igual (!=)
console.log (3 != 3);
console.log (3 != '4');

//Operador estrictamente igual (===)
console.log (3 === 3);
console.log (3 === '3');

//Operador de desigual estricta (!==)
console.log (3 !== 3);
console.log (3 !== '3');
console.log (3 != 3);
console.log (3 != '3');

//Operadores <, <=, >, >=
console.log (3 >= 3);
console.log (3 > '3');
console.log (3 <= 3);
console.log (3 < '3');

/**
 * OPeradores aritmeticos
 * +,-,*,/,%,**
 */

 console.log (3 + 3);
 console.log (3 - '3');
 console.log (3 * 3);
 console.log (3 / '3');
 console.log (3 % '3');
 console.log (3 ** '3');

 // Operadores de incremento (++)

 var numero = 0;
 console.log (++numero);
 console.log (numero++);
 console.log (numero);

 
 // Operadores de decremento (--)

 var numero = 8;
 console.log (--numero);
 console.log (numero--);
 console.log (numero);

 /**
  * Operadores logicos
  */


 // AND

 
 console.log (true && true);
 console.log (2 > 3 && 1 <=2 );
 console.log (true && false);
 console.log (false && true);
 console.log (false && false);

 //OR

 console.log (!true || false);
 console.log (2 > 3 || 1 <=2 );

 // NOT

 console.log (!true );
 console.log (!false);

 // Operador de cadena o concatenacion (+)
 var x ='Esteban';
 var y = 'esta progresando';
 var z = 'vamos por mas';
 var mensaje = x+' '+y+' '+z;
 console.log(mensaje);

 //Operador condicional (condicion ? valor 1 o valor 2)
 console.log(2 > 3 ? 'el numero es mayor': 'Es menor');

 //OPerador de desectructuracion 

 var persona = {
    nombre : 'Esteban',
    apellido :'Hurtado'
 };

 var {nombre: x, apellido}= persona;
 console.log(x);
 console.log(apellido);
 console.log(persona);

 //desectructuracion de arreglos

 var arreglo = [1,2,3,4,5,6,7];
 var [primeraposicion, dos] = arreglo;
 console.log(primeraposicion);
 console.log(dos);

 /**
  * OPerador de mienbro o acceso de propiedad
  */

 // Notacion punto

 var persona = {
    nombre : 'Esteban', 
    apellido :'Hurtado',
 }

 console.log(persona.nombre);
 console.log(persona.apellido);

 // notacion por []

 var persona = {
    nombre : 'Esteban',
    apellido :'Hurtado'
 }

 console.log(persona['nombre']);
 console.log(persona['apellido']);

 // notacion por [] en arreglos

 var arreglo = [23,25,27,21,30,43,50]

 console.log(arreglo[5]);

 //Operacion de determinacion de tipo (typeof)

 console.log(typeof 'Esteban');
 console.log(typeof 23);
 console.log(typeof true);