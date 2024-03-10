// Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y añade al valor de .name el string ' (Visitado)' cuando el valor de la propiedad isVisited = true.


const cities = [{ isVisited: true, name: 'Tokyo' }, { isVisited: false, name: 'Madagascar' }, { isVisited: true, name: 'Amsterdam' }, { isVisited: false, name: 'Seul' }];

const citiesMap = cities.map((citie) => {

    if (citie.isVisited === true) {
        citie.name;
        citie.isVisited = 'visitado';
    } else {
        citie.name;
        citie.isVisited
    }

    return citie;
});

  console.log(citiesMap);






