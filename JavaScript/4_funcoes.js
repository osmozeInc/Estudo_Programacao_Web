function criarContador() {
    let contador = 0;

    return function incrementar() {
        contador++;
        return contador;
    };
}

const contador1 = criarContador(); // Cria um closure
console.log(contador1()); // Saída: 1
console.log(contador1()); // Saída: 2

const contador2 = criarContador(); // Cria outro closure independente
console.log(contador2()); // Saída: 1