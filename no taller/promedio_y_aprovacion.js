const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularPromedio(notas) {
    const suma = notas.reduce((acumulador, nota) => acumulador + nota, 0);
    return suma / notas.length;
}

rl.question("Ingrese la primera nota: ", (input) => {
    const nota1 = parseFloat(input);
});

rl.question("Ingrese la segunda nota: ", (input) => {
    const nota2 = parseFloat(input);
});

rl.question("Ingrese la tercera nota: ", (input) => {
    const nota3 = parseFloat(input);
});

rl.question("Ingrese la cuarta nota: ", (input) => {
    const nota4 = parseFloat(input);
});

const notas = [nota1, nota2, nota3, nota4];
if (notas.some(isNaN)) {
    console.log("Error: Debe ingresar números válidos para todas las notas.");
} else {
    const promedio = calcularPromedio(notas);
    console.log(`las notas son: ${nota1}, ${nota2}, ${nota3}, ${nota4}`);
    console.log(`la suma de las notas es: ${nota1 + nota2 + nota3 + nota4}`);
    console.log(`El promedio de las notas es: ${promedio.toFixed(2)}`);
}
if (promedio >= 6) {
    console.log("El estudiante ha aprobado.");
}else {
    console.log("El estudiante no ha aprobado.");
}