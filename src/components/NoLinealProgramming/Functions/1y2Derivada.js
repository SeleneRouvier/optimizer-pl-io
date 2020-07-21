const math = require('mathjs');
const algebra = require('algebra.js');
var Equation = algebra.Equation;
const { compositionDependencies } = require('mathjs');
const { hessianoSegundoOrden } = require('./funciones')

// Programación restringida 1º y 2º Derivada



const z = "( x - 2 )^2 + ( y - 3 )^2 + 5";

const dgdx = math.derivative(z, 'x');

const dgdx2 = math.derivative(dgdx, 'x');

const dgdy = math.derivative(z, 'y');

const dgdy2 = math.derivative(dgdy, 'y');

const dgdxy = math.derivative(dgdx, 'y');

function hayPuntoFactible(d1, d2) {
    const d11 = new algebra.parse(d1.toString() + " = 0 ");
    const d22 = new algebra.parse(d2.toString() + " = 0 ");

    try {
        const x = d11.solveFor("x");
        const y = d22.solveFor("y");
        return [x.toString(), y.toString()];
        // return true;
    } catch (e) {
        // return "No existe punto factible";
        return false;
    }
}

const punto = hayPuntoFactible(dgdx, dgdy);

const hessiano = hessianoSegundoOrden(z, punto[0], punto[1]);

// Agregar la parte del hessiano igual a 0

if (math.det(hessiano) > 0) {
    console.log("Es factible");
    if (derivadaSegundaX > 0) {
        console.log("maximo");
    } else if (derivadaSegundaX < 0) {
        console.log("minimo");
    } else {
        console.log("punto de silla");
    }
}
console.log();