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

function CalcularCi(b,PorcCostoProd){
    let Ci = b * PorcCostoProd;
    return Ci;
}

function ModeloSimpleSinAgotamientoPorLote(D,q,K,PorcCostoProd,T,P,bi){
    let cdi, C1, Ci, qo;
    let x = 0;
    let limsup = Number.MAX_VALUE;
    let flag = true;
    while (flag && x < bi.length){
        flag = false;
        cdi = CostoDineroInmovilizado(P,bi[x]);
        Ci = CalcularCi(bi[x],PorcCostoProd);
        C1 = CalcularC1(cdi,Ci);
        qo = CalcularqoComun(K,D,T,C1);
        if (qo >= q[x] && qo < limsup){
            flag = true;
        }
        limsup = q[x];
        x++;
    }
    const n = CalcularN(qo,D);
    const To = CalcularToComun(K,T,D,C1);
    const ctprep = CostoTotalPreparacionComun(D,qo,K);
    const ctprod = CostoTotalProductoComun(bi[x-1], D);
    const ctalm = CostoTotalAlmacenamiento(qo,T,C1);
    const cte = ctprep + ctprod + ctalm;
    return {n,To,ctprep,ctprod,ctalm,cte,qo,q[x-1],bi[x-1]}
    //q[x-1] = limite inferior que se tomo el qo
    //bi[x-1] = el precio que tomo el qo
}
