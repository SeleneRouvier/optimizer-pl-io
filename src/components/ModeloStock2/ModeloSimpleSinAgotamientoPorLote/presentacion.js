import React from "react";
import { Card, CardTitle, CardHeader, CardBody } from "reactstrap";
//import modelo1 from "./modelo1";

class Presentation extends React.Component {
  constructor(props) {
    super(props);
    this.model = props.model;
    this.resultado = null;
  }

  mostrarResultados = () => {
    let { demanda, tiempoTotal, costoAlm, costoPrep, costoProd, ds, qs } = this.model;

    let flag = false;
    ds.forEach(d => {
      if (d.length === 0) flag = true;
    })

    qs.forEach(q => {
      if (q.length === 0) flag = true;
    })

    if ( flag || demanda.length === 0 || tiempoTotal.length === 0 || costoAlm.length === 0 || costoPrep.length === 0 || costoProd.length === 0) {
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

    var errorDatos;
    var error = false;
    var numeroArista;

    if (error) return <Card> <h3>Error en arista A{numeroArista}:</h3><p>{errorDatos}</p></Card>

    const resultados = 0;//modelo1(demanda, costoPrep, costoAlm, tiempoTotal);


    let mostrar = [];
    if (resultados != 0) {
      resultados.forEach(e => {
        const v = e.either();
        const w = e.other(v);

        mostrar.push(<h4>{`(${v}, ${w}): ${e.weight}`}</h4>);
      })
    }

    if (mostrar.length > 0) {
      return <Card outline color="secondary" className="w-100 mt-3 mx-auto">
        <CardHeader>
          <CardTitle className="text-left">
            <h4>Resultados</h4>
          </CardTitle>
        </CardHeader>
        <CardBody className="mx-auto">
          {mostrar}
        </CardBody>
      </Card>
    }
    return <h3>Adios</h3>
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
