import React from "react";
import { Card, CardTitle, CardHeader, CardBody } from "reactstrap";
import modelo4 from "../Functions/ModeloSimpleSinAgotamientoPorLote";

class Presentation extends React.Component {
  constructor(props) {
    super(props);
    this.model = props.model;
    this.resultado = null;
  }

  mostrarResultados = () => {
    console.log(this.model);
    let { demanda, tiempoTotal, porcAplicaCostoProd, costoPrep, costoProd, ds, qs, costoPropioMercaderia, porcInteres } = this.model;

    let flag = false;


    ds = ds.filter(d => {
      if (d.length === 0) {
        return false;
      }
      return true;
    });

    qs = qs.filter(q => {
      if (q.length === 0) {
        return false;
      }
      return true;
    });

    if (ds.length != qs.length) {
      return <h3>La cantidad de b's debe ser igual a la cantidad de q's</h3>
    }

    ds.forEach(d => {
      if (d.length === 0) flag = true;
    })

    qs.forEach(q => {
      if (q.length === 0) flag = true;
    })

    if (flag || demanda.length === 0 || tiempoTotal.length === 0 || costoPropioMercaderia.length === 0 || costoPrep.length === 0 || costoProd.length === 0 || porcAplicaCostoProd.length === 0 || porcInteres.length === 0) {
      return <h3>Modelo incompleto</h3>
    }

    demanda = parseInt(demanda);
    tiempoTotal = parseInt(tiempoTotal);
    costoPropioMercaderia = parseInt(costoPropioMercaderia);
    costoPrep = parseInt(costoPrep);
    costoProd = parseInt(costoProd);
    porcAplicaCostoProd = parseInt(porcAplicaCostoProd);
    porcInteres = parseInt(porcInteres);

    if (demanda < 0 || tiempoTotal < 0 || costoPropioMercaderia < 0 || costoPrep < 0 || costoProd < 0 || porcAplicaCostoProd < 0 || porcInteres < 0) {
      return <h3>No pueden existir numeros negativos</h3>
    }

    if (Number.isNaN(demanda) || Number.isNaN(tiempoTotal) || Number.isNaN(costoPropioMercaderia) || Number.isNaN(costoPrep) || Number.isNaN(costoProd) || Number.isNaN(porcAplicaCostoProd) | Number.isNaN(porcInteres)) {
      return <h3>Valores no numericos</h3>
    }

    const bTransformado = ds.map(d => parseInt(d));
    const qTransformado = qs.map(q => parseInt(q));

    if(ds.length != bTransformado.filter(b => {
      if (Number.isNaN(b)) {
        return false;
      }
      return true;
    }).length){
      return <h3>Valores no numericos</h3>
    };

    if(qs.length != qTransformado.filter(q => {
      if (Number.isNaN(q)) {
        return false;
      }
      return true;
    }).length){
      return <h3>Valores no numericos</h3>
    };

    const { n, To, ctprep, ctprod, ctalm, cte, qo, liminf, cprod } = modelo4(demanda, qTransformado, costoPrep, porcAplicaCostoProd, tiempoTotal, porcInteres, bTransformado, costoPropioMercaderia);

    return (
    <Card outline color="secondary" className="w-100 mt-3 mx-auto">
      <CardHeader>
        <CardTitle className="text-left">
          <h4>Resultados</h4>
        </CardTitle>
      </CardHeader>
      <CardBody className="mx-auto">
        <p>n = {n}</p>
        <p>To = {To}</p>
        <p>ctprep = {ctprep}</p>
        <p>ctprod = {ctprod}</p>
        <p>ctalm = {ctalm}</p>
        <p>cte = {cte}</p>
        <p>qo = {qo}</p>
        <p>liminf = {liminf}</p>
        <p>cprod = {cprod}</p>
      </CardBody>
    </Card>)
  }

  render() {

    return (
      <>
        {this.mostrarResultados()}
      </>
    );
  }
}

export default Presentation;
