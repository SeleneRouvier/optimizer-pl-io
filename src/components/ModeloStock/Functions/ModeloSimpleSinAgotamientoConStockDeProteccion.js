const math = require('math-js');
const {CalcularqoComun,CalcularToComun,CalcularCTEoComun,CostoTotalPreparacionComun,CostoTotalProductoComun}= require('./FuncionesComunes');

function CostoTotalAlmacenamiento(q,T,C1){
    let ctalm = 0.5 * T * q * C1;
    return ctalm;
}

function CostoAdquisicionSp(sp,b){
    let casp = sp * b;
    return casp;
}

function CostoMantenimientoSp(sp,T,C1){
    let cmsp = sp * T * C1;
    return cmsp;
}

function CalcularCTEo(ctprod,T,D,K,C1,casp,cmsp){
    let CTEo = CalcularCTEoComun(ctprod,T,D,K,C1) + casp + cmsp;
    return CTEo;
}

function ModeloSimpleSinAgotamientoConStockDeProteccion(D,q,K,b,C1,T,sp){
    const ctprep = CostoTotalPreparacionComun(D,q,K);
    const ctprod = CostoTotalProductoComun(b, D);
    const ctalm = CostoTotalAlmacenamiento(q,T,C1);
    const casp = CostoAdquisicionSp(sp,b);
    const cmsp = CostoMantenimientoSp(sp,T,C1);
    const cte = ctprep + ctprod + ctalm + casp + cmsp;
    const qo = CalcularqoComun(K,D,T,C1);
    const To = CalcularToComun(K,T,D,C1);
    const cteo = CalcularCTEo(ctprod,T,D,K,C1,casp,cmsp);
}
