const math = require('mathjs');
const algebra = require('algebra.js');

objetivo = "max"
z = "-x1^2 - x2^2";
g1 = "x1 - 2 x2 <= -6";
g2 = "x1 >= 2";

contador = 0;

function pasarIgualdad(desigualdad, objetivo) {
    contador ++;

    menorIgual = desigualdad.split("<=");
    mayorIgual = desigualdad.split(">=");

    if (menorIgual.length > 1) {
        ladoIzq = menorIgual[0];
        ladoDer = menorIgual[1];
        if (objetivo === "min") {
            return "-(" + ladoIzq + ") + s"+ contador +" = -(" + ladoDer + ")";
        }
        return ladoIzq + "+ s = " + ladoDer;
    } else if (mayorIgual.length > 1) {
        ladoIzq = mayorIgual[0];
        ladoDer = mayorIgual[1];
        if (objetivo === "max") {
            return "-(" + ladoIzq + ") + s"+ contador +" = -(" + ladoDer + ")";
        }
        return ladoIzq + "s = " + ladoDer;
    } else {
        return desigualdad;
    }
}

g1 = pasarIgualdad(g1,objetivo);
g2 = pasarIgualdad(g2,objetivo);

restr = [g1, g2];

g = restr[1].split("=");
exp = g[0];
b = g[1];

var L;
if (objetivo === "min") {
    L = z + " + lambda * (" + exp + " - " + b + ")";
} else {
    L = z + " - lambda * (" + exp + " - " + b + ")";
}

for (let i = 1; i < restr.length; i++) {
    g = restr[i];
    g = g.split("=");
    exp = g[0];
    b = g[1];
    if (objetivo === "min") {
        L = L + " + lambda * (" + exp + " - " + b + ")";
    } else {
        L = L + " - lambda * (" + exp + " - " + b + ")";
    }
}

return 0;
