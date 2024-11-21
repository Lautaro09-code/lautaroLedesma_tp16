const fs = require('fs');

function obtenerBicicletas() {
    const data = fs.readFileSync('./bicicletas.json', 'utf-8');
    const bicicletasArray = JSON.parse(data);
    return bicicletasArray;
}

const bicicletas = obtenerBicicletas();
//console.log(bicicletas);

module.exports = {bicicletas}