/*============================

OPERADORES DE COMPARAÇÃO

>       Maior
<       Menor
>=      Maior ou igual a 
<=      Menor ou igual a
==      Igual a
===     Igual e do mesmo tipo
!=      Diferente de 
!==     Diferente, inclusive do tipo   

=============================== */ 

console.log( 5 > 4)  //true
console.log( 5 < 4)  //false
console.log( 5 >= 4) //true
console.log( 4 <= 4 )//true 

console.log('Agora os operadores de igualdade: ')

console.log( 4 == '4')  // True, porque ele só olha o valor da varivael e não o tipo
console.log( 4 === '4') // False, porque o 4 é String   
console.log( 4 != '5')  // True
console.log( 4 !== '5') // True

// Desafio 1
const idade = 16

// Verificar se a pessoa é maior de 18 anos
// Se sim deixar entrar, senão bloquear a entrada
if (idade >= 18){
    console.log ('Pode entrar')
}else {
    console.log('Entrada bloqueada')
}

// Se a pessoa tiver 17 anos 
// Avisar para voltar quando tiver 18
if (idade === 17){
    console.log('Volte quando tiver 18 anos')
} 

/*============================

OPERADORES LÓGICOS

&&  "E" - As duas condições devem ser verdadeiras

||  "OU" - Uma das condições deve ser verdadeira 

!   "NÃO" - Nega uma condição 
 
=============================== */ 

console.log(5 == 5 && 6 == 6 ) // true
console.log(5 == 5 && 6 != 6) //false

console.log(5 != 5 || 6 == 6) //true
console.log(5 == 5 || 6 != 6) //true

console.log( !(5 > 6)) //true
//Estou negando o falso, o que era falso virou verdadeiro, pq 5 não é 
// maior que 6. 

// Desafio 1 - Utilizando os operadores lógicos
// Verificar se a pessoa é maior de 18 anos
const idade = 16

// Se sim deixar entrar, senão bloquear a entrada
// Se a pessoa tiver 17 anos 
// Avisar para voltar quando tiver 18

if (!(idade >= 18 || idede === 17)){
    console.log('Entrada bloqueada')
    console.log('Volte quando tiver 18 anos')
}else {
    console.log ('Pode entrar')
}

/*============================

OPERADORES ARITMÉTICOS 

*   Multiplicação 
/   Divisão 
%   Resto da divisão 
+   Adição 
-   Subtração
 
=============================== */ 

console.log(2 * 2) //4
console.log(2 / 2) //1
console.log(2 % 1.5) //0.5
console.log(2 + 2) //4
console.log(2 - 2) //0
