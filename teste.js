
// D
const prompt = require('prompt-sync')();
const numeros = [];
for (let i = 0; i < 25; i++) {

  let num = Math.floor(Math.random() * 10 ) + 1;


  numeros.push(num);
}


const maiorNumero = Math.max(...numeros);
const menorNumero = Math.min(...numeros);


console.log('Maior número:', maiorNumero);
console.log('Menor número:', menorNumero);

const prompt = require('prompt-sync')();
let num2 = prompt("Entre com um numero: ");
num2 = Number(num2);
if (num2 % 2 != 0) {
  console.log("Impar");
}


// E 
const prompt = require('prompt-sync')();

let consumoPorRefeicao = parseFloat(prompt("Digite a quantidade de ração consumida pelo cachorro por refeição (em gramas): "));
let pacoteRacaoKg = parseFloat(prompt("Digite o peso do pacote de ração (em kg): "));


let pacoteRacaoGramas = pacoteRacaoKg * 1000;


let numRefeicoes = Math.floor(pacoteRacaoGramas / consumoPorRefeicao);

console.log(`Com o pacote de ${pacoteRacaoKg} kg de ração, é possível servir ${numRefeicoes} refeições.`);


// F
const prompt = require('prompt-sync')();

for(let i = 0; i <= 3; i++){
  let num = Math.floor(Math.random() * 6 ) + 1;
  let num2 = parseFloat(prompt("Digite um numero: "));
  if(num2 == num){
    console.log("Palpite Acertado!");
    console.log("O palpite era: ", num);
    continue;
  } else {
    console.log("Errou, tente novamente!");
    console.log("O palpite era: ", num);
  }
}

