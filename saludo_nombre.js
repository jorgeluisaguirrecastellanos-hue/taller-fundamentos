function saludar () {
    let nombre = console.prompt("¿como te llamas?");
    if (nombre && nombre.trim() !== "") {
        console.log(`hola,${nombre}`);
    } else{
        console.log("no escribiste ningun nombre😅");
    }
}

saludar()