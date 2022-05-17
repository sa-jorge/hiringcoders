//type assertions 

interface JogoAssertion {
    nome: string;
    descricao: string;
}

let game = <JogoAssertion> {};
//let game = {} as JogoAssertion;
game.nome = 'Valorant';
game.descricao = 'FPS pra passar raiva.'
