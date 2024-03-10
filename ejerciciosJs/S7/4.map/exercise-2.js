// Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad.name y cambia el nombre a 'Anacleto' en caso de que empiece por 'A'.

const users = [{ id: 1, name: 'Abel' }, { id: 2, name: 'Julia' }, { id: 3, name: 'Pedro' }, { id: 4, name: 'Amanda' }];

const mapCharacters = (arraysinMap) => {

    return arraysinMap.map((user) => ({
        name: user.name
    }));
}

const arrayNombres = mapCharacters(users);

for (let user of arrayNombres) {
    if (user.name.startsWith('A')) {
        user.name = 'anacleto'
    }  
}


console.log(arrayNombres) 


