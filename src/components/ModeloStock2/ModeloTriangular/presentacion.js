import React from "react";
import { Card, CardTitle, CardHeader, CardBody } from "reactstrap";
import modeloTriangular from "../Functions/ModeloTriangular";

class Presentation extends React.Component {
  constructor(props) {
    super(props);
    this.model = props.model;
    this.resultado = null;
  }

  mostrarResultados = () => {
    let { demanda, tiempoTotal, costoAlm , costoPrep, costoProd, demandaUnit, velocidadProd } = this.model;

    console.log(this.model);

    if (demanda.length === 0 || tiempoTotal.length === 0 || costoAlm.length === 0 || costoPrep.length === 0 || costoProd.length === 0 || demandaUnit.length === 0 || velocidadProd.length === 0 ) {
      return <h3>Modelo incompleto</h3>
    }

    demanda = parseInt(demanda);
    tiempoTotal = parseInt(tiempoTotal);
    costoAlm = parseInt(costoAlm);
    costoPrep = parseInt(costoPrep);
    costoProd = parseInt(costoProd); 
    demandaUnit = parseInt(demandaUnit);
    velocidadProd = parseInt(velocidadProd);

    if (demanda < 0 || tiempoTotal < 0 || costoAlm < 0 || costoPrep < 0 || costoProd < 0 || demandaUnit < 0 || velocidadProd < 0) {
      return <h3>No pueden existir numeros negativos</h3>
    }

    if (Number.isNaN(demanda) || Number.isNaN(tiempoTotal) || Number.isNaN(costoAlm) || Number.isNaN(costoPrep) || Number.isNaN(costoProd) || Number.isNaN(demandaUnit) || Number.isNaN(velocidadProd)) {
      return <h3>Valores no numericos</h3>
    }

    var errorDatos;
    var error = false;
    var numeroArista;

    if (error) return <Card> <h3>Error en arista A{numeroArista}:</h3><p>{errorDatos}</p></Card>

    const {qo, n, ctprep, ctprod, ctalm, cte, To, Tp, sm} = modeloTriangular(demanda, costoPrep, costoProd, velocidadProd, tiempoTotal, costoAlm,  demandaUnit);

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
        <Card outline color="info" className="w-100 mt-3 mx-auto">
          <CardHeader>
            <CardTitle>
              {this.mostrarResultados()}
            </CardTitle>
          </CardHeader>
        </Card>
      </>
    );
  }
}

export default Presentation;
