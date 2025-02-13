// Alpar Academy - Rocket Program 2ª edição
// JavaScript Básico - Dia 03
// Desafio Extra - Jogo de Dados
// gabriel.eringer@alpar.com.br

/**
 * O jogador inicia com 100 pontos, 
 * e pode ganhar ou perder pontos ao "jogar" um dado de 6 faces, 
 * de acordo com as regras abaixo:
 * 
 * 1. Se o resultado do dado for ímpar, o jogador recebe 10 pontos
 * 2. Se o resultado do dado for par, o jogador perde 5 pontos.
 * 3. Se a rodada for múltipla de 3, o jogador ganha 15 pontos
 * 4. Se a rodada for múltipla de 4, o jogador perde 20 pontos
 * 5. Se a pontuação do jogador estiver negativa em qualquer momento, ele perde o dobro de pontos até a pontuação estar positiva
 * 
 * O jogo é composto por 20 rodadas, 
 * e o jogador ganha se ele chegar na 20ª rodada 
 * com uma pontuação igual ou superior a 50 pontos.
 * 
 * Vocês não podem usar arrays para a execução do desafio
 * Utilizem os conceitos estudados até o momento para executar
 * O cálculo da pontuação deverá ser exibido, assim como o número da rodada e o resultado do dado.
 * A pontuação final deverá ser exibida na última rodada.
 * Poderá ser exibido em tela avisos de ganho e perda de pontos
 */


const QTD_FACES_DO_DADO = 6;
const QTD_RODADAS = 20;
const QTD_PONTOS_INICIAL = 100;
const PONTUACAO_PARA_GANHAR = 50;
let rodadaAtual = 1;
let pontos = 100;


alert("Bem vindo ao Jogo de Dados da GEdO Tech!");
alert(
    "Instruções:\n" +
    "Você inicia com " + QTD_PONTOS_INICIAL + " pontos, e pode ganhar ou perder pontos ao jogar um dado de " + QTD_FACES_DO_DADO + " faces\n" +
    "1. Se o resultado do dado for ímpar, você recebe 10 pontos\n" +
    "2. Se o resultado do dado for par, você perde 5 pontos\n" +
    "3. Se a rodada for múltipla de 3, você ganha 15 pontos\n" +
    "4. Se a rodada for múltipla de 4, você perde 20 pontos\n" +
    "Obs.: Se sua pontuação estiver negativa em qualquer momento, você perde o dobro de pontos até a pontuação estar positiva."
);

alert("O jogo é composto por " + QTD_RODADAS + " rodadas, você ganha se chegar na " + QTD_RODADAS + "ª rodada com uma pontuação igual ou superior a " + PONTUACAO_PARA_GANHAR + " pontos");

while (rodadaAtual <= QTD_RODADAS) {
    alert("RODADA " + rodadaAtual);

    if (pontos < 0) {
        alert("Você está com uma quantidade de pontos negativa! 😨\nVocê perderá o dobro do normal nesta rodada!");
    }

    if (rodadaAtual % 3 == 0) {
        alert("Você caiu numa rodada multipla de 3! 😮\nVocê ganhou 15 pontos! 😉");
        pontos += 15;
    }

    if (rodadaAtual % 4 == 0) {
        if (pontos < 0) {
            alert("Você caiu numa rodada multipla de 4! 😬\nVocê perdeu 40 pontos... 😭");
            pontos -= 40;
        } else {
            alert("Você caiu numa rodada multipla de 4! 😬\nVocê perdeu 20 pontos... 😢");
            pontos -= 20;
        }
    }

    let numeroDoDado = Math.round(Math.random() * (1 - QTD_FACES_DO_DADO)) + QTD_FACES_DO_DADO;
    alert("Jogando o dado... 🎲");
    alert("O resultado do dado foi " + numeroDoDado);

    if (numeroDoDado % 2 == 0) {
        if (pontos < 0) {
            alert("O resultado foi par, você perdeu 10 pontos... 😭");
            pontos -= 10;
        } else {
            alert("O resultado foi par, você perdeu 5 pontos... 😢");
            pontos -= 5;
        }
    } else {
        alert("O resultado foi impar, você ganhou 10 pontos! 😉");
        pontos += 10;
    }

    rodadaAtual++;
}

alert("FIM DE JOGO");

alert("Pontuação final: " + pontos);

if (pontos >= PONTUACAO_PARA_GANHAR) {
    alert("Sua pontuação foi superior a 50 pontos!\nParabéns!! Você ganhou o jogo! 🥳\nRecarregue a página para tentar novamente");
} else {
    alert("Sua pontuação foi inferior a 50 pontos...\nRecarregue a página para tentar novamente")
}