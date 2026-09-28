const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function fibonacci (n) {
    let serie = [0, 1];
    for (let i = 2; i < n; i++) {
        serie.push(serie[i - 1] + serie[i - 2]);
    }
    return serie.slice(0, n);
}

function sumar (serie) {
    let total = 0;
    for (let i = 0; i < serie.length; i++) {
        total += serie[i];
    }
    return total;
}

rl.question("Ingrese la cantidad de valores de fibonacci: ", (n) => {
    let valores = fibonacci(Number(n));
    console.log (valores);
    console.log ("Suma: " + sumar(valores));
    rl.close();
});