// Pida un número por prompt, acto seguido irá restando ese número hasta llegar a 0 (usando un bucle),
// cada uno de los números que devuelva la resta en el bucle, hay que decir por console.log si ese número es par.

// let numero = parseInt(prompt("Introduce un valor numérico"));

// for(let i = numero; i > 0; i--){

//     if (i % 2 === 0){
//         console.log("Los numeros pares son ", i)
//     }
// }

// el i es el valor iterador para llevar el control sobre el bucle


// Como ampliación al ejercicio anterior, ahora hará una suma de todos los pares y lo mostrará mediante console.log 
// una vez haya salido del bucle, además de ello, para sufrimiento del alumnado, no sólo nos dirá si un número es par,
//  también nos dirá si es impar, en vez de un if else , usareis una ternaria.

// let num = parseInt(prompt("Introduce un valor numérico"));

// let resultado = 0;

// while(num > 0){

//     if(num % 2 === 0){

//     console.log(num, "es par")

//     resultado += num
    
//     }else {

//         console.log(num, "es impar")

//     }
//     num--;
// }

// console.log(resultado)
// AHORA LO MISMO CON LA TERNARIA

// ejemplo de Ilko

// let number = parseInt(prompt("Introduce un número:"));
// let totalParNumbers = 0;

// while (number > 0) {
//     number%2 != 0 ? (
//         console.log(number + " es un número impar")
//     ) : (
//         console.log(number + " es un número par"),
//         totalParNumbers += number
//     );
//     number--;
// }
// console.log ("La suma total de los números páres es: " + totalParNumbers)


// Proposición de Ejercicio: pedir por prompt dos números, a continuación generar una función que divida los números y ejecutarla.

// let num1 = parseInt(prompt("Introduce dividendo (numero a dividir)"))
// let num2 = parseInt(prompt("Introduce divisor (numero que divide)"))

// const Dividir = (dividendo, divisor) => {

//     let resultado = dividendo / divisor;

//     return resultado;
// }

// let resultado = Dividir(num1, num2)

// console.log(resultado);