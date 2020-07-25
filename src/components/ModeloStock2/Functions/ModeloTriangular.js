const math = require('mathjs');
const {CalcularqoComun, CalcularN, CalcularToComun, CalcularCTEoComun,CostoTotalPreparacionComun,CostoTotalProductoComun} = require('./FuncionesComunes');

function CostoTotalAlmacenamiento(q,p,T,C1,d){
    let ctalm = 0.5 * T*q * C1 *(1-d/p);
    return ctalm;
}

function CalcularSm(Tp,p,d){
    let sm = Tp*(p-d);
    return sm;
}

function Calcularqo(K,d,C1,p){
    let qo = math.sqrt((2*K*d*p)/(C1*(p-d)));
    return qo;
}

function CalcularTp(qo,p){
    let Tp = qo/p;
    return Tp;
}

function ModeloTriangular(D,K,b,p,T,C1,d){
    const qo = Calcularqo(K,d,C1,p);
    const n = CalcularN(qo,D);
    const ctprep = CostoTotalPreparacionComun(D,qo,K);
    const ctprod = CostoTotalProductoComun(b, D);
    const ctalm = CostoTotalAlmacenamiento(qo,p,T,C1,d);
    const cte = ctprep + ctprod + ctalm;
    const To = CalcularToComun(K,T,D,C1);
    const Tp = CalcularTp(qo,p);
    const sm = CalcularSm(Tp,p,d);
    return {qo, n, ctprep, crprod, ctalm, cte, To, Tp, sm};
}

module.exports = ModeloTriangular;