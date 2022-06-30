// Do While



//For
for (let i = 0; i < 5; i++){
    // las instrucciones
    console.log('Hola Mundo');
}

//For  -- in
var persona = {
    nombre : 'Esteban', 
    apellido :'Hurtado',
    edad : 44,
    sexo : 'Masculino',
 }
for ( let clave in persona) {
    // intsrucciones
    console.log(clave,persona[clave]);

}

// For -- of, sirve  para objetos iterables

var arreglo =[1,2,3,4,5] ;
for ( let valor of arreglo) {
    // intsrucciones
    console.log(valor);
}


var nombre ='Aprendiendo JS' ;
for ( let valor of nombre) {
    // intsrucciones
    console.log(valor);
}
