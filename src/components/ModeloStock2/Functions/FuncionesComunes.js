const math = require("mathjs");

function CalcularqoComun(K,D,T,C1){
    let qo = math.sqrt(2 * K * D/(T * C1));
    return qo;
}

function CalcularToComun(K,T,D,C1){
    let To = math.sqrt(2 * K * T/(D * C1));
    return To;
}

function CalcularCTEoComun(ctprod,T,D,K,C1){
    let CTEo = ctprod + math.sqrt(2 * T * D * K * C1);
    return CTEo;
}

function CostoTotalPreparacionComun(D,q,K){
    let ctprep = D/q * K;
    return ctprep;
}

function CostoTotalProductoComun(b, D){
    let ctprod = b * D;
    return ctprod
}

module.exports = {CalcularqoComun,CalcularToComun,CalcularCTEoComun,CostoTotalPreparacionComun,CostoTotalProductoComun};