const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function fibonacci (n) {
    let serie = [0, 1];
    for (let i = 2; i <= n; i++) {
        serie.push(serie[i - 1] + serie[i - 2]);
    }
    return serie[n];
}

rl.question("Ingrese la posicion de la secuencia: ", (pos) => {
    console.log (fibonacci(Number(pos)));
    rl.close();
});