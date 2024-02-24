/* cálculo do IMC
    IMC = peso / ( altura * altura)
 */

const altura = 1.80;
const peso = 52;
const imc = peso / (altura * altura);

if (imc < 18.5) {
    console.log('Você está abaixo do peso'); 
} else if (18.5 >= imc && imc < 25){
    console.log('Você está com peso normal');
} else if ( 25 >= imc && imc < 30) {
    console.log('Você está acima do peso');
} else if (30 >= imc && imc < 40) {
    console.log('Você está obeso');
} else {
    console.log('Você está com obesidade grave');
}