function factorial(n) {
    if (n < 0) {
        return "Error: No se puede calcular el factorial de un número negativo.";
    } else if (n === 0 || n === 1) {
        return 1;
    }   else {
        return n * factorial(n - 1);
    }
}

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese un número para calcular su factorial: ", (input) => {
    const number = parseInt(input);
    const result = factorial(number);
    console.log(`El factorial de ${number} es: ${result}`);
    rl.close();
});