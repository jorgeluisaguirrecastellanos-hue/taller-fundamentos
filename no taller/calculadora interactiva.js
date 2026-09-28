const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcular(operacion, a, b) {
    switch (operacion) {
        case "+":
            console.log(`${a} + ${b} = ${a + b}`);
            break;
        case "-":
            console.log(`${a} - ${b} = ${a - b}`);
            break;
        case "*":
            console.log(`${a} * ${b} = ${a * b}`);
            break;
        case "/":
            if (b === 0) {
                console.log("Error: no se puede dividir entre 0");
            } else {
                console.log(`${a} / ${b} = ${a / b}`);
            }
            break;
        default:
            console.log("Operación no valida. Usa +, -, * o /.");
    }
}

rl.question("Ingrese la operacion (+, -, *, /): ", (operacion) => {
    rl.question("Ingrese el primer numero: ", (n1) => {
        rl.question("Ingrese el segundo numero: ", (n2) => {
            calcular(operacion, Number(n1), Number(n2));
            rl.close();
        });
    });
});