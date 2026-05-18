// funções comuns com 0, 1 e multiplos parâmetros
function somaPadrao(a, b) {
    return a + b;
}

function dobroPadrao(a) {
    return a * 2;
}

function retorna0Padrao() {
    return 0;
}

// as mesmas funções agora no estilo arrow function
// arow functions são variáveis que guardam instruções de funções

// 1. multiplos parâmetros
const somaArrow = (a, b) => a + b;

// 2. um único parâmetro
const dobroArrow = a => a * 2;

// 3. nenhum parâmetro
const retorna0Arrow = () => 0;


// nem sempre é possível reduzir a função
// no caso seguinte, não há diferença no tamanho

function funcaoGrandePadrao() {
    let palavra1 = "Hello";
    let palavra2 = "Wolrd!";
    let frase = palavra1 + " " + palavra2;

    return frase
}

const funcaoGrandeArrow = () => {
    let palavra1 = "Hello";
    let palavra2 = "Wolrd!";
    let frase = palavra1 + " " + palavra2;
    
    return frase
}
