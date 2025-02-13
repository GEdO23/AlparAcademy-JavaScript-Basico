# Alpar Academy JavaScript Básico

Primeiros desafios de JavaScript, da 2ª edição do Programa Rocket, da empresa [Alpar](https://alpar.com.br/).

## Dia 01

### Desafio 01 - Fórmula de Bhaskara

Faça um programa em Javascript para calcular os valores x1 e x2 da fórmula de Bhaskara, usando as variáveis a, b e c, e mostre os valores x1 e x2. 
Usando os operadores de atribuição e aritméticos.

### Desafio Extra - Calculadora de Impostos

A calculadora precisa conter 3 variáveis: 
* uma que recebe um preço de um produto(em decimal, por favor)
* uma que informe se o produto tem direito a desconto (desconto de 10%)
* e o ICMS (que pode variar entre 12 e 25%) 

O ICMS deverá ser calculado **após o produto receber (ou não desconto)**.

O programa deverá retornar o valor do produto original, 
se ele teve desconto, o valor do produto com desconto 
e o valor do produto com o imposto aplicado. 

Pra tornar as coisas mais interessantes, como o valor do imposto é variável, 
vamos brincar de loteria e deixar o valor do imposto randômico (entre os valores informados.... 12 a 25%)

## Dia 02

### Desafio 02 - Fórmula de Bhaskara com condicionais

Melhore o programa de Bhaskara do desafio anterior, adicionando IFs para verificar se:

a) A variável “a” é válida (não pode ser zero);

b) Se não existem raízes reais, e informar;

c) Se existe apenas uma raiz real, e informar essa raiz;

d) Se existem duas raízes reais, e as informar

### Desafio Extra - Calculadora de Impostos v2

Até o momento, a pessoa poderia ganhar um desconto randomicamente (ou não). 
Agora, o comprador pode colocar um cupom "PROMO15", que garante 15% de desconto no valor do produto. 
A pessoa pode colocar o código OU ganhar o desconto.

Vamos também inserir questão de frete para o envio da compra. 
O comprador precisa colocar o estado em que ele está. 
Se for de SP, o frete custa R$10,00. 
Se for do RJ, o frete é R$20,00 e, para os demais estados, o frete é R$30,00

[Acessar site](https://gedotech-calculadora-de-impostos.vercel.app/)

## Dia 03

### Desafio 03 - Jogo de adivinhação

Crie um programa que simula um jogo de adivinhação. 
O programa deve gerar um número aleatório entre 1 e 100 e permitir que o usuário tente adivinhar o número. 
O programa deve informar se o palpite é **maior** ou **menor** que o número secreto até que o usuário acerte.

**Regras:**
1. O número secreto deve ser gerado aleatoriamente entre 1 e 100.
2. O usuário pode fazer quantas tentativas quiser até acertar.
3. Após cada tentativa, o programa deve exibir se o número é maior ou menor que o
palpite.
4. Quando o usuário acertar, o programa deve exibir uma mensagem de parabéns e o
número de tentativas usadas.

**Dica:**

Para gerar um número aleatório em Javascript, você pode usar o código:
Math.round(Math.random() * 100);

Math.random() é uma função que gera um número aleatório entre 0 e 1, e multiplicando
por um número, você pode obter valores entre 0 e o número escolhido;

Math.round() arredonda um número para inteiro, 5.4 é arredondado para 5, e 5.5 é
arredondado para 6.

[Acessar site](https://gedotech-jogo-de-advinhacao.vercel.app/)

### Desafio Extra - Jogo de Dados

O jogador inicia com 100 pontos, e pode ganhar ou perder pontos ao "jogar" um dado de 6 faces, de acordo com as regras abaixo:
 
1. Se o resultado do dado for ímpar, o jogador recebe 10 pontos
2. Se o resultado do dado for par, o jogador perde 5 pontos.
3. Se a rodada for múltipla de 3, o jogador ganha 15 pontos
4. Se a rodada for múltipla de 4, o jogador perde 20 pontos
5. Se a pontuação do jogador estiver negativa em qualquer momento, ele perde o dobro de pontos até a pontuação estar positiva
 
O jogo é composto por 20 rodadas, e o jogador ganha se ele chegar na 20ª rodada com uma pontuação igual ou superior a 50 pontos.
 
    Vocês não podem usar arrays para a execução do desafio
    Utilizem os conceitos estudados até o momento para executar
    O cálculo da pontuação deverá ser exibido, assim como o número da rodada e o resultado do dado.
    A pontuação final deverá ser exibida na última rodada.
    Poderá ser exibido em tela avisos de ganho e perda de pontos

[Acessar site](https://gedotech-jogo-de-dados.vercel.app/)

## Dia 04

### Desafio 04 - Lista de Compras

Crie um programa simples que simula um gerenciador de lista de compras. 
O usuário poderá adicionar itens à lista, remover itens e visualizar a lista de compras. 
O programa deve usar vetores (arrays) e funções para organizar o código.

**Regras:**
1. O programa deve ter um array chamado _listaDeCompras_ que começa vazio.
2. Deve oferecer as seguintes opções ao usuário:
    * **Adicionar um item** à lista.
    * **Remover um item** da lista.
    * **Exibir os itens** da lista.
    * **Sair do programa.**
3. O programa deve rodar até que o usuário escolha sair.
4. As funções devem ser utilizadas para organizar as operações principais:
    * _adicionarItem(item)_: Adiciona um item ao array.
    * _removerItem(item)_: Remove um item do array (se existir).
    * _exibirLista()_: Mostra todos os itens da lista no console.

**Dicas:**
* Use _console.log()_ para exibir mensagens.
* Para manter o programa rodando, utilize um **loop while** e um **switch-case** para as opções.
* Você pode pesquisar na internet como usar ou como fazer alguma parte do programa, mas tente não usar IA para resolver o desafio, não engane a si mesmo

**Rodando o programa:**

Para rodar este programa, será necessário que você tenha instalado em sua máquina:
* [NodeJS](https://nodejs.org/pt)

1. Clone o repositório
```bash
git clone https://github.com/GEdO23/AlparAcademy-JavaScript-Basico
cd AlparAcademy-JavaScript-Basico
```

2. Rode o programa com o seguinte comando
```bash
node dia-04/desafio-04/desafio-04.js
```

## Créditos

<a href="https://www.flaticon.com/br/icones-gratis/calculadora" title="calculadora ícones">Calculadora ícones criados por Dimitry Miroliubov - Flaticon</a>

<a href="https://www.flaticon.com/br/icones-gratis/ponto-de-interrogacao" title="ponto de interrogação ícones">Ponto de interrogação ícones criados por Freepik - Flaticon</a>

<a href="https://www.flaticon.com/free-icons/dice" title="dice icons">Dice icons created by IconsNova - Flaticon</a>