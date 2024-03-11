/**Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando fetch() para hacer una consulta a la api cuando se haga click en el botón, pasando como parametro de la api, el valor del input. */


const url = 'https://api.agify.io';

const button$$ = document.querySelector('button');
input$$ = document.querySelector('input');



const filtarMostrar = (endPoint) => {
    

    async function cargarDatos(endPoint) {

        const filtro = `${endPoint}?name=${input$$.value}`;

        console.log(filtro);

        const response = await fetch(filtro, { method: 'GET' });

        const data = await response.json();
        
        console.log(data);

    }

    cargarDatos(endPoint);
}

const action = () => {
    
    filtarMostrar(url);
}


button$$.addEventListener('click', action);








