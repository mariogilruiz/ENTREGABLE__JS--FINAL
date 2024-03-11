// Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40. Imprime en un console log el array.

const placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]

const newArray = [];

placesToTravel.forEach((element) => {
    //console.log(placesToTravel)
    if (element.id == 11 || element.id == 40) { 
        console.log(element)
        newArray.push(element)
        // console.log(placesToTravel.splice(1))
        // console.log(element)
    }
})

//console.log(newArray)