// ES6


// funcion suma clasic 
// function Suma (a, b) {

//     return a + b;
// };


// funcion suma arrow

// const Suma = (a, b) => {
//     return a + b;
// };

// funcion sum arrow inline (aqui la flecha indica un return), esto vale para funciones de una linea

// const Suma = (a, b) => a + b ;



//Arrow functions que devuelven objetos...

// const Film = (titulo,year,genero) => (
//     {
//         año: year, 
//         nombrePeli : titulo,
//         genre: genero
//     }
// );

// const resultado = Film("La vida es bella", 2001, "Drama");

// console.log(resultado);



// MAPEAR 

// let animal = ["perro", "gato", "loro", "tigre", "mapache", "nutria", "serpiente"]

// let animales = animal.map(bicho => bicho + "s");

// console.log(animales)

// let numeros = [1, 200, 7000000, 357, 0, 2000];

// let mult10 = numeros.map(u => u * 10);

// console.log(mult10)



// ejemplo 1


// let calculaIva = (precio, tasa = 0.21) => {

//     return precio + precio * tasa;
// }

// let resultado = calculaIva(200)

// console.log(resultado)

// ejercicio 2

// let precio = parseFloat(prompt("Introduce precio"));

// let Iva = parseFloat(prompt("Introduce el Iva"))/100;

// let calculaIva = (precio, Iva) => {

//     return precio + precio*Iva;
// }


// let resultado = calculaIva(precio, Iva)
// console.log(resultado)