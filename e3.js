const notaUm = 5;
const notaDois = 5;
const notaTres = 5;

media = (notaUm + notaDois + notaTres) / 3;

if (media >= 7) {
    console.log("Parabéns, você foi aprovado com média", media)
} else if (media < 5){
    console.log("Você foi reprovado com média", media)
} else {
    console.log('Você está em recuperação com média', media)
}