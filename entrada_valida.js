const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese su edad: ", (input) => {
    const edad = parseInt(input);

    if (isNaN(edad)) {
        console.log("Error: Debe ingresar un número válido.");
    } else if (edad >= 18) {
        console.log("Eres mayor de edad. puedes ingresar");
    } else {
        console.log("No eres mayor de edad. no puedes ingresar");
    }
    rl.close();
});

