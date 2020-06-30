// Vetores tem o objetivo de agrupar os objetos em uma unica variável 

//Estrutura de um vetor 
// const alunos = []

//Como criar um vetor 

const alunos = [
    //Dentro dele adicionamos os objs entre chaves
    //Lembre-se de por virgulas para separar os objtos e seus atributos
    {
        nome: 'Joyce', 
        nota: 9.5
    },
    {
        nome: 'Geisse', 
        nota: 10
    },
    {
        nome: 'Gabriel', 
        nota: 3.5 
    }
] 

//Outras formas de declarar vetores
const nomesAlunos = ['Joyce','Geisse', 'Gabriel' ]
console.log(nomesAlunos)


//Como chamar um vetor
//Utilizo o nome_do_vetor [posição] . atributo
console.log((alunos[0].nota + alunos[1].nota + alunos[2].nota)/3)

//Como ver todos os alunos do array
console.log(alunos)

