function suma (a, b) {
    return a+b;
}
function resta (a, b) {
    return a-b;
}
function multiplicar (a, b) {
    return a*b;
}
function dividir (a, b) {
    if (b === 0){
         console.error("no se puede dividir entre 0");
    }
    return a/b;       
}
function porcentaje (a, b) {
    return (a/b) * 100;
}

console.log (dividir(10, 5))
console.log (suma(10, 5))
console.log (resta(10, 5))
console.log (multiplicar(10, 5))
console.log (porcentaje(7, 25))
console.log (dividir(10, 0))