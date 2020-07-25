const math = require('mathjs');
const {CalcularqoComun, CalcularN, CalcularToComun, CalcularCTEoComun,CostoTotalPreparacionComun,CostoTotalProductoComun} = require('./FuncionesComunes');

function CostoTotalAlmacenamiento(q,s,T,C1){
    let ctalm = 0.5 * T/q * C1 * s * s;
    return ctalm;
}

function CostoAgotamiento(T,q,s,C2){
    let ca = 0.5 + T/q * C2 * (q - s) * (q - s);
    return ca;
}

function CalcularSo(C1,C2,qo){
    let so = qo * C2/(C1 + C2);
    return so;
}

function Calcularqo(K,D,T,C1,C2){
    let qo = CalcularqoComun(K,D,T,C1) * math.sqrt((C1 + C2)/C2);
    return qo;
}

function CalcularTo(K,D,T,C1,C2){
    let To = CalcularToComun(K,T,D,C1) * math.sqrt((C1 + C2)/C2);
    return To;
}

function CalcularCTEo(ctprod,T,D,K,C1,C2){
    let CTEo = CalcularCTEoComun(ctprod,T,D,K,C1) * math.sqrt(C2/(C1 + C2));
    return CTEo;
}

function ModeloSimpleConAgotamiento(D,K,b,s,T,C1,C2){
    const qo = Calcularqo(K,D,T,C1,C2);
    const n = CalcularN(qo,D);
    const ctprep = CostoTotalPreparacionComun(D,qo,K);
    const ctprod = CostoTotalProductoComun(b, D);
    const ctalm = CostoTotalAlmacenamiento(qo,s,T,C1);
    const ca = CostoAgotamiento(T,qo,s,C2);
    const cte = ctprep + ctprod + ctalm + ca;
    const so = CalcularSo(C1,C2,qo);
    const To = CalcularTo(K,D,T,C1,C2);
    const cteo = CalcularCTEo(ctprod,T,D,K,C1,C2);
    return {qo, n, ctprep, crprod, ctalm, ca, cte, so, To, cteo};
}

module.exports = ModeloSimpleConAgotamiento;