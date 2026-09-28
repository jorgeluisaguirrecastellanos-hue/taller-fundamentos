function sumar_positivos(n) {
    if (n <= 0) {
        return 0;
    }else {
    return n + sumar_positivos(n - 1);
    }
}

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese una lista de números separados por comas: ", (input) => {
    const numeros = input.split(",").map((n) => parseInt(n.trim()));
    const numerosPositivos = numeros.filter((n) => n > 0);
    const suma = numerosPositivos.reduce((acc, n) => acc + n, 0);
    console.log("La suma de los números positivos es:", suma, "en total se ingresaron", numeros.length, "numeros y de ellos", numerosPositivos.length, "son positivos");
    console.log("los numeros invalidos para la operacion son:", numeros.filter((n) => isNaN(n) || n <= 0), "porque son negativos o no son numeros");
    rl.close();
});