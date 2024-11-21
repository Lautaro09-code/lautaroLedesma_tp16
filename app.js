const bicicletas = require('./bicicletas');

const dhBici = {
    bicicletas,

    buscarBici: function(id) {
        const biciEncontrada = this.bicicletas.filter(bici => bici.id === id);
        return biciEncontrada.length > 0 ? biciEncontrada[0] : null;
    },

    venderBici: function(id) {
        const bici = this.buscarBici(id);
        if (bici) {
            bici.vendida = true;
            return bici;
        }
        return "Bicicleta no encontrada";
    },

    biciParaLaVenta: function() {
        return this.bicicletas.filter(bici => !bici.vendida);
    },

    totalDeVentas: function() {
        return this.bicicletas
            .filter(bici => bici.vendida)
            .reduce((total, bici) => total + bici.precio, 0);
    },

    aumentoBici: function (porcentaje) {
        return this.bicicletas.map(bici => ({
            ...bici,
            precio: bici.precio + (bici.precio * (porcentaje / 100))
        }));
    },

    biciPorRodado: function (rodado) {
        return this.bicicletas.filter(bici => bici.rodado === rodado);
    },

    listarTodasLasBici: function () {
        console.log('Listado de bicicletas:');
        this.bicicletas.forEach(bici => {
            console.log(`- ${bici.marca} (ID: ${bici.id}, Rodado: ${bici.rodado})`);
        });
    }
}

/*
console.log(dhBici.buscarBici(1));
console.log(dhBici.venderBici(1));
console.log("Las bicis a la venta son: ", dhBici.biciParaLaVenta());
console.log("El total de ventas es de: ", dhBici.totalDeVentas());

console.log("Aumento del 10% en precios:", dhBici.aumentoBici(10));
console.log("Bicicletas con rodado 26:", dhBici.biciPorRodado(26));
console.log(dhBici.listarTodasLasBici());
*/