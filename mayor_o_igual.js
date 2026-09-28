const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function esNumeroValido(texto) {
    return texto.trim() !== "" && !Number.isNaN(Number(texto));
}

function esMayor(n1, n2) {
    if (n1 > n2) {
        return `El número mayor es: ${n1}`;
    }
    if (n1 < n2) {
        return `El número mayor es: ${n2}`;
    }
    return "Los números son iguales.";
}

rl.question("Ingrese un número: ", (n1) => {
    if (!esNumeroValido(n1)) {
        console.log("Error: Debe ingresar un número válido.");
        rl.close();
        return;
    }

    rl.question("Ingrese otro número: ", (n2) => {
        if (!esNumeroValido(n2)) {
            console.log("Error: Debe ingresar un número válido.");
            rl.close();
            return;
        }

        console.log(esMayor(Number(n1), Number(n2)));
        rl.close();
    });
});
