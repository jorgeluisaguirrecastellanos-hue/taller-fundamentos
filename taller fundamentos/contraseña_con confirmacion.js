const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const MAX_INTENTOS = 3;

function claveValida(clave) {
    const longitud = clave.length;
    const tieneMayuscula = /[A-Z]/.test(clave);
    const tieneMinuscula = /[a-z]/.test(clave);
    const tieneNumero = /\d/.test(clave);
    const tieneSimbolo = /[@$!%*?&]/.test(clave);

    return longitud >= 8 && tieneMayuscula && tieneMinuscula && tieneNumero && tieneSimbolo;
}

function preguntarSecreto(mensaje, callback) {
    process.stdout.write(mensaje);
    const escribir = rl.output.write;
    rl.output.write = () => {};
    rl.question("", (secreto) => {
        rl.output.write = escribir;
        process.stdout.write("\n");
        callback(secreto);
    });
}

function pedirClave(intento) {
    if (intento > MAX_INTENTOS) {
        console.log("Demasiados intentos fallidos.");
        rl.close();
        return;
    }

    console.log(`Intento ${intento} de ${MAX_INTENTOS}.`);

    rl.question("Ingrese una contraseña: ", (clave) => {
        if (!claveValida(clave)) {
            console.log("La contraseña no es válida. Debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un símbolo especial.");
            pedirClave(intento + 1);
            return;
        }

        preguntarSecreto("Repita la contraseña: ", (confirmacion) => {
            if (confirmacion !== clave) {
                console.log("Las contraseñas no coinciden.");
                pedirClave(intento + 1);
                return;
            }

            console.log("La contraseña es válida y fue confirmada.");
            rl.close();
        });
    });
}

pedirClave(1);
