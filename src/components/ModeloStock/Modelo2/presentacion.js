import React from "react";
import { Card, CardTitle, CardHeader, CardBody } from "reactstrap";
import {makeVisFlexible,GradientDefs,LabelSeries,
  LineSeriesCanvas,Borders,XYPlot, XAxis, YAxis,
  HorizontalGridLines,LineSeries, AreaSeries,
  VerticalGridLines,MarkSeries,DiscreteColorLegend,Hint} from 'react-vis';
import modelo2 from "../Functions/modelo2";
import validar from "../Functions/Validar";

class Presentation extends React.Component {
  constructor(props) {
    super(props);
    this.model = props.model;
    this.modeloTransformado = null;
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
      const T = this.modeloTransformado.tiempoTotal * 30;
      const To = this.resultado.To*30;
      const items = [];
      const incremento = To;

      let topey = this.resultado.qo + this.modeloTransformado.stockProt;
      let iniciox = 0;
      let finx = To;
      let finy = this.modeloTransformado.stockProt;
      while (finx <= T) {
        items.push(<Line
          className="primera reposicion"
          color="#12939A"
          data={[{x: iniciox, y: topey}, {x: finx, y: finy}]}
        />);
        items.push(<AreaSeries
        className="area-series-example"
        opacity= {0.25}
        color="orange"
        data={[{x: iniciox, y: topey}, {x: finx, y: finy}]}
        />);
        items.push(<Line
          className="se repone"
          color="#7bc96f"
          data={[{x: finx, y: finy}, {x: finx, y: topey}]}
        />);
        iniciox = finx;
        finx = finx + incremento;
      }
      if (finx !== T) {
        const delta = T - (finx-incremento);
        finx = T;
        finy = (-this.resultado.qo/To)*delta+this.resultado.qo;
        items.push(<Line
          className="primera reposicion"
          color="#12939A"
          data={[{x: iniciox, y: topey}, {x: finx, y: finy}]}
        />);
        items.push(<AreaSeries
        className="area-series-example"
        opacity= {0.25}
        color="orange"
        data={[{x: iniciox, y: topey}, {x: finx, y: finy}]}
        />);
        items.push(<Line
          className="Tiempo total"
          color="Red"
          data={[{x: finx, y: 0}, {x: finx, y: topey}]}
        />);
      }
      return (
      <FlexibleGraph
      height={500}
      margin={{bottom: 80, left: 50, right: 10, top: 75}}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <Line
          className="To"
          color="blue"
          style={{
            strokeLinejoin: 'round',
            strokeWidth: 4
          }}
          strokeDasharray={useCanvas ? [7, 3] : '7, 3'}
          data={[{x: 0, y: 0}, {x: To, y: 0}]}
        />
        <MarkSeries
            className="mark-series-example"
            strokeWidth={2}
            sizeRange={[5, 15]}
            data={[{x: 0, y: (this.resultado.qo + this.modeloTransformado.stockProt), size: 5},{x: To, y: 0, size: 5}]}/>
        <LabelSeries animation allowOffsetToBeReversed data={[{x: 0, y: (this.resultado.qo + this.modeloTransformado.stockProt), label: 'qo='+this.resultado.qo, size: 10},
        {x: To, y: 0, label: 'To='+To, size: 10},
        {x: 0, y: this.modeloTransformado.stockProt, label: 'sp='+this.modeloTransformado.stockProt, size: 10}]} />
        <Line
            className="qo"
            color="red"
            strokeDasharray={useCanvas ? [7, 3] : '7, 3'}
            style={{
              strokeLinejoin: 'round',
              strokeWidth: 4
            }}
            data={[{x: 0, y: this.modeloTransformado.stockProt}, {x: 0, y: (this.resultado.qo + this.modeloTransformado.stockProt)}]}
          />
        <Line
            className="sp"
            color="green"
            style={{
              strokeLinejoin: 'round',
              strokeWidth: 4
            }}
            strokeDasharray={useCanvas ? [7, 3] : '7, 3'}
            data={[{x: 0, y: this.modeloTransformado.stockProt}, {x: T, y: this.modeloTransformado.stockProt}]}
          />
        <XAxis title="tiempo" />
        <YAxis />
        {items}
        <DiscreteColorLegend style={{position: 'absolute', left: '50px', top: '10px'}} 
        orientation="horizontal"
        items={[ { title: 'reposiciones', color: '#7bc96f' },
        { title: 'Tiempo total', color: 'Red' },
        { title: 'Stock', color: '#12939A' },
        { title: 'To', color: 'blue', strokeStyle: "dashed" },
        { title: 'Stock de Proteccion', color: 'green', strokeStyle: "dashed" },
        { title: 'qo', color: 'red', strokeStyle: "dashed" } ]} />
      </FlexibleGraph>
      );
    }
  }

  mostrarResultados = () => {
    var { demanda, tiempoTotal, costoAlm, costoPrep, costoProd, stockProt } = this.model;

    const variables = { demanda, tiempoTotal, costoAlm, costoPrep, costoProd, stockProt }

    let valido = validar( variables );

    if (valido !== true) return valido;

    var {demanda, tiempoTotal, costoAlm, costoPrep, costoProd, stockProt} = variables;

    this.modeloTransformado = variables;

    this.resultado = modelo2(demanda, costoPrep, costoProd, costoAlm, tiempoTotal, stockProt);

    const { qo, n, ctprep, ctprod, ctalm, casp, cmsp, cte, To, cteo } = this.resultado;
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
        {this.plotearGrafico()}
      </>
    );
  }
}

export default Presentation;
