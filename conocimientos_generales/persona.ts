class Persona {
    _nombre: string;
    _edad: number;
    _genero: string;

    constructor(nombre: string, edad: number, genero: string) {
        this._nombre = nombre;
        this._edad = edad;
        this._genero = genero;
    }

    get datosCompletos(): string {
        return this._nombre + " tiene " + this._edad
    }

    set cambiarNombre(name: string) {
        if (name.length <= 2) {
            console.log('El nombre debe ser mayor a dos letras')
            return
        }
        this._nombre = name
    }

    caminar(): void {
        console.log(`${this._nombre} esta caminando...`)
    }

    hablar(mensaje: string): void {
        console.log(`${this._nombre} dice: ${mensaje}`)
    }

    comer(): void {
        console.log(`${this._nombre} esta comiendo...`)
    }
}

const elias = new Persona("Elias", 25, "Masculino")

console.log(elias.datosCompletos)
elias.cambiarNombre = 'Jay'
console.log(elias)