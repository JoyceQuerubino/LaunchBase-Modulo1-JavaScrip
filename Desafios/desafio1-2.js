// DESAFIO 1 - OBJETOS
// Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado empresa. Os dados a serem armazenados são:
//Nome: Rocketseat
//Cor: Roxo
//Foco: Programação
//Endereço:
//  Rua: Rua Guilherme Gembala
//  Número: 260

const empresa = {
    nome: 'Rocketseat', 
    cor: 'Roxo', 
    Foco: 'Programação', 
    // Posso utilizar objetos intercalados ( objetos podem ter objetos)
    endereco: {
        rua: 'Rua Guilherme Gembala', 
        numero: 260

    }
}

console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereco.rua}, ${empresa.endereco.numero}`)

// DESAFIO 2 - VETORES E OBJETOS
//Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.
//Um programador pode trabalhar com várias tecnologias, por isso armazene essas tecnologias em um array.
//As tecnologias também devem ser objetos contendo nome e especialidade
// Imprima em tela o nome e especialidade da primeira tecnologia que o usuário utiliza no seguinte formato:
//O usuário Carlos tem 32 anos e usa a tecnologia C++ com especialidade em Desktop

const programadora = {
    nome: 'Joyce', 
    idade: 21, 
    tecnologias: [
        {nome: 'C#', especialidade: 'Desktop'}, 
        {nome: 'JavaScript', especialidade: 'Web/Mobile'}, 
        {nome: 'HTML', especialidade: 'Web/Mobile'}, 
        {nome: 'CSS', especialidade: 'Web/Mobile'}, 
    ]
}

console.log(`O usuário ${programadora.nome}, tem ${programadora.idade} anos, e usa as seguintes tecnologias: `) 
console.log(` - ${programadora.tecnologias[0].nome} com especialidade em ${programadora.tecnologias[0].especialidade} `) 
console.log(` - ${programadora.tecnologias[1].nome} com especialidade em ${programadora.tecnologias[1].especialidade}`)
console.log(` - ${programadora.tecnologias[2].nome} com especialidade em ${programadora.tecnologias[2].especialidade}`)
console.log(` - ${programadora.tecnologias[3].nome} com especialidade em ${programadora.tecnologias[3].especialidade}`)