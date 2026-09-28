const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el numero que desea conocer la tabla de multiplicar: ", (input) => {
    const number = parseInt(input);
    if (isNaN(number)) {
        console.log("Error: Debe ingresar un número válido.");
    } else {
        console.log(`Tabla de multiplicar del ${number}:`);
        for (let i = 1; i <= 10; i++) {
            console.log(`${number} x ${i} = ${number * i}`);
        }
    }
    rl.close();
});

