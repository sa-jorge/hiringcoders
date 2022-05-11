function soma(operadorA, operadorB) {
    var resultadoC = operadorA + operadorB;
    return resultadoC;
}

function olaGama(nome) {
    console.log('Olé Gama! Você é o ' + nome);
} 

var resultadoDaSoma = soma(1,2);
var resultadoNovoDaSoma = soma(10, 99);
console.log(resultadoDaSoma);
console.log(resultadoNovoDaSoma);

olaGama('JS')