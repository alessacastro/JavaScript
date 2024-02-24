/* Cálculo de pagamento
    Calcular o valor a ser pago dependendo das condições listadas:
    - Débito à vista, recebe 10% de desconto;
    - À vista dinheiro ou pix, 15% de desconto;
    - Em 2x, sem juros
    - 3x ou mais, juros de 10%
 */

const precoEtiqueta = 499;
const formaPagamento = 'credito';
const viaPagamento = 'cartao';
const parcelas = 4;
let valorTotal;

if (formaPagamento == 'debito') {                               /* contempla as condições de débito a vista em dinheiro, pix ou cartão */
    if (viaPagamento == 'dinheiro' || viaPagamento== 'pix'){
        valorTotal = precoEtiqueta * 0.85;
        console.log('O preço a ser pago é de', valorTotal.toFixed(2));
    } else if (viaPagamento == 'cartao'){
        valorTotal = precoEtiqueta * 0.9;
        console.log('O preço a ser pago é de', valorTotal.toFixed(2));
    }
} else if (formaPagamento == 'credito') {                       /*contempla as condições de crédito com e sem juros */
    if (parcelas <= 2){
        valorTotal = precoEtiqueta;
        console.log('O preço a ser pago é de', valorTotal.toFixed(2));
    } else {
        valorTotal = precoEtiqueta * 1.1;
        console.log('O preço a ser pago é de', valorTotal.toFixed(2));
    }
} 


