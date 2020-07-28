import React from "react";
import { Card, CardTitle, CardHeader, CardBody } from "reactstrap";
import {makeVisFlexible,GradientDefs,LineSeriesCanvas,Borders,XYPlot, XAxis, YAxis, HorizontalGridLines,LineSeries, AreaSeries, VerticalGridLines,MarkSeries,DiscreteColorLegend,Hint} from 'react-vis';
import modelo1 from "../Functions/modelo1";

class Presentation extends React.Component {
  constructor(props) {
    super(props);
    this.model = props.model;
    this.resultado = null;
  }
  state = {
    useCanvas: false
  };

  plotearGrafico = () => {
    if (this.resultado){
      const FlexibleGraph = makeVisFlexible(XYPlot);
    const {useCanvas} = this.state;
    const content = useCanvas ? 'TOGGLE TO SVG' : 'TOGGLE TO CANVAS';
    const Line = useCanvas ? LineSeriesCanvas : LineSeries;
    const T = this.model.tiempoTotal * 30;
    const To = this.resultado.To*30;
    const items = [];
    const incremento = To;
    let topey = this.resultado.qo;
    let iniciox = 0;
    let finx = To;
    let finy = 0;
    while (finx <= T) {
      items.push(<Line
        className="primera reposicion"
        data={[{x: iniciox, y: topey}, {x: finx, y: finy}]}
      />);
      items.push(<Line
        className="se repone"
        data={[{x: finx, y: 0}, {x: finx, y: topey}]}
      />);
      /* 
      <Line
        className="primera reposicion"
        data={[{x: iniciox, y: topey}, {x: finx, y: finy}]}
      />
      <Line
        className="se repone"
        data={[{x: finx, y: 0}, {x: finx, y: topey}]}
      />
      */
      iniciox = finx;
      finx = finx + incremento;
    }
    console.log(T, finx);
    if (finx !== T) {
      console.log('entre aqui',finx-incremento);
      const delta = T - (finx-incremento);
      finx = T;
      finy = (-this.resultado.qo/To)*delta+this.resultado.qo;
      console.log('DALE',finx, delta, finy);
      items.push(<Line
        className="primera reposicion"
        data={[{x: iniciox, y: topey}, {x: finx, y: finy}]}
      />);
      items.push(<Line
        className="Tiempo total"
        data={[{x: finx, y: 0}, {x: finx, y: topey}]}
      />);
      /* 
      <Line
        className="primera reposicion"
        data={[{x: iniciox, y: topey}, {x: finx, y: finy}]}
      />
      <Line
        className="Tiempo total"
        data={[{x: finx, y: 0}, {x: finx, y: topey}]}
      />
      */
    }
    console.log('que esta pasando aca??',T,finx,topey,finy,iniciox)
      return (
    <FlexibleGraph height={500}>
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis />
      <YAxis />
      {items}
    </FlexibleGraph>
  );
    }
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

    this.resultado = modelo1(demanda, costoPrep, costoAlm, tiempoTotal, costoProd);
    const { qo, n, CTPre, CTProd, CTAlm, CTE, To, CTEo } = this.resultado;
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
        {this.plotearGrafico()}
      </>
    );
  }
}

export default Presentation;
