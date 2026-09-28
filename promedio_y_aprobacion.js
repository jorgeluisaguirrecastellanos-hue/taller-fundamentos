const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularPromedio(notas) {
    const suma = notas.reduce((acumulador, nota) => acumulador + nota, 0);
    return suma / notas.length;
}

rl.question("Ingrese la primera nota: ", (input1) => {
    const nota1 = parseFloat(input1);

    rl.question("Ingrese la segunda nota: ", (input2) => {
        const nota2 = parseFloat(input2);

        rl.question("Ingrese la tercera nota: ", (input3) => {
            const nota3 = parseFloat(input3);

            rl.question("Ingrese la cuarta nota: ", (input4) => {
                const nota4 = parseFloat(input4);

                const notas = [nota1, nota2, nota3, nota4];
                if (notas.some((nota) => Number.isNaN(nota))) {
                    console.log("Error: Debe ingresar números válidos para todas las notas.");
                } else {
                    const promedio = calcularPromedio(notas);
                    console.log(`Las notas son: ${nota1}, ${nota2}, ${nota3}, ${nota4}`);
                    console.log(`La suma de las notas es: ${nota1 + nota2 + nota3 + nota4}`);
                    console.log(`El promedio de las notas es: ${promedio.toFixed(2)}`);
                }

                rl.close();
            });
        });
    });
});
