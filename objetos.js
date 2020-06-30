//Objetos são uma coleção de propriedades 
//que recebem valores ou funcionalidades. 

//Como criar o objeto

const aluno01 = {
    nome: 'Joyce',
    nota: 9.8
}

const aluno02 = {
    nome: 'Geisse',
    nota: 10
}

const aluno03 = {
    nome: 'Gabriel',
    nota: 3.5
}

//Como chamar um objeto 
console.log( (aluno01.nota + aluno02.nota + aluno03.nota) / 3)

// Um objeto tmb pode retornar um valor se tiver uma função 
// Neste caso pessoa é um objeto e dentro dele temos o 'correr' que é uma função retorna uma string 

const pessoa = {
    altura: 1.80,
    idade: 24,
    solteiro: true, 
    correr() {
        return "corra forrest "
    }
}

console.log(pessoa.correr)