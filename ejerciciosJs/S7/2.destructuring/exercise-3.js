/**En base al siguiente javascript, usa destructuring para crear 2 variables igualandolo a la función e imprimiendolo por consola.
`` */


const animalFunction = () => {
    return { name: 'Bengal Tiger', race: 'Tiger' }
};

// PRIMERA FORMA QUE SE PUEDE ENTENDER EL EJERCICIO

const zoo = { name: 'Bengal Tiger', race: 'Tiger' };
const { name, race } = zoo;

console.log(zoo)


// SEGUNDA FOMRA

const var1 = console.log(animalFunction());
const var2 = console.log(animalFunction());



