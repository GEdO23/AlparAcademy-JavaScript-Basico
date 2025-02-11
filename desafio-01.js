// Alpar Academy - Rocket Program 2ª edição
// JavaScript Básico - Dia 01
// Desafio 01 - Fórmula de Bhaskara
// gabriel.eringer@alpar.com.br

/**
 * Faça um programa em Javascript para calcular os valores x1 e x2 da fórmula de Bhaskara,
 * usando as variáveis a, b e c, e mostre os valores x1 e x2. 
 * Usando os operadores de atribuição e aritméticos.
 */

let a = 1;
let b = -3;
let c = -54;

/**
 * Realiza o calculo da fórmula da discriminante da fórmula de bhaskara.
 * @param {number} a 
 * @param {number} b 
 * @param {number} c 
 * @returns O resultado delta da fórmula de bhaskara.
 */
function getDelta(a, b, c) {
    return b ** 2 - 4 * a * c;
}

/**
 * Realiza o calculo da fórmula de bhaskara.
 * @param {number} a 
 * @param {number} b 
 * @param {number} c 
 * @returns Um array que contém os dois possíveis 
 * resultados [x1, x2] da fórmula de bhaskara.
 */
function getBhaskara(a, b, c) {
    let delta = getDelta(a, b, c);
    let x1 = (-b + Math.sqrt(delta)) / (a * 2);
    let x2 = (-b - Math.sqrt(delta)) / (a * 2);
    return [x1, x2];
}

let resultadoDaFormulaDeBhaskara = getBhaskara(a, b, c);
console.log("x1: " + resultadoDaFormulaDeBhaskara[0]);
console.log("x2: " + resultadoDaFormulaDeBhaskara[1]);