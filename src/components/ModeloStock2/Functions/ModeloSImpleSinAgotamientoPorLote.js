const {CalcularN,CalcularToComun,CostoTotalPreparacionComun,CostoTotalProductoComun,CalcularqoComun } = require("./FuncionesComunes");

function CostoTotalAlmacenamiento(q,T,C1){
    let ctalm = 0.5 * T * q * C1;
    return ctalm;
}

function CostoDineroInmovilizado(P,b){
    let cdi = P * b;
    return cdi;
}

function CalcularC1(cdi,Ci){
    let C1 = cdi + Ci;
    return C1;
}


//Esto se aplica cuando se trata de costo sobre el precio del producto.
//Ej: es el 45% del precio del producto.
function CalcularCi(b,PorcCostoProd){
    let Ci = b * PorcCostoProd;
    return Ci;
}

function ModeloSimpleSinAgotamientoPorLote(D,q,K,PorcCostoProd,T,P,bi,Cientrada){
    let cdi, C1, Ci, qo;
    let x = 0;
    let limsup = Number.MAX_VALUE;
    let flag = true;
    while (flag && x < bi.length){
        cdi = CostoDineroInmovilizado(P,bi[x]);
        Ci = CalcularCi(bi[x],PorcCostoProd)+Cientrada;
        C1 = CalcularC1(cdi,Ci);
        qo = Math.ceil(CalcularqoComun(K,D,T,C1));
        if (qo >= q[x] && qo < limsup){
            flag = false;
        }
        limsup = q[x];
        x++;
    }
    const liminf = q[x-1];
    const cprod = bi[x-1];
    const n = CalcularN(qo,D);
    const To = CalcularToComun(K,T,D,C1);
    const ctprep = CostoTotalPreparacionComun(D,qo,K);
    const ctprod = CostoTotalProductoComun(cprod, D);
    const ctalm = CostoTotalAlmacenamiento(qo,T,C1);
    const cte = ctprep + ctprod + ctalm;
    return {n,To,ctprep,ctprod,ctalm,cte,qo,liminf,cprod}
    //q[x-1] = limite inferior que se tomo el qo
    //bi[x-1] = el precio que tomo el qo
}

module.exports = ModeloSimpleSinAgotamientoPorLote;