const {CalcularN,CalcularToComun,CostoTotalPreparacionComun,CostoTotalProductoComun,CalcularqoComun } = require("./FuncionesComunes");
const { mode } = require("mathjs");

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
    let xoptimo;
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
    let ctprep, ctprod, ctalm, cte;
    xoptimo = x-1;
    let array = new Array();
    let cprod = bi[xoptimo];
    ctprep = CostoTotalPreparacionComun(D,qo,K);
    ctprod = CostoTotalProductoComun(cprod, D);
    ctalm = CostoTotalAlmacenamiento(qo,T,C1);
    cte = ctprep + ctprod + ctalm;
    let model = new Object();
    model.cte = cte;
    model.qo = qo;
    model.bi = cprod;
    model.liminf = q[xoptimo];
    model.ctprep = ctprep;
    model.ctprod = ctprod;
    model.ctalm = ctalm;
    array.push(model);
    let modelmin = new Object();
    modelmin = model;
    if (xoptimo !== 0) {
        for (x=xoptimo-1; x>=0; x--){
            liminf = q[x];
            qo = liminf;
            cdi = CostoDineroInmovilizado(P,bi[x]);
            Ci = CalcularCi(bi[x],PorcCostoProd)+Cientrada;
            C1 = CalcularC1(cdi,Ci);
            cprod = bi[x];
            ctprep = CostoTotalPreparacionComun(D,qo,K);
            ctprod = CostoTotalProductoComun(cprod, D);
            ctalm = CostoTotalAlmacenamiento(qo,T,C1);
            cte = ctprep + ctprod + ctalm;
            model.cte = cte;
            model.qo = qo;
            model.bi = bi[x];
            model.liminf = liminf;
            model.ctprep = ctprep;
            model.ctprod = ctprod;
            model.ctalm = ctalm;
            array.push(model);
        }
        ctemin =Number.MAX_VALUE;
        for (i=0; i<array.length; i++) {
            if (array[i].cte < ctemin) {
                modelmin = array[i];
                ctemin = array[i].cte;
            }
        }
    }
    const n = CalcularN(qo,D);
    const To = CalcularToComun(K,T,D,C1);
    ctprep = modelmin.ctprep;
    ctalm = modelmin.ctalm;
    ctprod = modelmin.ctprod;
    cte = modelmin.cte;
    qo = modelmin.qo;
    liminf = modelmin.liminf;
    cprod = modelmin.bi;
    return {n,To,ctprep,ctprod,ctalm,cte,qo,liminf,cprod}
    //q[x-1] = limite inferior que se tomo el qo
    //bi[x-1] = el precio que tomo el qo
}

module.exports = ModeloSimpleSinAgotamientoPorLote;