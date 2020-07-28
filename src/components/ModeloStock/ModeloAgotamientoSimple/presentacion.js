import React from "react";
import { Card, CardTitle, CardHeader, CardBody } from "reactstrap";
import modeloSconAgotamiento from "../Functions/ModeloSimpleConAgotamiento";
import validar from "../Functions/Validar";

class Presentation extends React.Component {
  constructor(props) {
    super(props);
    this.model = props.model;
  }

  mostrarResultados = () => {

    var { demanda, tiempoTotal, costoAlm, costoPrep, costoProd, stockRealAlmacenado, costoAgotamiento } = this.model;

    const variables = { demanda, tiempoTotal, costoAlm, costoPrep, costoProd, stockRealAlmacenado, costoAgotamiento }

    let valido = validar(variables);

    if (valido !== true) return valido;

    var { demanda, tiempoTotal, costoAlm, costoPrep, costoProd, stockRealAlmacenado, costoAgotamiento } = variables;

    const { qo, n, ctprep, ctprod, ctalm, ca, cte, so, To, cteo } = modeloSconAgotamiento(demanda, costoPrep, costoProd, stockRealAlmacenado, tiempoTotal, costoAlm, costoAgotamiento);

    return <Card outline color="secondary" className="w-100 mt-3 mx-auto">
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
        <p>ca = {ca}</p>
        <p>cte = {cte}</p>
        <p>so = {so}</p>
        <p>To = {To}</p>
        <p>cteo = {cteo}</p>
      </CardBody>
    </Card>
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
