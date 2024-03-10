const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const body = document.body;
const ul = document.createElement('ul');
body.append(ul)


function pintarList(array, contenedor) {

    for (let elemento of array) {

        const li = document.createElement('li')
        li.textContent = elemento
        contenedor.append(li)
    }

}

pintarList(apps, body);


