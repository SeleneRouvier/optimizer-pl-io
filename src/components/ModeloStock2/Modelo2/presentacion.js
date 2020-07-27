import React from "react";
import { Card, CardTitle, CardHeader, CardBody } from "reactstrap";
import modelo2 from "../Functions/modelo2";

class Presentation extends React.Component {
  constructor(props) {
    super(props);
    this.model = props.model;
    this.resultado = null;
  }

  mostrarResultados = () => {
    let { demanda, tiempoTotal, costoAlm, costoPrep, costoProd, stockProt } = this.model;

    if (demanda.length === 0 || tiempoTotal.length === 0 || costoAlm.length === 0 || costoPrep.length === 0 || costoProd.length === 0 || stockProt.length === 0) {
      return <h3>Modelo incompleto</h3>
    }

    demanda = parseInt(demanda);
    tiempoTotal = parseInt(tiempoTotal);
    costoAlm = parseInt(costoAlm);
    costoPrep = parseInt(costoPrep);
    costoProd = parseInt(costoProd);
    stockProt = parseInt(stockProt);

    if (demanda < 0 || tiempoTotal < 0 || costoAlm < 0 || costoPrep < 0 || costoProd < 0 || stockProt < 0) {
      return <h3>No pueden existir numeros negativos</h3>
    }

    if (Number.isNaN(demanda) || Number.isNaN(tiempoTotal) || Number.isNaN(costoAlm) || Number.isNaN(costoPrep) || Number.isNaN(costoProd) || Number.isNaN(stockProt)) {
      return <h3>Valores no numericos</h3>
    }

    const {qo, n, ctprep, ctprod, ctalm, casp, cmsp, cte, To, cteo} = modelo2(demanda, costoPrep, costoProd, costoAlm, tiempoTotal, stockProt);

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
