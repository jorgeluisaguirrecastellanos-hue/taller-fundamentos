const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese un número: ", (input) => {
    const number = parseInt(input);
    if (isNaN(number)) {
        console.log("Error: Debe ingresar un número válido.");
    } else {
        if (number % 2 === 0) {
            console.log("El número es par.");
        } else {
            console.log("El número es impar.");
        }
    }
    rl.close();
});
