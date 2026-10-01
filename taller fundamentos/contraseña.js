function clave_valida(clave) {
    const longitud = clave.length;
    const tieneMayuscula = /[A-Z]/.test(clave);
    const tieneMinuscula = /[a-z]/.test(clave);
    const tieneNumero = /\d/.test(clave);
    const tieneSimbolo = /[@$!%*?&]/.test(clave);

    return longitud >= 8 && tieneMayuscula && tieneMinuscula && tieneNumero && tieneSimbolo;
}
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese una contraseña: ", (input) => {
    while (true) {
        if (clave_valida(input)) {
            console.log("La contraseña es válida.");
            break;
        } else {
            console.log("La contraseña no es válida. Debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un símbolo especial.");
            rl.question("Ingrese una contraseña válida: ", (newInput) => {
                input = newInput;
                rl.close();
            });
        }
    }
    rl.close();
});