//No exercício abaixo devemos calcular a média de alguns alunos de duas turmas diferentes 
//e imprimi-las, porém se a média for menor que 5 deve ser avisado. 

const alunosTurmaA = [
    {
        nome: 'Joyce', 
        nota: 9.5
    },
    {
        nome: 'Geisse', 
        nota: 10
    },
    {
        nome: 'Josicleia', 
        nota: 3.5 
    }
] 

// TURMA B
const alunosTurmaB = [
    {
        nome: 'Fulano', 
        nota: 5
    },
    {
        nome: 'Beutrano', 
        nota: 4
    },
    {
        nome: 'Siclano', 
        nota: 3.5 
    }
] 

//-------------ESTRUTURA DE REPETIÇÃO FOR --------------------------------------
//Estruturas de repetição servem para fazer contagens, ou repetir ações que estão em constantes mudanças. 

//No exemplo abaixo, vamos adicionar uma estrutura de repetição do tipo 'for', 
//porém ela estará dentro de uma função para calcular a média da nota de alguns alunos. 

// Lembre-se que cada parte do for, é separada po ponto e vírgula 
//O length serve para contar o total de alunos. 
function calculaMedia(alunos){
    let soma = 0; 
    for (let i = 0; i < alunos.length; i++) {
        soma = soma + alunos[1].nota 
    }
    const media = soma / alunos.length
    return media 
}

// ---------Continuação do exercicio ----------
const media1 = calculaMedia(alunosTurmaA)
const media2 = calculaMedia(alunosTurmaB)

function EnviaMensagem (media, turma){
    if (media > 5) {
        console.log(`A media da turma ${turma} foi de ${media}`)
    } else {
        console.log (`A media da turma ${turma} é menor que 5`)
    }
}

//Como usar a função 2
//Ela pode ser apenas chamada tmb
EnviaMensagem(media1 , 'turma A')
EnviaMensagem(media2 , 'turma B')

