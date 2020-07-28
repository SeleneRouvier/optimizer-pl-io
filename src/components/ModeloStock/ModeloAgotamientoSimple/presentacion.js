import React from "react";
import { Card, CardTitle, CardHeader, CardBody } from "reactstrap";
import modeloSconAgotamiento from "../Functions/ModeloSimpleConAgotamiento";

class Presentation extends React.Component {
  constructor(props) {
    super(props);
    this.model = props.model;
  }

  mostrarResultados = () => {
    let { demanda, tiempoTotal, costoAlm , costoPrep, costoProd, stockRealAlmacenado, costoAgotamiento } = this.model;
    console.log(this.model)

    if (demanda.length === 0 || tiempoTotal.length === 0 || costoAlm.length === 0 || costoPrep.length === 0 || costoProd.length === 0 || stockRealAlmacenado.length === 0 || costoAgotamiento.length === 0 ) {
      return <h3>Modelo incompleto</h3>
    }

    demanda = parseInt(demanda);
    tiempoTotal = parseInt(tiempoTotal);
    costoAlm = parseInt(costoAlm);
    costoPrep = parseInt(costoPrep);
    costoProd = parseInt(costoProd);
    stockRealAlmacenado = parseInt(stockRealAlmacenado);
    costoAgotamiento = parseInt(costoAgotamiento);

    if (demanda < 0 || tiempoTotal < 0 || costoAlm < 0 || costoPrep < 0 || costoProd < 0 || stockRealAlmacenado < 0 || costoAgotamiento < 0 ) {
      return <h3>No pueden existir numeros negativos</h3>
    }

    if (Number.isNaN(demanda) || Number.isNaN(tiempoTotal) || Number.isNaN(costoAlm) || Number.isNaN(costoPrep) || Number.isNaN(costoProd) || Number.isNaN(stockRealAlmacenado) || Number.isNaN(costoAgotamiento) ) {
      return <h3>Valores no numericos</h3>
    }

    const {qo, n, ctprep, ctprod, ctalm, ca, cte, so, To, cteo} = modeloSconAgotamiento(demanda, costoPrep, costoProd,  stockRealAlmacenado, tiempoTotal, costoAlm, costoAgotamiento);

      return<Card outline color="secondary" className="w-100 mt-3 mx-auto">
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