// Alpar Academy - Rocket Program 2ª edição
// JavaScript Básico - Dia 04
// Desafio 04 - Lista de Compras
// gabriel.eringer@alpar.com.br

/**
 * Crie um programa simples que simula um gerenciador de lista de compras. 
 * O usuário poderá adicionar itens à lista, remover itens e visualizar a lista de compras. 
 * O programa deve usar vetores (arrays) e funções para organizar o código.
 * 
 * Regras:
 * 1. O programa deve ter um array chamado listaDeCompras que começa vazio.
 * 2. Deve oferecer as seguintes opções ao usuário:
 * - Adicionar um item à lista.
 * - Remover um item da lista.
 * - Exibir os itens da lista.
 * - Sair do programa.
 * 3. O programa deve rodar até que o usuário escolha sair.
 * 4. As funções devem ser utilizadas para organizar as operações principais:
 * - adicionarItem(item): Adiciona um item ao array.
 * - removerItem(item): Remove um item do array (se existir).
 * - exibirLista(): Mostra todos os itens da lista no console.
 */

const prompt = require('prompt-sync')();
let listaDeCompras = new Array();


/**
 * Adciona um item a lista de compras
 * @param {string} item Nome do item a ser adicionado
 */
function adicionarItem(item) {
    listaDeCompras.push(item);
    console.log(`Item "${item}" adicionado!\n`);
};


/**
 * Remove um item da lista de compras (se existir)
 * @param {string} item Nome do item a ser removido
 */
function removerItem(item) {
    if (listaDeCompras.includes(item)) {
        let i = listaDeCompras.indexOf(item);
        listaDeCompras.splice(i, 1);
        console.log(`Item "${item}" removido!\n`);
    };
};


/**
 * Mostra todos os itens da lista de compras no console
 */
function exibirLista() {
    for (let i = 0; i < listaDeCompras.length; i++) {
        console.log(`${i + 1}. ${listaDeCompras[i]}`);
    };
    console.log("");
};


while (true) {
    console.log(
        "1 - Adicionar item\n" +
        "2 - Remover item\n" +
        "3 - Exibir lista\n" +
        "4 - Sair"
    );
    let opcaoDoUsuario = prompt("Escolha uma opção: ");

    switch (opcaoDoUsuario) {
        case "1":
            adicionarItem(prompt("Digite o nome do item: "));
            break;

        case "2":
            removerItem(prompt("Digite o nome do item para remover: "));
            break;

        case "3":
            exibirLista();
            break;

        case "4":
            console.log("Programa encerrado.");
            break;

        default:
            break;
    }

    if (opcaoDoUsuario == 4) {
        break;
    }
}