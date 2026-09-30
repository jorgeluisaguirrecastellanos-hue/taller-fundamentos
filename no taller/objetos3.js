class animal {
    constructor(nombre){
        this.nombre = nombre;
    }
    hablar () {
    console.log(`${this.nombre} hace un ruido.`);
}
}



class perro extends animal {
    ladra() {
        console.log(`${this.nombre} ladra.`);
    }
}