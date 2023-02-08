// SPREAD-REST 

// Spread nos permit esparcir elementos de un iterable (array)

// const DescribePersona = (nombre, edad, ciudad, hobbie) => {

//     console.log(nombre);
//     console.log(edad);
//     console.log(ciudad);
//     console.log(hobbie);

// }

// let persona = [ "David", 36, "Valencia", "Padel"]


// Sin spread
// DescribePersona(persona[0], persona[1], persona[2], persona[3]);


// Con spread

// DescribePersona(...persona);


// Rest 

// const SaludaAlumno = (...argumentos) => {

//     console.log(argumentos)
// }


// SaludaAlumno("Felipe", 35, "Valencia", "Cine", "Guitarra");
// SaludaAlumno("Fernando", 38, "Valencia", "entrenar", "Escribir", "Leer");
// SaludaAlumno("Mario", 31, "Valencia", "Patianar")

////////////////////////////////////////////////

///////////////////////////////////////////////

// Una funcion que te diga por console.log la pizza que quieres, y le pasas los ingredientes, recibes los ingredientes 
// con un rest, y luego lo muestras 


// const Pizza = (...ingredientes) => {

//     console.log(ingredientes)

// }


// Pizza ("Pepperonni", "Champiñones", "Mozarella", "Salasa picante")
// Pizza ("Jamor de York", "Tomate", "Mozarella")
// Pizza ("Carne picada", "Bacon", "Salsa barbacoa", "Mozarella", "Pimiento")

