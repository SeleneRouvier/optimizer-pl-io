const math = require('mathjs');
const algebra = require('algebra.js');
var Equation = algebra.Equation;
const { compositionDependencies } = require('mathjs');

// Lagrange

const f = "x^2 + y^2 - 2x - 2y + 4";

g = "x + y = 4";
g = g.split("=");
exp = g[0];
b = g[1];

const objetivo = "min";
var L;
if (objetivo === "min") {
    L = f + " + lambda * (" + exp + " - " + b + ")";
} else {
    L = f + " - lambda * (" + exp + " - " + b + ")";
}

dLdx = algebra.parse(math.derivative(L, 'x').toString());
dLdy = algebra.parse(math.derivative(L, 'y').toString());
dLdlambda = algebra.parse(math.derivative(L, 'lambda').toString());

var eq1 = algebra.parse(dLdx.toString() + " = 0");
var eq2 = algebra.parse(dLdy.toString() + " = 0");
var eq3 = dLdlambda.toString() + " = 0";

var x;
var y;
var lambda;

function despejar(equation) {

    if (x == undefined) {
        try {
            x = equation.solveFor("x");
        } catch (e) {
            console.log();
        }
        if (x !== undefined) {
            return ['x', x];
        }
    }

    if (y == undefined) {
        try {
            y = equation.solveFor("y");
        } catch (e) {
            console.log();
        }
        if (y !== undefined) {
            return ['y', y];
        }
    }

    if (lambda == undefined) {
        try {
            lambda = equation.solveFor("y");
        } catch (e) {
            console.log();
        }
        if (lambda !== undefined) {
            return ['lambda', lambda];
        }
    }

}

despejar(eq1);
despejar(eq2);
despejar(eq3);

if (x !== undefined) {
    if (y !== undefined) {
        ecuacion = algebra.parse(dLdlambda.eval({ x: x, y: y }).toString() + "= 0");
    } else {
        // reemplazar x en eqY para ver si encuentro
    }
} else {
    if (y !== undefined) {
        // reemplazar y en eqX para ver si encuentro
    } else {

    }
}



lambda = ecuacion.solveFor("lambda");
x = x.eval({ lambda: lambda }).toString();
y = y.eval({ lambda: lambda }).toString();



dLdx = math.derivative(L, 'x');
dLdx2 = math.derivative(dLdx, 'x');
dLdy = math.derivative(L, 'y');
dLdy2 = math.derivative(dLdy, 'y');
dLdxy = math.derivative(dLdx, 'y');

const derivadaCruzada = dLdxy.evaluate({ x, y });
const derivadaSegundaX = dLdx2.evaluate({ x, y });
const derivadaSegundaY = dLdy2.evaluate({ x, y });

dgdx = math.derivative(exp, 'x');
dgdy = math.derivative(exp, 'y');

const dGdx = dgdx.evaluate({ x, y });
const dGdy = dgdx.evaluate({ x, y });

matrizHessiana = math.matrix([[0, dGdx, dGdy],
[dGdx, derivadaSegundaX, derivadaCruzada],
[dGdy, derivadaCruzada, derivadaSegundaY]]);

determinante = math.det(matrizHessiana);
if (determinante > 0) {
    console.log("maximo");
} else if (determinante < 0) {
    console.log("minimo");
} else {
    console.log("punto de silla");
}


/*
const Q = math.matrix([[derivadaSegundaX, derivadaCruzada], [derivadaCruzada, derivadaSegundaY]]);

P = math.matrix([dgdx,dgdy]);
Pt = math.transpose(P);

const hessiano = math.matrix([[derivadaSegundaX, derivadaCruzada], [derivadaCruzada, dgdy2.evaluate({ x: punto[0], y: punto[1] })]]);
*/



return 0;