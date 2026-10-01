const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function convertTemperature(value, fromUnit, toUnit) {
    let celsiusValue;

    switch (fromUnit.toLowerCase()) {
        case "celsius":
            celsiusValue = value;
            break;
        case "fahrenheit":
            celsiusValue = (value - 32) * 5/9;
            break;
        case "kelvin":
            celsiusValue = value - 273.15;
            break;
        default:
            throw new Error("Invalid temperature unit");
    }

    switch (toUnit.toLowerCase()) {
        case "celsius":
            return celsiusValue;
        case "fahrenheit":
            return (celsiusValue * 9/5) + 32;
        case "kelvin":
            return celsiusValue + 273.15;
        default:
            throw new Error("Invalid temperature unit");
    }
}

function esNumeroValido(texto) {
    return texto.trim() !== "" && !Number.isNaN(Number(texto));
}

rl.question("ingrese el valor de la temperatura: ", (valor) => {
    if (!esNumeroValido(valor)) {
        console.log("Error: el valor de la temperatura debe ser un numero.");
        rl.close();
        return;
    }

    rl.question("ingrese la unidad de entrada (Celsius, Fahrenheit, Kelvin): ", (unidadEntrada) => {
        rl.question("ingrese la unidad de salida (Celsius, Fahrenheit, Kelvin): ", (unidadSalida) => {
            const resultado = convertTemperature(Number(valor), unidadEntrada, unidadSalida);
            console.log(`La temperatura convertida es: ${resultado}`);
            rl.close();
        });
    });
});
