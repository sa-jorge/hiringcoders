const Cliente = require('../../models/cliente.js')

describe('Clientes', () => {
    beforeEach(()=> {

    })

    it ('Retorna todos', ()=>{
        let clientes = Cliente.todos();
        expect(clientes.length).toEqual(10)
    });

    it ('Valida Propriedades', ()=>{
        let clientes = Cliente.primeiro();
        expect(clientes.id).not.toBeUndefined()
        expect(clientes.nome).not.toBeUndefined()
        expect(clientes.telefone).not.toBeUndefined()
    });

    it ('Nome Maiusculo', ()=>{
        let cliente = Cliente.primeiro();
        cliente.nome = "jorge";
        expect(cliente.nomeUpercase()).toEqual("JORGE")
    });
})
