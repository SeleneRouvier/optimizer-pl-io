const math = require('mathjs');
const algebra = require('algebra.js');
var Equation = algebra.Equation;
const { compositionDependencies } = require('mathjs');



// Lagrange

const f = "x^2 + y^2 - 2x - 2y + 4";

const g = "x + y";
const b = "4";
const obj = "min";
var L;
if (obj === "min") {
    L = f + " + lambda * (" + g + " - " + b + ")";
} else {
    L = f + " - lambda * (" + g + " - " + b + ")";
}

const dLdx = algebra.parse(math.derivative(L, 'x').toString());
const dLdy = algebra.parse(math.derivative(L, 'y').toString());
const dLdlambda = algebra.parse(math.derivative(L, 'lambda').toString());

console.log(dLdx);
console.log(dLdy);
console.log(dLdlambda);

var eq1 = algebra.parse(dLdx.toString() + " = 0");
var eq2 = algebra.parse(dLdy.toString() + " = 0");
var eq3 = dLdlambda.toString() + " = 0";

try {
    x = eq1.solveFor("x");
} catch (e) {
    console.log();
}
try {
    y = eq2.solveFor("y");
} catch (e) {
    console.log();
}

ecuacion = algebra.parse(dLdlambda.eval({x: x, y: y}).toString() + "= 0");

lambda = ecuacion.solveFor("lambda");
x = x.eval({lambda: lambda}).toString();
y = y.eval({lambda: lambda}).toString();

console.log(resolv.toString());
var xddd = resolv.solveFor("x");
const xddd2 = resolv.solveFor("y").toString();
const xddd3 = resolv.solveFor("lambda");


return 0;