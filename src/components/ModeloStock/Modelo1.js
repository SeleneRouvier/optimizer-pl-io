
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
function Modelo1(d,K,C1,T){
	//calculo la demanda total D
	let D;
	D = d*T;

	//Calculo qo
	//qo = lote de reposicion optima
	let qo = sqrt((2*K*D)/(T*C1));
	//!!!! redondear para arriba!!
	//Si el tamaño de lotes es mayor a la demanda mensual se toma la demanda mensual no se produce de mas.
	//Si qo > D entonces qo = D;


	//Calculamos n
	let n;
	n = D / qo;

	//Calculamos to
	let to;
	to = (T*qo)/D;

	//Calculamos CTEo
	//CTEo = Costo total esperado optimo
	let CTEo;
	CTEo = CTPro + sqrt(2*T*D*K*C1);

	//Graficamos
	
	//------------------------------------------
	//Costo total de preparacion
	let CTPre;
	CTPre = D*K/q;
	//Costo total del producto
	let CTPro;
	CTPro = b+D;
	//Costo total de almacenamiento
	let CTA;
	CTA = 0.5*q*T*C1;
	//Costo total esperado
	let CTE;
	CTE = CTPre + CTPro + CTA;


}