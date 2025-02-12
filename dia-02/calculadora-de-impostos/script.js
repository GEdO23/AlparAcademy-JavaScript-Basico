const ICMS_ALEATORIO = Math.floor(Math.random() * (25 - 12 + 1)) + 12;
const CUPONS = ["PROMO15"];

let userInputCupom = document.getElementById("inCupom");
let userInputPreco = document.getElementById("inPreco");
let userInputUf = document.getElementById("inUf");

let userButtonCalcular = document.getElementById("btnCalcular");


class Produto {
    /**
     * @param {number} preco O preço de um produto.
     */
    constructor(preco) {
        this.preco = preco;
        this.frete = 0;
        this.desconto = 0;
        this.total = 0;
    }

    /**
     * Aplica um desconto ao preço do produto
     * @param {number} desconto 
     */
    aplicarDesconto(desconto) {
        this.desconto = desconto;
        this.total -= this.total * (this.desconto / 100);
    }

    /**
     * Aplica um ICMS ao preço do produto
     * @param {number} icms Imposto sobre Circulação de Mercadorias e Serviços
     */
    aplicarICMS(icms) {
        this.total += this.total * (icms / 100);
    }

    /**
     * Aplica um frete ao preço do produto
     * @param {number} frete 
     */
    aplicarFrete(frete) {
        this.frete = frete;
        this.total += frete;
    }
};


/**
 * Formatar para preço
 * @param {number} num O número a ser formatado
 * @returns Uma string formatada como preço. (em Real Brasileiro)
 */
function paraPreco(num) {
    return "R$" + num.toFixed(2);
}


/**
 * Exibir na UI o resultado dos calculos realizados
 * @param {Produto} produto 
 */
function exibirResultadoNaUI(produto) {
    document.getElementById("resultado").hidden = false;
    document.getElementById("produtoPreco").innerText = paraPreco(produto.preco);
    document.getElementById("produtoDesconto").innerText = produto.desconto + "%";
    document.getElementById("icms").innerText = ICMS_ALEATORIO + "%";
    document.getElementById("frete").innerText = paraPreco(produto.frete);
    document.getElementById("produtoPrecoTotal").innerText = paraPreco(produto.total);
}


userButtonCalcular.addEventListener("click", () => {
    let produto = new Produto();

    // Os calculos e exibição do resultado só serão realizados caso o usuário tenha colocado um preço de produto no formulário
    if (userInputPreco.value) {
        produto.preco = parseFloat(userInputPreco.value);
        produto.total = produto.preco;

        // Validando cupom do usuário e aplicando desconto ao produto
        for (let cupom of CUPONS) {
            if (userInputCupom.value === cupom) {
                produto.aplicarDesconto(15);
                break;
            }
        }

        produto.aplicarICMS(ICMS_ALEATORIO);

        // Aplicando fretes diferentes dependendo do UF selecionado pelo usuário
        switch (userInputUf.value) {
            case "sp":
                produto.aplicarFrete(10);
                break;

            case "rj":
                produto.aplicarFrete(20);
                break;

            default:
                produto.aplicarFrete(30);
                break;
        }

        exibirResultadoNaUI(produto)
    }
})

