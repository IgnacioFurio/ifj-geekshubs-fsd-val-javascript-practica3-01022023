// Objetos de JavaScript

// EJEMPLO BASICO 

// let Alvaro = {
//     nombre : "Alvaro",
//     edad : 29,
//     ciudad : "Almeria",
//     hobbies : {
//         hobbie1 : "Videojuegos",
//         hobbie2 : "Lectura",
//         hobbie3 : "Programar",
//     }
// }


// let Paula = {
//     nombre : "Paula",
//     edad : 29,
//     ciudad : "Ontinyent",
//     hobbies : {
//         hobbie1 : "Puzzles",
//         hobbie2 : "Folklore",
//         hobbie3 : "Programar",
//     }
// }


// let Ruben = {
//     nombre : "Ruben",
//     edad : "41",
//     ciudad : "Vilamarxant",
//     hobbies : {
//         hobbie1 : "Tenis",
//         hobbie2 : "Trail running",
//         hobbie3 : "Programar",
//     }
// }

// let cartelera = {
//     pelicula1 : {
//         titulo : "Lo que el viento se llevó",
//         edad: 13
//     },
//     pelicula2 : {
//         titulos : "Star Wars",
//         edad: 7
//     },
//     pelicula3 : {
//         titulo : "Pulp Fiction",
//         edad : 18
//     },
// }



// // if(Ruben.edad >= cartelera.pelicula1.edad){
// //     console.log(`Ruben puede ver la película ${cartelera.pelicula1.titulo}`)
// // } else{
// //     `La pelicula no es apta para menores de ${cartelera.pelicula1.edad}`
// // };


// -----------------------------------------------------

// EJEMPLO CON UTILIDAD 

// ARRAY DE OBJETOS

// let videojuegos = [
//     {
//         titulo :  ["God of War", "Dios de la Guerra", "De viaje con mi hijo"],
//         plataforma : "Ps2"
//     },
//     {   
//         titulo : ["Dark Souls", "Alma oscura", "Has muerto"],
//         plataforma : "Pc"
//     },
//     {    
//         titulo : ["The Last of Us", "El último de los nuestros", "Zombies veganos"],
//         plataforma : "Ps3"
//     },
//     {        
//         titulo : ["Quake", "Shooter", "NIN"],
//         plataforma : "Pc"
//     },
//     {        
//         titulo : ["Sonic 2", "Erizo", "Tails"],
//         plataforma : "Megadrive"
//     },
// ]


// let juego = prompt("Dime a que juego quieres jugar")

// for(let i = 0; i < videojuegos.length; i++){

//     for(let x = 0; x < videojuegos[i].titulo.length; x++){
    
//         if(juego === videojuegos[i].titulo[x]){
//             console.log(`Esta disponible para ${videojuegos[i].plataforma}`)
//         }

//     };

// };

