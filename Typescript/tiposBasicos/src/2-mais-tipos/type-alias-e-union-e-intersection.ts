type User = {
    name: string;
    lastName: string;
    birthday: string;
    age?: number;
}

const jorge: User = {
    name: 'Jorge',
    lastName: 'Sá',
    birthday:'13/01/1994',
}

//union type
// | (Como se fosse o || OR)

type logLevel = 'info' | 'error' | 'debug';

function logMessage(message: string, level: logLevel){
    console.log(`[${level}] - ${message}`)
}

logMessage('uma mensagem info', 'debug')
logMessage('uma mensagem info', 'info')
logMessage('uma mensagem info', 'error')
logMessage('uma mensagem info', 'dasdasd')

//intersection types: &

type About = {
    bio: string,
    interests: string[]
}

type Profile = User & About;

const userWithProfile: Profile = {
    name:'Jorge',
    lastName: 'Sá',
    birthday: '13/01/1994',
    bio: 'Meu nome é Jorge',
    interests: ['gatos', 'musica', 'games']
}