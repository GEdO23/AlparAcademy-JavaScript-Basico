// Alpar Academy - Rocket Program 2ª edição
// JavaScript Básico - Dia 03
// Desafio 03 - Jogo de adivinhação
// gabriel.eringer@alpar.com.br

/**
 * Crie um programa que simula um jogo de adivinhação. 
 * O programa deve gerar um número aleatório entre 1 e 100 e permitir que o usuário tente adivinhar o número. 
 * O programa deve informar se o palpite é maior ou menor que o número secreto até que o usuário acerte.
 * 
 * Regras:
 * 1. O número secreto deve ser gerado aleatoriamente entre 1 e 100.
 * 2. O usuário pode fazer quantas tentativas quiser até acertar.
 * 3. Após cada tentativa, o programa deve exibir se o número é maior ou menor que palpite.
 * 4. Quando o usuário acertar, o programa deve exibir uma mensagem de parabéns e o número de tentativas usadas.
 * 
 * Dica:
 * Para gerar um número aleatório em Javascript, você pode usar o código:
 * Math.round(Math.random() * 100);
 * Math.random() é uma função que gera um número aleatório entre 0 e 1, 
 * e multiplicando por um número, você pode obter valores entre 0 e o número escolhido;
 * Math.round() arredonda um número para inteiro, 5.4 é arredondado para 5, e 5.5 é arredondado para 6.
 */

const NUMERO_ALEATORIO = Math.round(Math.random() * 100);

let numeroDeTentativas = 1;

let inputChuteDoUsuario = document.getElementById("inChuteDoUsuario");
let btnEnviarChute = document.getElementById("btnEnviarChute");
let resultado = document.getElementById("resultado");

console.log(NUMERO_ALEATORIO);

btnEnviarChute.addEventListener("click", () => {
    document.getElementById("resultadoGroup").hidden = false;

    if (Number(inputChuteDoUsuario.value) == NUMERO_ALEATORIO) {
        resultado.innerText = "Você acertou!";
        document.getElementById("tentativasGroup").hidden = false;
        document.getElementById("tentativas").innerText = numeroDeTentativas.toString();
    } else {
        resultado.innerText = "Você errou, tente novamente.";
        document.getElementById("tentativasGroup").hidden = true;
        numeroDeTentativas++;
    }
});