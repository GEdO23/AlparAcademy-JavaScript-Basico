// Rocket Program 2ª edição
// JavaScript Básico - Dia 01
// Desafio Extra - Calculadora de impostos
// gabriel.eringer@alpar.com.br

/**
 * A calculadora precisa conter 3 variáveis: 
 * - uma que recebe um preço de um produto(em decimal, por favor)
 * - uma que informe se o produto tem direito a desconto (desconto de 10%)
 * - e o ICMS (que pode variar entre 12 e 25%)
 * 
 * O ICMS deverá ser calculado após o produto receber (ou não desconto). 
 * 
 * O programa deverá retornar o valor do produto original, 
 * se ele teve desconto, o valor do produto com desconto 
 * e o valor do produto com o imposto aplicado. 
 * 
 * Pra tornar as coisas mais interessantes, como o valor do imposto é variável, 
 * vamos brincar de loteria e deixar o valor do imposto randômico (entre os valores informados.... 12 a 25%)
 */

class Produto {
    /**
     * @param {number} preco O preço de um produto.
     * @param {boolean} temDireitoADesconto Se o produto tem direito a desconto ou não.
     */
    constructor(preco, temDireitoADesconto) {
        this.preco = preco;
        this.temDireitoADesconto = temDireitoADesconto;
    }

    /**
     * Aplica um desconto ao preço do produto, caso o mesmo tenha direito a desconto.
     * @param {number} desconto 
     */
    aplicarDesconto(desconto) {
        if (this.temDireitoADesconto) {
            this.preco -= this.preco * (desconto / 100);
            console.log("Aplicado desconto de " + desconto + "% ao produto");
            console.log("Valor do produto com desconto: R$" + this.preco);
        }
    }

    /**
     * Aplica um ICMS ao preço do produto.
     * @param {number} icms Imposto sobre Circulação de Mercadorias e Serviços
     */
    aplicarICMS(icms) {
        this.preco += this.preco * (icms / 100);
        console.log("Aplicado imposto de " + icms + "% ao produto");
    }
};

/**
 * Calcula e retorna um preço aleatório de um produto.
 * @param {number} min Valor mínimo
 * @param {number} max Valor máximo
 * @returns Um preço aleatório entre um valor mínimo e um valor máximo.
 */
function getPrecoAleatorio(min, max) {
    let precoAleatorio = Math.random() * (max - min + 1) + min;
    let precoFormatado = precoAleatorio.toFixed(2);
    return Number(precoFormatado);
}

const PRODUTO_DESCONTO = 10;
const ICMS_ALEATORIO = Math.floor(Math.random() * (25 - 12 + 1)) + 12;
let precoAleatorio = getPrecoAleatorio(0, 10_000);
let produto = new Produto(precoAleatorio, true);

console.log("Valor original do produto: R$" + produto.preco);
produto.aplicarDesconto(PRODUTO_DESCONTO);
produto.aplicarICMS(ICMS_ALEATORIO);
console.log("Valor final do produto: R$" + produto.preco);