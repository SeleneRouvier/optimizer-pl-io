import React from "react";
import { Card, CardTitle, CardHeader, CardBody } from "reactstrap";
import modelo2 from "../Functions/modelo2";
import validar from "../Functions/Validar";

class Presentation extends React.Component {
  constructor(props) {
    super(props);
    this.model = props.model;
    this.resultado = null;
  }

  validar(variables) {
    for (const prop in variables) {
      if (variables[prop].length === 0) return <h3>Modelo incompleto</h3>;

      if (prop === 'costoAlm' || prop === 'costoPrep' || prop === 'costoProd' || prop === 'costoPropioMercaderia' || prop === 'costoAgotamiento' || prop === 'tiempoTotal') {
        variables[prop] = Number(variables[prop]);
      } else {
        variables[prop] = parseInt(variables[prop]);
      }

      if (Number.isNaN(variables[prop])) return <h3>Valores no numericos</h3>;
      if (variables[prop] < 0) return <h3>No pueden existir numeros negativos</h3>;
    }

    return true;
  }

  mostrarResultados = (variables) => {

    const variables = this.model;

    let valido = this.validar(variables);

    if (valido !== true) return valido;

    var { demanda, tiempoTotal, costoAlm, costoPrep, costoProd, stockProt } = variables;

    const { qo, n, ctprep, ctprod, ctalm, casp, cmsp, cte, To, cteo } = modelo2(demanda, costoPrep, costoProd, costoAlm, tiempoTotal, stockProt);

    return (
      <Card outline color="secondary" className="w-100 mt-3 mx-auto">
        <CardHeader>
          <CardTitle className="text-left">
            <h4>Resultados</h4>
          </CardTitle>
        </CardHeader>
        <CardBody className="mx-auto">
          <p>qo = {qo}</p>
          <p>n = {n}</p>
          <p>ctprep = {ctprep}</p>
          <p>ctprod = {ctprod}</p>
          <p>ctalm = {ctalm}</p>
          <p>casp = {casp}</p>
          <p>cmsp = {cmsp}</p>
          <p>cte = {cte}</p>
          <p>To = {To}</p>
          <p>cteo = {cteo}</p>
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