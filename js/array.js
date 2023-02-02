// ARRAY TUTORIA

// Vamos a crear una función que valide que un número de DNI y una letra son compatibles, para
// ello necesitamos el siguiente algoritmo.
// 1. Realizar el módulo del número del DNI entre 23.
// 2. El resultado de ese módulo es la posición del siguiente array. TRWAGMYFPDXBNJZSQVHLCKET


// let numeroDni = parseInt(prompt("Dame un numero de DNi"));
// let letra = prompt("dame la letra del DNI anterior").toUpperCase();

// let arrayLetras = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E","T"];
// let resultadoModulo = numeroDni % 23;

//     if(arrayLetras[resultadoModulo] === letra){

//         console.log("El DNI es correcto")

//     }else {
//         console.log("El DNI no es correcto")
//     }


// EJEMPLO MARA :"Crea un programa que genere un número aleatorio del 1 al 100. Pide al usuario que adivine el número. 
// El programa debe decir al usuario si el número que ha dicho es mayor o menor que el número aleatorio 
// y seguir pidiéndole números hasta que lo adivine."

// let aleatorio = Math.ceil(Math.random() * 100);
// let turno = true;

// let numeroUsuario = parseInt(prompt("Intenta adivinar el número 1 | 100 -- Turno del player 1"));

// let respuesta;
// let intentosP1 = 1;
// let intentosP2 = 1;

// while(numeroUsuario !== aleatorio){

//     if(turno){
//         //Esto es como decir que turno es true.....
//         intentosP1++;
//     } else {
//         intentosP2++;
//     }

//     turno = !turno;

//     respuesta = `${(numeroUsuario > aleatorio) ? "El número es menor" : "El número es mayor"} | Le toca al ${(turno === true) ? "player 1" : "player 2 "}`;

//     numeroUsuario = parseInt(prompt(respuesta));
// };


// console.log(`Bravo, el número oculto es ${aleatorio} y lo has acertado!!!.`);
// console.log(`El player que lo ha acertado es ${(turno === true) ? `player 1 en ${intentosP1} intentos` : `player 2 ${intentosP2} intentos`}.`);

