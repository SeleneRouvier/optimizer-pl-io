import React from "react";
import { Card, CardTitle, CardHeader, CardBody } from "reactstrap";
import modeloTriangular from "../Functions/ModeloTriangular";
import validar from "../Functions/Validar";

class Presentation extends React.Component {
  constructor(props) {
    super(props);
    this.model = props.model;
    this.resultado = null;
  }

  mostrarResultados = () => {
    var { demanda, tiempoTotal, costoAlm, costoPrep, costoProd, demandaUnit, velocidadProd } = this.model;

    const variables = { demanda, tiempoTotal, costoAlm, costoPrep, costoProd, demandaUnit, velocidadProd };

    let valido = validar(variables);

    if (valido !== true) return valido;

    var { demanda, tiempoTotal, costoAlm, costoPrep, costoProd, demandaUnit, velocidadProd } = variables;

    const { qo, n, ctprep, ctprod, ctalm, cte, To, Tp, sm } = modeloTriangular(demanda, costoPrep, costoProd, velocidadProd, tiempoTotal, costoAlm, demandaUnit);

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
          <p>cte = {cte}</p>
          <p>To = {To}</p>
          <p>Tp = {Tp}</p>
          <p>sm = {sm}</p>
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
