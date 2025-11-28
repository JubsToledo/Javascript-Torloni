function exibirTabuadaEscolhida() {

    let tabuadaescolhida = parseInt(prompt("Digite um numero da tabuada desejada: "));



    console.log(`//========TABUADA X ${tabuadaescolhida}=======`);

    for (let i = 1; i <= 10; i++) {
        //      2 x 4 =
        console.log(tabuadaescolhida + " X " + i + " = " + (tabuadaescolhida * i));
    }
}



//Chama a minha função
// exibirTabuadaEscolhida();


// crie uma funcao para que solicite o nome da pessoa e exibam

function exibirNomeDoUsuario() {

    let nomeSolicitado = prompt("Digite seu nome: ")

    return nomeSolicitado;
}

// let nome = exibirNomeDoUsuario();

// alert(nome);

function somarDoisNumeros(numero1, numero2) {
    console.log(numero1 + numero2);
}

// passando valores via paramento
somarDoisNumeros(10, 3);

//Crie uma função para o exercicio 08 de Estrutura Condicional
// Passe via parametro o peso e a altura


function calcularIMC(peso, altura) {

    let imc = peso / (altura * altura);


    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        classificacao = "Peso normal";
    } else if (imc >= 25.0 && imc <= 29.9) {
        classificacao = "Sobrepeso";
    } else if (imc >= 30.0 && imc <= 34.9) {
        classificacao = "Obesidade grau 1";
    } else if (imc >= 35.0 && imc <= 39.9) {
        classificacao = "Obesidade grau 2";
    } else {
        classificacao = "Obesidade grau 3";
    }

    alert("Seu IMC é: " + imc.toFixed(2) + "\nClassificação: " + classificacao);

}

let pesoDigitado = parseFloat(prompt("Digite seu peso em kg:"));
    let alturaDigitada = parseFloat(prompt("Digite sua altura em metros:"));

    calcularIMC(pesoDigitado, alturaDigitada);






