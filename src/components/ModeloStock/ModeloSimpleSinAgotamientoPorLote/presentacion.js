import React from "react";
import { Card, CardTitle, CardHeader, CardBody } from "reactstrap";
import modelo4 from "../Functions/ModeloSimpleSinAgotamientoPorLote";
import validar from "../Functions/Validar";

class Presentation extends React.Component {
  constructor(props) {
    super(props);
    this.model = props.model;
  }

  mostrarResultados = () => {

    var { demanda, tiempoTotal, porcAplicaCostoProd, costoPrep, costoProd, ds, qs, costoPropioMercaderia, porcInteres } = this.model;

    const variables = { demanda, tiempoTotal, porcAplicaCostoProd, costoPrep, costoProd, costoPropioMercaderia, porcInteres };

    let valido = validar(variables);

    if (valido !== true) return valido;

    var { demanda, tiempoTotal, porcAplicaCostoProd, costoPrep, costoProd, costoPropioMercaderia, porcInteres } = variables;

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

    if (ds.length !== qs.length) {
      return <h3>La cantidad de b's debe ser igual a la cantidad de q's</h3>
    }

    if (ds.length === 0 || qs.length === 0) return <h3>Modelo incompleto</h3>

    const bTransformado = ds.map(d => parseInt(d));
    const qTransformado = qs.map(q => parseInt(q));

    if (ds.length !== bTransformado.filter(b => {
      if (Number.isNaN(b)) {
        return false;
      }
      return true;
    }).length) {
      return <h3>Valores no numericos</h3>
    };

    if (qs.length !== qTransformado.filter(q => {
      if (Number.isNaN(q)) {
        return false;
      }
      return true;
    }).length) {
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
