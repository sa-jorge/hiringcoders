const gatos: string[] = [
    'Pimenta', 
    'Tofu',
    'lebeau'
];

function exibeGatos(gatos: string[]) {
    return `Os gatos são: ${gatos.join(', ')}`;
}

console.log(exibeGatos(gatos));