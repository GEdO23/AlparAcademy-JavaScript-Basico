// Alpar Academy - Rocket Program 2ª edição
// JavaScript Básico - Dia 02
// Desafio 02 - Fórmula de Bhaskara com condicionais
// gabriel.eringer@alpar.com.br

/**
 * Melhore o programa de Bhaskara do desafio anterior, adicionando IFs para verificar se:
 * a) A variável “a” é válida (não pode ser zero);
 * b) Se não existem raízes reais, e informar;
 * c) Se existe apenas uma raiz real, e informar essa raiz;
 * d) Se existem duas raízes reais, e as informar
 */


/**
 * Realiza o calculo da fórmula da discriminante da fórmula de bhaskara.
 * @param {number} a Coeficiente a
 * @param {number} b Coeficiente b
 * @param {number} c Coeficiente c
 * @param {boolean} exibirCalculos A função deve ou não exibir os calculos realizados 
 * @returns O resultado delta da fórmula de bhaskara.
 */
function getDelta(a, b, c, exibirCalculos) {
    if (exibirCalculos) {
        console.log("Δ = b² - 4ac");
        console.log("Δ = " + b + "² - 4 * " + a + " * " + c);
        console.log("Δ = " + (b ** 2) + " - (" + (4 * a * c) + ")");
        console.log("Δ = " + (b ** 2 - 4 * a * c));
    }
    return b ** 2 - 4 * a * c;
}


/**
 * Realiza o calculo da fórmula de bhaskara.
 * @param {number} a Coeficiente a
 * @param {number} b Coeficiente b
 * @param {number} c Coeficiente c
 * @param {boolean} exibirCalculos A função deve ou não exibir os calculos realizados 
 * @returns Um array que contém os dois possíveis 
 * resultados [x1, x2] da fórmula de bhaskara.
 */
function getBhaskara(a, b, c, exibirCalculos) {
    if (exibirCalculos) {
        console.log("a = " + a + ";");
        console.log("b = " + b + ";");
        console.log("c = " + c + ";");
        console.log("Calculando o delta...");
    }

    let delta = getDelta(a, b, c, exibirCalculos);
    let x1 = (-b + Math.sqrt(delta)) / (a * 2);
    let x2 = (-b - Math.sqrt(delta)) / (a * 2);

    if (exibirCalculos) {
        console.log("Calculando o bhaskara...");
        console.log("x = -b ± √Δ / 2a");
        console.log("x = " + -b + " ± √" + delta + " / 2 * " + a);
        let raizDeDelta = Math.sqrt(delta);
        if (raizDeDelta) {
            console.log("x = " + -b + " ± " + raizDeDelta + " / " + (2 * a));

            console.log("x1 = " + -b + " + " + raizDeDelta + " / " + (2 * a));
            console.log("x1 = " + (-b + raizDeDelta) + " / " + (2 * a));
            console.log("x1 = " + x1);

            console.log("x2 = " + -b + " - " + raizDeDelta + " / " + (2 * a));
            console.log("x2 = " + (-b - raizDeDelta) + " / " + (2 * a));
            console.log("x2 = " + x2);
        }
    }

    if (delta < 0) {
        console.log("O delta é menor que zero (" + delta + " < 0)");
        console.log("Não existem raízes reais");

    } else if (delta == 0) {
        console.log("O delta é igual a zero");
        console.log(x1 + " é a única raiz real encontrada");
    } else {
        console.log("O delta é maior que zero (" + delta + " > 0)");
        console.log(x1 + " e " + x2 + " são as duas raízes reais encontradas");
    }

    return [x1, x2];
}


let a = 1;
let b = -3;
let c = -54;

if (a != 0) {
    console.log("========== CALCULADORA DE BHASKARA ==========");
    getBhaskara(a, b, c, true);
} else {
    console.log("O coeficiente 'a' não pode ser igual a zero!");
}