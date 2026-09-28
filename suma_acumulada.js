const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese un número, y voy a sumar sus anteriores: ", (input) => {
    const number  = parseInt(input);
    if (isNaN(number)) {
        console.log("Error: Debe ingresar un número válido.");
    } else {
        let suma = 0;
        for (let i = 1; i <= number; i++) {
            suma += i;
        }
        console.log(`La suma de los números anteriores a ${number} es: ${suma}`);
    }
    rl.close();
});
