const math = require("mathjs");
const { CalcularqoComun, CalcularN, CalcularToComun, CalcularCTEoComun, CostoTotalPreparacionComun, CostoTotalProductoComun } = require('./FuncionesComunes');

/* 
Modelo 1 - Modelo de Wilson
Demanda deterministica y constante
Modelo simple sin Agotamiento
d 	= demanda unitaria
K 	= costo de preparacion, lanzamiento o emision de la odern de adquisicion o produccion
C1 	= costo de almacenamiento
T 	= Tiempo total
D 	= demanda total en un tiempo total T
b 	= costo del producto, de adquisicion o produccion
n 	= veces que se solicita un reaprovisionamiento
to 	= tiempo optimo de realizar reaprovisionamiento
*/
function CostoTotalAlmacenamiento(q, T, C1) {
    let ctalm = 0.5 * T * q * C1;
    return ctalm;
}
function ModeloWilson(D,K,C1,T,b){
	let qo = Math.ceil(CalcularqoComun(K,D,T,C1)); 
	if (qo > D) {
        qo = D;
    }
    const n = CalcularN(qo,D);
    const To = CalcularToComun(K,T,D,C1);
    const CTPre = CostoTotalPreparacionComun(D,qo,K);
    const CTProd = CostoTotalProductoComun(b, D);
    const CTAlm = CostoTotalAlmacenamiento(qo, T, C1);
    const CTEo = CalcularCTEoComun(CTProd,T,D,K,C1);
    const CTE = CTPre + CTProd + CTAlm;
	//Calculamos CTEo
	//CTEo = Costo total esperado optimo
	return {qo, n, CTPre, CTProd, CTAlm, CTE, To, CTEo};
}

module.exports = ModeloWilson;