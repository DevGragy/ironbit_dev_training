var Persona = /** @class */ (function () {
    function Persona(nombre, edad, genero) {
        this._nombre = nombre;
        this._edad = edad;
        this._genero = genero;
    }
    Object.defineProperty(Persona.prototype, "datosCompletos", {
        get: function () {
            return this._nombre + " tiene " + this._edad;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "cambiarNombre", {
        set: function (name) {
            if (name.length <= 2) {
                console.log('El nombre debe ser mayor a dos letras');
                return;
            }
            this._nombre = name;
        },
        enumerable: false,
        configurable: true
    });
    Persona.prototype.caminar = function () {
        console.log("".concat(this._nombre, " esta caminando..."));
    };
    Persona.prototype.hablar = function (mensaje) {
        console.log("".concat(this._nombre, " dice: ").concat(mensaje));
    };
    Persona.prototype.comer = function () {
        console.log("".concat(this._nombre, " esta comiendo..."));
    };
    return Persona;
}());
var elias = new Persona("Elias", 25, "Masculino");
console.log(elias.datosCompletos);
elias.cambiarNombre = 'Jay';
console.log(elias);
