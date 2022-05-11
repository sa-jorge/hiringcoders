var numeroSorteado = 10;
var possivelValor = 0;

var achou = false;

var tabuada = 7;
var repeticoes = 0;

while (!achou) {
    possivelValor += 1;
    if (numeroSorteado === possivelValor) {
        achou = true;
    } else {
        console.log("Possivel valor não corresponde ao número sorteado " + possivelValor)
    }
}