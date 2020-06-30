// Desafio 1-3 - Funções e estruturas de repetição

//Crie um programa que armazena um array de usuários (objetos), cada usuário tem um nome e suas tecnologias (novo array),
// Percorra a lista de usuários com uma estrutura de repetição imprimindo em tela as informações dos usuários:
// Exemplo: Carlos trabalha com HTML, CSS

// OBS.: 
// - Arrey = [ ] - tem listas de informações de um mesmo tipo
// - obj = { } - tem listas de informações de vários tipos

const usuarios = [
    { nome: "Joyce ", tecnologias: ['HTML', "CSS", "JavaScript"] }, 
    { nome: "Geisse", tecnologias: ['HTML', "CSS" ] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS" ] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
]


//Pegue uma posição do arrei, e imprima, e faça isso até imprimir todas as posições. 
// para umaPosicaoDoArrey de usuarios
//  for    variavei       of  objeto
for (umaPosicaoDoArrey of usuarios){
    console.log(umaPosicaoDoArrey)
}

//Para pegar uma unica prorpeidade desse arrya, varias vezes 
// Para usuario de usuarios 
for (usuario of usuarios){
    console.log(usuario.nome)
    // faça alguma coisa 
}

//Então apra imprimir todos basta 
// O join transforma os dados em string e permite adicionar virgulas
for (usuario of usuarios){
    console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(", ")}`)
}



// Busca por tecnologia 
console.log('DESAFIO 2 - Busca por tecnologia')

//Baseado no desafio anterior, utilize a mesma lista de usuários construída.
//Crie uma função que recebe os dados de um objeto de usuário e retorna SE o usuário trabalha com CSS ou não. 
//Essa função deve retornar um boolean true/false.

function checaSeUsuarioUsaCSS(usuario) {
    // Percorra o array de tecnologias do usuário até encontrar se ele trabalha com CSS
    // SE encontrar, retorne true da função, caso contrário retorne false

    for (let tecnologia of usuario.tecnologias ){
        const temCSS = tecnologia === 'CSS'
        if(temCSS){
            return true;
    }
  }
  return false // Este false, é para o caso de não encontrar um 'true' e p/ q não apareça indefined 
}
  

  for (let pessoa of usuarios){
    const pessoaComCSS = checaSeUsuarioUsaCSS(pessoa)
    console.log(pessoa.nome)
    console.log(pessoaComCSS)
  }

  // CURIOSIDADES DE FUNÇÕES
  // Funções não precisam obrigatóriamente RETORNAR ou RECEBER valores


// OBS.: 6 coisas que vc PRECISA saber sobre funções
// 1. Escrever uma função - 20%
// 2. Saber como enviar dados para dentro de uam função (qualquerCoisa) - 20%
// 3. Saber como enviar um dado para fora da função 'return dado' - 20%
// 4. Saber utilizar a função ou Executar a função - 20%
// 5. Saber com o enviar os dados para dentro da função QUANDO EXECUTAR ELA -20% 
// Obs.: Devemos enviar variaveis que tenhamos criado antes no nosso projeto 
// 6. Saber capturar o dado enviado de dentro para fora 

/* 
    Posso colocar qualquer nome nos parenteses da função,
    E dentro da função eu devo usar os nomes colocados no parenteses
    porém na hora de chamar a função, os valores passados nela, precisam ter 
    aparecidos no escopo global do meu código. 

    ex: 
    valor = 20
    function checaSeUsuarioUsaCSS(qualquerCoisa) {
        console.log(qualquerCoisa)
  }

  checaSeUsuarioUsaCSS(valor)

*/   