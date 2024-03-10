// Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un console.log(). Para ello, es necesario que crees un .html y un .js.

const url = 'https://api.agify.io?name=michael';

async function cargarDatos(endPonit) {

    const response = await fetch(endPonit, { method: 'GET' })

    const data = await response.json();
    console.log(data)
}
cargarDatos(url)
