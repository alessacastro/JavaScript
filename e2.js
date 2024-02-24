const precoEtanol = 3.42;
const precoGasolina = 5.58;
const distancia = 4000; /* em km */
const gastoMedio = 10; /* em km/L */
let gastoTotal;
let tipoCombustivel = 'gasolina';



if (tipoCombustivel === 'etanol') {
    gastoTotal = distancia / gastoMedio * precoEtanol;
    console.log('o gasto total em combustível será de', gastoTotal, 'reais');
} else if (tipoCombustivel === 'gasolina') {
    gastoTotal = distancia / gastoMedio * precoGasolina;
    console.log('o gasto total em combustível será de', gastoTotal, 'reais')
}

