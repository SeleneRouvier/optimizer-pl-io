const math = require('mathjs');
const { CalcularqoComun, CalcularN, CalcularToComun, CalcularCTEoComun, CostoTotalPreparacionComun, CostoTotalProductoComun } = require('./FuncionesComunes');

function CostoTotalAlmacenamiento(q, T, C1) {
    let ctalm = 0.5 * T * q * C1;
    return ctalm;
}

function CostoAdquisicionSp(sp, b) {
    let casp = sp * b;
    return casp;
}

function CostoMantenimientoSp(sp, T, C1) {
    let cmsp = sp * T * C1;
    return cmsp;
}

function CalcularCTEo(ctprod, T, D, K, C1, casp, cmsp) {
    let CTEo = CalcularCTEoComun(ctprod, T, D, K, C1) + casp + cmsp;
    return CTEo;
}

function ModeloSimpleSinAgotamientoConStockDeProteccion(D, K, b, C1, T, sp) {
    let qo = CalcularqoComun(K, D, T, C1);
    if (qo > D) {
        qo = D;
    }
    const n = CalcularN(qo,D);
    const ctprep = CostoTotalPreparacionComun(D, qo, K);
    const ctprod = CostoTotalProductoComun(b, D);
    const ctalm = CostoTotalAlmacenamiento(qo, T, C1);
    const casp = CostoAdquisicionSp(sp, b);
    const cmsp = CostoMantenimientoSp(sp, T, C1);
    const cte = ctprep + ctprod + ctalm + casp + cmsp;
    const To = CalcularToComun(K, T, D, C1);
    const cteo = CalcularCTEo(ctprod, T, D, K, C1, casp, cmsp);

    return {qo, n, ctprep, ctprod, ctalm, casp, cmsp, cte, To, cteo};
}

module.exports = ModeloSimpleSinAgotamientoConStockDeProteccion;