module.exports = class Cliente{
    constructor(){
        this.id = 0
        this.nome = ""
        this.telefone = ""
    }

    static primeiro(){
        return new Cliente()
    }

    nomeUpercase(){
       return this.nome.toUpperCase()
    }

    static todos(){
        return[
            new Cliente(),
            new Cliente(),
            new Cliente(),
            new Cliente(),
            new Cliente(),
            new Cliente(),
            new Cliente(),
            new Cliente(),
            new Cliente(),
            new Cliente(),
        ]
    }
}