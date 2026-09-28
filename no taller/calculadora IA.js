function sumar(a, b) {
    console.log(`${a} + ${b} = ${a + b}`);
}

function restar(a, b) {
    console.log(`${a} - ${b} = ${a - b}`);
}

function multiplicar(a, b) {
    console.log(`${a} * ${b} = ${a * b}`);
}

function dividir(a, b) {
    if (b === 0) {
        console.log("Error: no se puede dividir entre cero");
    } else {
        console.log(`${a} / ${b} = ${a / b}`);
    }
}

sumar(10, 5);
restar(10, 5);
multiplicar(10, 5);
dividir(10, 5);
dividir(10, 0);