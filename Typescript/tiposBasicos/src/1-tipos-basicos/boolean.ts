let isActive: boolean;

// ...

isActive = true;

function mapearStatusUsuario(status: boolean) {
    if(status) {
        return `Usuário está ativo`;
    } else {
        return `Usuário NÃO está ativo`;
    }
}

console.log(mapearStatusUsuario(true));