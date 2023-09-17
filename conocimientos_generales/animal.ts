class Animal {
    _nombre: string
    _especie: string
    constructor(nombre: string, especie: string) {
        this._nombre = nombre
        this._especie = especie
    }

    comer(): void {
        console.log(`${this._nombre} esta comiendo`)    
    }

    dormir(): void {
        console.log(`${this._nombre} esta durmiendo`)   
    }
}

class Perro extends Animal {
    _nombre: string
    _raza: string
    constructor(nombre: string, raza: string) {
        super(nombre, 'Canino')
        this._raza = raza
    }

    ladrar(): void {
        console.log(`${this._nombre} esta ladrando`)  
    }

    comer(): void {
        console.log(`${this._nombre} esta comiendo sus croquetas`)  
    }
}

const mosti = new Perro('Mosti', 'Pug')
console.log(mosti._especie)
console.log(mosti._raza)
mosti.comer()
mosti.ladrar()
mosti.dormir()