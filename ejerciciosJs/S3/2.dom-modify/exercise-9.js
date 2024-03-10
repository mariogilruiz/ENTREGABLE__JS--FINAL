const capDivs = document.querySelectorAll('.fn-insert-here');

for (let div of capDivs) {
    const crearP = document.createElement('p');
    crearP.textContent = 'Voy dentro!';
    div.appendChild(crearP)
}
