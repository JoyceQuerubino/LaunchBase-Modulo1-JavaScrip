// Criar um programa que calcula a média 
// das turmas de alunos e envia 
// uma mensagem com o calculo da media


//Abaixo temos dois vetores que são as turmas
// TURMA A
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

// Para calcular a média, vamos reproveitar o código da média para não repeti-lo utilizando uma função
//Como declarar uma função
//No parentese eu coloco aquilo que eu recebo da função, no caso alunos
function CalculaMedia(alunos){
    return ((alunos[0].nota + alunos[1].nota + alunos[2].nota)/3)
}

//Como usar a função
// Ela pode retornar para uma variavel 
const media1 = CalculaMedia(alunosTurmaA)
const media2 = CalculaMedia(alunosTurmaB)


// Como vamos ter que chamar mais de uma vez essa resposta, podemos tranformar em uma função tmb
//No parentese eu coloco aquilo que eu recebo da função, no caso a 'media', que significam os parametros da função
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
