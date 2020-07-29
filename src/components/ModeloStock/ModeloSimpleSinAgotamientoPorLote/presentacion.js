import React from "react";
import { Card, CardTitle, CardHeader, CardBody } from "reactstrap";
import modelo5 from "../Functions/ModeloSimpleSinAgotamientoPorLote";
import validar from "../Functions/Validar";
import {makeVisFlexible,LabelSeries,
  LineSeriesCanvas,XYPlot, XAxis, YAxis,
  HorizontalGridLines,LineSeries, AreaSeries,
  VerticalGridLines,MarkSeries,DiscreteColorLegend} from 'react-vis';

class Presentation extends React.Component {
  constructor(props) {
    super(props);
    this.model = props.model;
  }
  state = {
    useCanvas: false
  };
  plotearGraficoCostoPorLimite = () => {
    if (this.resultado){
      const FlexibleGraph = makeVisFlexible(XYPlot);
      const {useCanvas} = this.state;
      const Line = useCanvas ? LineSeriesCanvas : LineSeries;
      //ver lo de tiempo
      const T = this.model.tiempoTotal * 30;
      const To = this.resultado.To*30;
      const T1 = this.resultado.T1*30;
      const T2 = this.resultado.T2*30;
      const items = [];
      const incremento = To;
      let topey = this.resultado.so;
      let iniciox = 0;
      let finx = To;
      const bottomy = this.resultado.so - this.resultado.qo;
      let finy = bottomy;
      console.log(this.resultado.bTransformado.length);
      for (var i=0; i < (this.resultado.bTransformado.length); i++){
        console.log();
      }
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
        finy = (-this.resultado.so/To)*delta+this.resultado.so;
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
      }
      items.push(<Line
          className="Tiempo total"
          color="Red"
          data={[{x: T, y: 0}, {x: T, y: topey}]}
        />);
      return (
      <FlexibleGraph
      height={500}
      margin={{bottom: 80, left: 50, right: 10, top: 75}}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <Line
          className="qo"
          color="red"
          style={{
            strokeLinejoin: 'round',
            strokeWidth: 4
          }}
          strokeDasharray={useCanvas ? [7, 3] : '7, 3'}
          data={[{x: 0, y: bottomy}, {x: 0, y: this.resultado.so}]}
        />
        <Line
          className="To"
          color="blue"
          style={{
            strokeLinejoin: 'round',
            strokeWidth: 4
          }}
          strokeDasharray={useCanvas ? [7, 3] : '7, 3'}
          data={[{x: 0, y: bottomy}, {x: To, y: bottomy}]}
        />
        <Line
          className="T1"
          color="yellow"
          style={{
            strokeLinejoin: 'round',
            strokeWidth: 4
          }}
          strokeDasharray={useCanvas ? [7, 3] : '7, 3'}
          data={[{x: 0, y: 0}, {x: T1, y: 0}]}
        />
        <Line
          className="T2"
          color="green"
          style={{
            strokeLinejoin: 'round',
            strokeWidth: 4
          }}
          strokeDasharray={useCanvas ? [7, 3] : '7, 3'}
          data={[{x: T1, y: 3}, {x: T1+T2, y: 3}]}
        />
        <MarkSeries
            className="mark-series-example"
            strokeWidth={2}
            sizeRange={[5, 15]}
            data={[{x: 0, y: this.resultado.so, size: 5},{x: To, y: bottomy, size: 5},{x: T1, y: 0, size: 5},{x: T1+T2, y: 0, size: 5}]}/>
        <LabelSeries animation allowOffsetToBeReversed 
        data={[{x: 0, y: this.resultado.so, label: 'so='+this.resultado.so, size: 10},
        {x: To, y: bottomy-15, label: 'To='+To, size: 10},
        {x: T1, y: 0, label: 'T1='+T1, size: 10},
        {x: T1+T2, y: -15, label: 'T2='+T2, size: 10}]}
        labelAnchorX="start" />
        <XAxis title="tiempo" />
        <YAxis />
        {items}
        <DiscreteColorLegend style={{position: 'absolute', left: '50px', top: '10px'}} 
        orientation="horizontal"
        items={[ { title: 'reposiciones', color: '#7bc96f' },
        { title: 'Tiempo total', color: 'Red' },
        { title: 'Stock', color: '#12939A' },
        { title: 'To', color: 'blue', strokeStyle: "dashed" },
        { title: 'T1', color: 'yellow', strokeStyle: "dashed" },
        { title: 'T2', color: 'green', strokeStyle: "dashed" },
        { title: 'qo', color: 'red', strokeStyle: "dashed" } ]} />
      </FlexibleGraph>
      );
    }
  }
  plotearGrafico = () => {
    if (this.resultado){
      const FlexibleGraph = makeVisFlexible(XYPlot);
      const {useCanvas} = this.state;
      const Line = useCanvas ? LineSeriesCanvas : LineSeries;
      //ver lo de tiempo
      const T = this.model.tiempoTotal * 30;
      const To = this.resultado.To*30;
      const T1 = this.resultado.T1*30;
      const T2 = this.resultado.T2*30;
      const items = [];
      const incremento = To;
      let topey = this.resultado.so;
      let iniciox = 0;
      let finx = To;
      const bottomy = this.resultado.so - this.resultado.qo;
      let finy = bottomy;
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
        finy = (-this.resultado.so/To)*delta+this.resultado.so;
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
      }
      items.push(<Line
          className="Tiempo total"
          color="Red"
          data={[{x: T, y: 0}, {x: T, y: topey}]}
        />);
      return (
      <FlexibleGraph
      height={500}
      margin={{bottom: 80, left: 50, right: 10, top: 75}}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <Line
          className="qo"
          color="red"
          style={{
            strokeLinejoin: 'round',
            strokeWidth: 4
          }}
          strokeDasharray={useCanvas ? [7, 3] : '7, 3'}
          data={[{x: 0, y: bottomy}, {x: 0, y: this.resultado.so}]}
        />
        <Line
          className="To"
          color="blue"
          style={{
            strokeLinejoin: 'round',
            strokeWidth: 4
          }}
          strokeDasharray={useCanvas ? [7, 3] : '7, 3'}
          data={[{x: 0, y: bottomy}, {x: To, y: bottomy}]}
        />
        <Line
          className="T1"
          color="yellow"
          style={{
            strokeLinejoin: 'round',
            strokeWidth: 4
          }}
          strokeDasharray={useCanvas ? [7, 3] : '7, 3'}
          data={[{x: 0, y: 0}, {x: T1, y: 0}]}
        />
        <Line
          className="T2"
          color="green"
          style={{
            strokeLinejoin: 'round',
            strokeWidth: 4
          }}
          strokeDasharray={useCanvas ? [7, 3] : '7, 3'}
          data={[{x: T1, y: 3}, {x: T1+T2, y: 3}]}
        />
        <MarkSeries
            className="mark-series-example"
            strokeWidth={2}
            sizeRange={[5, 15]}
            data={[{x: 0, y: this.resultado.so, size: 5},{x: To, y: bottomy, size: 5},{x: T1, y: 0, size: 5},{x: T1+T2, y: 0, size: 5}]}/>
        <LabelSeries animation allowOffsetToBeReversed 
        data={[{x: 0, y: this.resultado.so, label: 'so='+this.resultado.so, size: 10},
        {x: To, y: bottomy-15, label: 'To='+To, size: 10},
        {x: T1, y: 0, label: 'T1='+T1, size: 10},
        {x: T1+T2, y: -15, label: 'T2='+T2, size: 10}]}
        labelAnchorX="start" />
        <XAxis title="tiempo" />
        <YAxis />
        {items}
        <DiscreteColorLegend style={{position: 'absolute', left: '50px', top: '10px'}} 
        orientation="horizontal"
        items={[ { title: 'reposiciones', color: '#7bc96f' },
        { title: 'Tiempo total', color: 'Red' },
        { title: 'Stock', color: '#12939A' },
        { title: 'To', color: 'blue', strokeStyle: "dashed" },
        { title: 'T1', color: 'yellow', strokeStyle: "dashed" },
        { title: 'T2', color: 'green', strokeStyle: "dashed" },
        { title: 'qo', color: 'red', strokeStyle: "dashed" } ]} />
      </FlexibleGraph>
      );
    }
  }

  mostrarResultados = () => {

    var { demanda, tiempoTotal, porcAplicaCostoProd, costoPrep, ds, qs, costoPropioMercaderia, porcInteres } = this.model;

    const variables = { demanda, tiempoTotal, porcAplicaCostoProd, costoPrep, costoPropioMercaderia, porcInteres };

    let valido = validar(variables);

    if (valido !== true) return valido;

    var { demanda, tiempoTotal, porcAplicaCostoProd, costoPrep, costoPropioMercaderia, porcInteres } = variables;

    porcAplicaCostoProd = porcAplicaCostoProd/100;
    porcInteres = porcInteres/100;

    ds = ds.filter(d => {
      if (d.length === 0) {
        return false;
      }
      return true;
    });

    qs = qs.filter(q => {
      if (q.length === 0) {
        return false;
      }
      return true;
    });

    if (ds.length !== qs.length) {
      return <h3>La cantidad de b's debe ser igual a la cantidad de q's</h3>
    }

    if (ds.length === 0 || qs.length === 0) return <h3>Modelo incompleto</h3>

    const bTransformado = ds.map(d => Number(d));
    const qTransformado = qs.map(q => parseInt(q));

    if (ds.length !== bTransformado.filter(b => {
      if (Number.isNaN(b)) {
        return false;
      }
      return true;
    }).length) {
      return <h3>Valores no numericos</h3>
    };

    if (qs.length !== qTransformado.filter(q => {
      if (Number.isNaN(q)) {
        return false;
      }
      return true;
    }).length) {
      return <h3>Valores no numericos</h3>
    };
    console.log(porcInteres,porcAplicaCostoProd);
    this.resultado = modelo5(demanda, qTransformado, costoPrep, porcAplicaCostoProd, tiempoTotal, porcInteres, bTransformado, costoPropioMercaderia);
    this.resultado["bTransformado"]=bTransformado;
    const { n, To, ctprep, ctprod, ctalm, cte, qo, liminf, cprod } = this.resultado;

    return (
      <Card outline color="secondary" className="w-100 mt-3 mx-auto">
        <CardHeader>
          <CardTitle className="text-left">
            <h4>Resultados</h4>
          </CardTitle>
        </CardHeader>
        <CardBody className="mx-auto">
          <p>n = {n}</p>
          <p>To = {To}</p>
          <p>ctprep = {ctprep}</p>
          <p>ctprod = {ctprod}</p>
          <p>ctalm = {ctalm}</p>
          <p>cte = {cte}</p>
          <p>qo = {qo}</p>
          <p>liminf = {liminf}</p>
          <p>cprod = {cprod}</p>
        </CardBody>
      </Card>)
  }

  render() {

    return (
      <>
        {this.mostrarResultados()}
        <hr class="my-2"></hr>
        <h3>Costo del producto por cantidad de producto a adquirir</h3>
        {this.plotearGraficoCostoPorLimite()}
        {this.plotearGrafico()}
      </>
    );
  }
}

export default Presentation;
