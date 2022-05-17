// classes e funções

class Usuario {
    public nome;
    public idade;
    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }
}

class Player extends Usuario {
    public jogo;
    constructor (nome: string, idade: number, jogo: string) {
        super(nome, idade);
        this.jogo = jogo;
    }

    dizerOJogoAtual() {
        return `Estou jogando, no momento, ${this.jogo}.`
    }

    //static

    static queHorasSao() {
        return Date();
    }
}

const jogador = new Player('Jorge', 28, 'Valorant');
console.log(jogador.dizerOJogoAtual());
console.log(Player.queHorasSao());

// private protected, public

class jogo {
    // public é acessível de forma geral, dentro e fora da classe
    // private faz com que a propriedade só seja acessível dentro da classe
    // protected faz com que a propriedade possa ser lida em classes filho
    //private nome; classe jogoComDescricao não funcionaria
    public nome;

    constructor(nome: string) {
        this.nome = nome;
    }

    dizerNome() {
        return `O nome do Jogo é: ${this.nome}`;
    }
}

// class jogoComDescricao extends jogo{
//     private descricao;

//     constructor (nome: string, descricao: string) {
//         super(nome);

//         this.descricao = descricao;
//     }

//     dizerNomeComDescricao() {
//         return `${this.nome} é um jogo ${this.descricao}`;
//     }
// }

// const ghost = new jogoComDescricao('Ghost of Tsushima', 'de samurai muito loco');
// console.log(ghost.dizerNomeComDescricao());

// interface
interface IJogoComDescricao {
    nome: string;
    descricao: string;
    dizerNomeComDescricao(): string;
}

class jogoComDescricao extends jogo implements IJogoComDescricao {
    public descricao;

    constructor (nome: string, descricao: string) {
        super(nome);

        this.descricao = descricao;
    }

    dizerNomeComDescricao() {
        return `${this.nome} é um jogo ${this.descricao}`;
    }
}