const edadLegalEnEEUU = 21;
const chequearEstadoLegal = (edad, edadLegal) => {
    return edad >= edadLegal ? "Mayor de edad." : "Menor de edad.";
};
const johnEstado = chequearEstadoLegal(18, edadLegalEnEEUU);
johnEstado; // Menor de edad.
edadLegalEnEEUU; // 21

function arregloFiltro(arreglo, prueba) {
    const arregloFiltrado = [];
    for (let elemento of arreglo) {
        if (prueba(elemento)) {
            arregloFiltrado.push(elemento);
        }
    }
    return arregloFiltrado;
}
const arregloMezclado = [1, true, null, "Hola", undefined, "Mundo", false];
const soloCadenas = arregloFiltro(
    arregloMezclado,
    (elemento) => typeof elemento === "cadena"
);
onlyCadenas; // ['Hola', 'Mundo']

function transformarArreglo(arreglo, prueba) {
    const arregloTransformado = [];
    for (let elemento of arreglo) {
        arregloTransformado.push(prueba(elemento));
    }
    return arregloTransformado;
}
const edades = [12, 15, 21, 19, 32];
const doblarEdades = transformarArreglo(edades, (edad) => edad * 2);
doblarEdades; // [24, 30, 42, 38, 64];

function reducirArreglo(arreglo, prueba, start) {
    let suma = start;
    for (let elemento of arreglo) {
        suma = prueba(suma, elemento);
    }
    return suma;
}
let numeros = [5, 10, 20];
let doblarNumeros = reducirArreglo(numeros, (a, b) => a + b, 0);
doblarNumeros; // 35
