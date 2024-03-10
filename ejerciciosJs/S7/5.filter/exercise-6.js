// Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion .includes() para la comprobación.

// Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando .age sea mayor que 35.


const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

function filtrar(arraySinfiltrar) {

    let arrayFiltradaLegends = arraySinfiltrar.filter((streamer) => streamer.gameMorePlayed.includes('Legends'))
    //console.log(streamersFilter)

    for (let filter35 of arrayFiltradaLegends) {
        if (filter35.age > 35) {
            // console.log(filter35.gameMorePlayed.toUpperCase())

            return filter35.gameMorePlayed.toUpperCase();
        }
    }
}

// filtrar(streamers);

console.log(filtrar(streamers))



