// Faça um programa que imprima na tela a tabuada de um número
// qualquer escolhido pelo usuário até o 10.

let tabuadaEscolhida = parseInt(prompt("Digite um número de 1 a 10"))

// 1 numero dentro da condicao do for - inicializado - variavel
// 2 numero dentro da condicao do for - condição - verifica a volta da variavel
// 3 numero dentro da condicao do for - incremento - soma as voltas
// i++ igual a i = i+i

// ====== TABUADA ======

console.log(`//========TABUADA X ${tabuadaEscolhida}=======`);

for(let i = 1; i <=10; i++){
    console.log(tabuadaEscolhida + " X " + i + " = " + (tabuadaEscolhida * i));
    
}