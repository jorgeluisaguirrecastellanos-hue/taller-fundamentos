const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function esNumeroValido(texto) {
    return texto.trim() !== "" && !Number.isNaN(Number(texto));
}

rl.question("Ingrese la lista de números separados por comas: ", (lista) => {
    const partes = lista.split(",").map((n) => n.trim());

    const numeros = partes.filter(esNumeroValido).map((n) => Number(n));
    const numerosInvalidos = partes.filter((n) => !esNumeroValido(n));

    if (numeros.length === 0) {
        console.log("Error: Debe ingresar al menos un número válido.");
    } else {
        console.log("El mayor número es:", Math.max(...numeros));
    }

    if (numerosInvalidos.length > 0) {
        console.log("Números inválidos:", numerosInvalidos);
    }

    rl.close();
});
