import React from "react";
import { Card, CardTitle, CardHeader, CardBody } from "reactstrap";
import modelo1 from "../Functions/modelo1";

class Presentation extends React.Component {
  constructor(props) {
    super(props);
    this.model = props.model;
    this.resultado = null;
  }

  mostrarResultados = () => {
    let { demanda, tiempoTotal, costoAlm, costoPrep, costoProd } = this.model;

    if (demanda.length === 0 || tiempoTotal.length === 0 || costoAlm.length === 0 || costoPrep.length === 0 || costoProd.length === 0) {
      return <h3>Modelo incompleto</h3>
    }

    demanda = parseInt(demanda);
    tiempoTotal = parseInt(tiempoTotal);
    costoAlm = parseInt(costoAlm);
    costoPrep = parseInt(costoPrep);
    costoProd = parseInt(costoProd);

    if (demanda < 0 || tiempoTotal < 0 || costoAlm < 0 || costoPrep < 0 || costoProd < 0) {
      return <h3>No pueden existir numeros negativos</h3>
    }

    if (Number.isNaN(demanda) || Number.isNaN(tiempoTotal) || Number.isNaN(costoAlm) || Number.isNaN(costoPrep) || Number.isNaN(costoProd)) {
      return <h3>Valores no numericos</h3>
    }

    const { qo, n, CTPre, CTProd, CTAlm, CTE, To, CTEo } = modelo1(demanda, costoPrep, costoAlm, tiempoTotal, costoProd);


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
        <p>CTPre = {CTPre}</p>
        <p>CTProd = {CTProd}</p>
        <p>CTAlm = {CTAlm}</p>
        <p>CTE = {CTE}</p>
        <p>To = {To}</p>
        <p>CTEo = {CTEo}</p>
      </CardBody>
    </Card>
    )
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
