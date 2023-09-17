var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(nombre, especie) {
        this._nombre = nombre;
        this._especie = especie;
    }
    Animal.prototype.comer = function () {
        console.log("".concat(this._nombre, " esta comiendo"));
    };
    Animal.prototype.dormir = function () {
        console.log("".concat(this._nombre, " esta durmiendo"));
    };
    return Animal;
}());
var Perro = /** @class */ (function (_super) {
    __extends(Perro, _super);
    function Perro(nombre, raza) {
        var _this = _super.call(this, nombre, 'Canino') || this;
        _this._raza = raza;
        return _this;
    }
    Perro.prototype.ladrar = function () {
        console.log("".concat(this._nombre, " esta ladrando"));
    };
    Perro.prototype.comer = function () {
        console.log("".concat(this._nombre, " esta comiendo sus croquetas"));
    };
    return Perro;
}(Animal));
var mosti = new Perro('Mosti', 'Pug');
console.log(mosti._especie);
console.log(mosti._raza);
mosti.comer();
mosti.ladrar();
mosti.dormir();
