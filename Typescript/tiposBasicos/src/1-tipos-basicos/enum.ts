enum Permissoes {
    admin = 'ADMIN',
    editor = 'EDITOR', 
    comum = 'COMUM'
}

enum Cores {
    red = '#ff0000',
    black = '#000'

}

const usuario = {
    perfil: Cores.red,
    nivel: Permissoes.admin
}

console.log(usuario);