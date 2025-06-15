
var variavel_undefined;
// Declara uma variável, opcionalmente, inicializando-a com um valor.

let variavel_boolean = true;
// Declara uma variável local de escopo do bloco, opcionalmente, inicializando-a com um valor.

const PI = 3.14;
// Declara uma constante de escopo de bloco, apenas de leitura.


// uma variável pode ser declarada depois de utilizada
if(!x) {
    var x = 3; // undefined
}



/*
Conversão de tipos____________________________________________________________
JavaScript é uma linguagem dinamicamente tipada. Isso significa que você não precisa especificar o tipo de dado de uma variável quando declará-la, e tipos de dados são convertidos automaticamente conforme a necessidade durante a execução do script.
*/

var ex_1
ex_1 = 123;
ex_1 = "peixes";

ex_1 = "peixes" + 42; // "peixes42"
ex_1 = "37" + 7; // "377"
ex_1 = 37 + 7; // 44

ex_1 = "1.1" + "1.1"; // "1.11.1"
ex_1 = +"1.1" + + "1.1"; // 2.2




/*
Literais__________________________________________________________
Você usa literais para representar valores em JavaScript. Estes são valores fixados, não variáveis, que você literalmente insere em seu script
*/

let mensagem = "Olá"; // 'mensagem' é uma variável, e "Olá" é um literal de string
let numero = 10;      // 'numero' é uma variável, e 10 é um literal numérico


// Array de literais
var coffees = ["French Roast", "Colombian", "Kona"];


// Inteiros podem ser expressos em decimal (base 10), hexadecimal (base 16), octal (base 8) e binário (base 2).
var ex_2;
ex_2 = 42; // decimal: 42
ex_2 = 0o52; // octal: 42
ex_2 = 0x2a; // hexadecimal: 255
ex_2 = 0b101010; // binário: 42


// Literais de ponto flutuante
ex_2 = .1e-5;


// Objeto literal: Um objeto literal é uma lista de zero ou mais pares de nomes de propriedades e valores associados de um objeto
var carro = {
    marca: "Ford",
    modelo: "Mustang",
    ano: 1969
}

var terra = { pais: { 1: "Brasil", b: "Chile" }, estado: "Ceará"};
// console.log(terra.pais[1]);
// console.log(terra.pais.b);


// Date
var data = new Date();





/*
Outros exemplos de objetos literais:
var exemplo = {
  "": "Uma string vazia",
  "!": "Bang!"
  a: "alpha"
  2: "two"
}
console.log(exemplo."");        SyntaxError: string inesperada
console.log(exemplo[""]);       Um string vazia
console.log(exemplo.!);         SyntaxError: símbolo ! inesperado
console.log(exemplo["!"]);      Bang!
console.log(exemplo.a);         alpha
console.log(exemplo[2]);        two
console.log(exemplo.2);         Error: missing ) after argument list
console.log(exemplo[a]);        Error: a não está definido
console.log(exemplo["a"]);      alpha
console.log(exemplo["2"]);      two
*/
