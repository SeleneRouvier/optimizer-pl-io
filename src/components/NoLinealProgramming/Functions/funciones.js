const math = require('mathjs');
const algebra = require('algebra.js');


function pasarAAlgebra(math) {
    return new algebra.parse(math.toString());
}

function pasarAMath(algebra) {
    return new algebra.parse(d1.toString());
}

function formarIgualdad() {
    return 0;
}

function hessianoSegundoOrden(expresion, x, y) {
    const dFdx = math.derivative(expresion, 'x');
    const dFdx2 = math.derivative(dFdx, 'x');

    const dFdy = math.derivative(expresion, 'y');
    const dFdy2 = math.derivative(dFdy, 'y');

    const dFdxy = math.derivative(dFdx, 'y');

    const derivadaCruzada = dFdxy.evaluate({ x, y });
    const derivadaSegundaX = dFdx2.evaluate({ x, y });
    const derivadaSegundaY = dFdy2.evaluate({ x, y });

    return math.matrix([[derivadaSegundaX, derivadaCruzada], [derivadaCruzada, derivadaSegundaY]]);
}

module.exports = { hessianoSegundoOrden }