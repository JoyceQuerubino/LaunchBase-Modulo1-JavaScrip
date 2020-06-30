// Calculando a média das notas 
// entre os alunos e enviando 
// uma msg com o calculo da média 

// Se a média for maior q 5 parabenizar a turma 

const aluno1 = 'Joyce'
const notaAluno1 = 9.5

const aluno2 = 'Geisse'
const notaAluno2 = 10

const aluno3 = 'João'
const notaAluno3 = 2

const media = (notaAluno1 + notaAluno2 + notaAluno3) / 3

console.log(media)

if (media > 5) {
    console.log('Parabéns')
} else {
    console.log ('Precisamos melhorar!')
}

//Como ver se o valor é msm maior que a média 
//Desta forma o terminal vai me dar um valor boobleano
console.log(media > 5)
