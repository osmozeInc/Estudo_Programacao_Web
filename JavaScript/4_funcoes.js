/* FUNÇÃO */

// Estrutura

function double(num){
    return num * 2;
}

// Variável de função

var double = function(num){
    return num * 2;
}

let ex_1 = double(2);

console.log(ex_1);



// Um função pode chamar a si mesma. Por exemplo, a função que calcula os fatoriais recursivamente:

function fatorial(n) {
  if (n == 0 || n == 1) return 1;
  else return n * fatorial(n - 1);
}



// Um exemplo de função aninhada
function getScore() {
    var num1 = 2,
      num2 = 3;
  
    function add() {
      return nome + " scored " + (num1 + num2);
    }
    return add();
}
  
getScore(); // Retorna "Chamahk scored 5"



// função recursiva

function loop(x) 
{
    if (x >= 10)
      return;
    loop(x + 1);
}
loop(0);



// função closure

function fora(x) {
    function dentro(y) {
      return x + y;
    }
    return dentro;
  }
  fn_inside = fora(3); // Pense nisso como: Receba uma função que adicionará 3 ao que quer que você repasse para ela
  result = fn_inside(5); // retorna 8
  
  result1 = fora(3)(5); // retorna 8









  

// Se você passar um objeto (ou seja, um valor não primitivo, tal como Array ou um objeto definido por você) como um parâmetro e a função alterar as propriedades do objeto

function minhaFuncao(objeto) 
{
    objeto.make = "Toyota";
}

var meucarro = { make: "Honda", model: "Accord", year: 1998 };
var x, y;
  
x = meucarro.make; // x recebe o valor "Honda"
  
minhaFuncao(meucarro);
y = meucarro.make;



