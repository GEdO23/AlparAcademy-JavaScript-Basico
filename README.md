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

## Créditos

<a href="https://www.flaticon.com/br/icones-gratis/calculadora" title="calculadora ícones">Calculadora ícones criados por Dimitry Miroliubov - Flaticon</a>

<a href="https://www.flaticon.com/br/icones-gratis/ponto-de-interrogacao" title="ponto de interrogação ícones">Ponto de interrogação ícones criados por Freepik - Flaticon</a>
