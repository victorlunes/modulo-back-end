let somafunc = require('./soma')

console.log(somafunc(9,5))

//quando o código acaba ficando grande, é legal dividir ele em arquivos e depois chamar 
//em um arquivo principal, no caso, criamos arquivos para cada modulo que vamos usar 
//(no exemplo é uma calculadora,criamos arquivos com as funcionalidades de soma, subtração, multiplicação)

//a gente torna esses arquivos um modulo, pra poder chamar ele em qualquer arquivo do sistema, 
//precisamos criar uma variável pra armazenar a function , e pra tornar a function um modulo, a gente coloca 
// module.exports = soma;

//pra chamar esses módulos no arquivo principal, gente usa a função require ( )
//como esta na mesma pasta do seu projeto, você pode colocar require (" ./ soma ") epra isso funcionar, 
//precisamos colocar essa função (require) dentro de uma variavél

//pra chamar os módulos, precisamos colocar eles em variáveis e chamar com o console.log

//let somafunc = require('./soma')

//console.log(somafunc(9,5))

//no caso, a variável que eu fiz foi a de soma, mas eu poderia criar um:

//let multiplicacaofunc = require('./multi')

//console.log(multiplicacaofunc(9,5))