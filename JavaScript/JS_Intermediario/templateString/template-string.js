let meuNome = 'JJ';  //usar let ao invés de var para reduzir uso de memória
let meuSobrenome = 'Sá';
let minhaProfissao = 'Engenheiro Mecânico';

// Sem template string

console.log('Olá, eu sou ' + meuNome + ' ' + meuSobrenome + ' e minha profissão é: ' + minhaProfissao + '.');

// Usando o template string, o símbolo utilizado é a crase ``

console.log(`Olá, eu sou ${meuNome} ${meuSobrenome} e minha profissão é: ${minhaProfissao}.`);

//É possível realizar operações internas

console.log(`O resultado da soma de 1 + 1 é igual a ${1+1}.`)