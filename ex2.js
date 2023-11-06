
// Uso adecuado de let y scope para actualizar una variable

// https://www.w3schools.com/react/react_es6_variables.asp

let puedesPasar = true;
edad = 17;

if (edad < 18) {
    // let puedesPasar = false;
    puedesPasar = false;
}

console.log(puedesPasar) // false

// PREGUNTA: ¿Por qué no se actualiza correctamente la variable 'puedesPasar'?
//Dentro del if estamos declarando una nueva variable puedesPasar, y JS reconoce que es una nueva variable no es la misma que está declarada fuera de la función. Debemos quitar el let de la variable puedesPasar que hay dentro de la función. 