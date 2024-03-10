// # Español
// Usa el siguiente código como base y crea 3 funciones llamadas father, sum, subtract. La función sum sumara dos parametros a y b y los retornará. La función substract hará lo mismo pero restando y la función father recibirá como parámetros a, b y una función callback (sum o substract).

// La función father deberá ejecutar la función que reciba como callback y añadir el numero que retorne la función al array numersList.

// Ejecuta varias veces la función father y haz finalmente un console.log de numbersList


const numbersList = [];

function sum(a,b) {
    
    const suma = a + b;
    return suma;
}

function substract(a,b) {
    
    const resta = a - b;
    return resta;
}

function father(a, b,funcion) {
    const capResultm = funcion(a, b)
    numbersList.push(capResultm)

}

father(540, 40112, sum);
father(5440, 4660,sum);
father(5340, 4230,sum);
father(530, 40,substract);
father(50, 450, substract);
father(590, 140, substract);

console.log(numbersList)

