// Booleanos são variaveis true e false 
// Vamos aprender tmb como chama funções dentro de funções

// O exercicio abaixo é o mesmo das estruturas de repetições
//No exercício abaixo devemos calcular a média de alguns alunos de duas turmas diferentes 
//e imprimi-las, porém se a média for menor que 5 deve ser avisado. 

// Definindo os dados para o cálculo 
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

//Estrutura for e função calculaMedia (1)
function calculaMedia(alunos){
    let soma = 0; 
    for (let i = 0; i < alunos.length; i++) {
        soma = soma + alunos[1].nota 
    }
    const media = soma / alunos.length
    return media 
}

// Chamando a função 1
const media1 = calculaMedia(alunosTurmaA)
const media2 = calculaMedia(alunosTurmaB)

// Função Envia Mensagem (2)
function EnviaMensagem (media, turma){
    if (media > 5) {
        console.log(`A media da turma ${turma} foi de ${media}`)
    } else {
        console.log (`A media da turma ${turma} é menor que 5`)
    }
}
//Chamando a função 2
EnviaMensagem(media1 , 'turma A')
EnviaMensagem(media2 , 'turma B')

//BOOLEANOS 
// Marcar aluno como reprovado se a nota for menor que 5
// E enviar uma mensagem 

// Para isso vamos criar uma função para marcar os alunos como preorvados 
// O for of deve utilizar o parametro de alunos de dentro da função
function marcarComoReprovado(aluno){
    aluno.reprovado = false;
    if (aluno.nota < 5){
        aluno.reprovado = true;
    }
}

function enviarMensagemReprovado(aluno){
    if (aluno.reprovado){
        console.log(`o Aluno ${aluno.nome} está REPROVADO!`)
    }
}

function alunoReprovado(alunos){
    for (let aluno of alunos){
        marcarComoReprovado(aluno);
        enviarMensagemReprovado(aluno)
        
    }
}

alunoReprovado(alunosTurmaA)
alunoReprovado(alunosTurmaB)