import React from "react";
import { Card, CardTitle, CardHeader, CardBody } from "reactstrap";
import modeloTriangular from "../Functions/ModeloTriangular";
import {makeVisFlexible,LabelSeries,
  LineSeriesCanvas,XYPlot, XAxis, YAxis,
  HorizontalGridLines,LineSeries, AreaSeries,
  VerticalGridLines,MarkSeries,DiscreteColorLegend} from 'react-vis';
import validar from "../Functions/Validar";

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
      const Line = useCanvas ? LineSeriesCanvas : LineSeries;
      //ver lo de tiempo
      let unidad;
      if (this.model.unidadTiempo === "Meses") {
        unidad = 30;
      } else {
        unidad = 360;
      }
      const T = this.model.tiempoTotal * unidad;
      const To = this.resultado.To*unidad;
      const items = [];
      const incremento = To;
      let topey = this.resultado.sm;
      let iniciox = 0;
      let finx = To;
      let middlex = this.resultado.Tp;
      let finy = 0;
      while (finx <= T) {
        items.push(<Line
          className="utilizacionyFabricacion"
          color="#12939A"
          data={[{x: iniciox, y: 0}, {x: middlex, y: topey}]}
        />);
        items.push(<Line
          className="utilizacion"
          color="#7bc96f"
          data={[{x: middlex, y: topey}, {x: finx, y: 0}]}
        />);
        items.push(<AreaSeries
        className="area-series-example"
        opacity= {0.25}
        color="orange"
        data={[{x: iniciox, y: 0}, {x: middlex, y: topey}, {x: finx, y: 0}]}
        />);
        items.push(<Line
          className="maximoStock"
          color="brown"
          strokeDasharray={useCanvas ? [7, 3] : '7, 3'}
          data={[{x: middlex, y: finy}, {x: middlex, y: topey}]}
        />);
        iniciox = finx;
        middlex = middlex + incremento;
        finx = finx + incremento;
      }
      if (finx !== T) {
        let delta = T - (finx-incremento);
        if (delta > this.resultado.Tp){
          delta = delta - this.resultado.Tp;
          finx = T;
          finy = (-this.resultado.sm/(To-this.resultado.Tp))*delta+this.resultado.sm;
          items.push(<Line
            className="utilizacionyFabricacion"
            color="#12939A"
            data={[{x: iniciox, y: 0}, {x: middlex, y: topey}]}
          />);
          items.push(<AreaSeries
            className="area-series-example"
            opacity= {0.25}
            color="orange"
            data={[{x: iniciox, y: 0}, {x: middlex, y: topey}, {x: finx, y: finy}]}
          />);
          items.push(<Line
            className="maximoStock"
            color="brown"
            strokeDasharray={useCanvas ? [7, 3] : '7, 3'}
            data={[{x: middlex, y: 0}, {x: middlex, y: topey}]}
          />);
          items.push(<Line
            className="utilizacion"
            color="#7bc96f"
            data={[{x: middlex, y: topey}, {x: finx, y: finy}]}
          />);
        } else {
          if (delta < this.resultado.Tp){
            finx = T;
            finy = (this.resultado.sm/this.resultado.Tp)*delta; 
          }
          items.push(<Line
            className="utilizacionyFabricacion"
            color="#12939A"
            data={[{x: iniciox, y: 0}, {x: finx, y: finy}]}
          />);
          items.push(<AreaSeries
            className="area-series-example"
            opacity= {0.25}
            color="orange"
            data={[{x: iniciox, y: 0}, {x: finx, y: finy}]}
          />);
        }
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
            color="black"
            strokeDasharray={useCanvas ? [7, 3] : '7, 3'}
            style={{
              strokeLinejoin: 'round',
              strokeWidth: 4
            }}
            data={[{x: 0, y: 0}, {x: 0, y: this.resultado.qo}]}
          />
          <Line
            className="To"
            color="blue"
            style={{
              strokeLinejoin: 'round',
              strokeWidth: 4
            }}
            strokeDasharray={useCanvas ? [7, 3] : '7, 3'}
            data={[{x: 0, y: -50}, {x: To, y: -50}]}
          />
          <Line
            className="T1"
            color="green"
            style={{
              strokeLinejoin: 'round',
              strokeWidth: 4
            }}
            strokeDasharray={useCanvas ? [7, 3] : '7, 3'}
            data={[{x: 0, y: 0}, {x: this.resultado.Tp, y: 0}]}
          />
          <MarkSeries
              className="mark-series-example"
              strokeWidth={2}
              sizeRange={[5, 15]}
              data={[{x: 0, y: this.resultado.qo, size: 5},{x: this.resultado.Tp, y: topey, size: 5},{x: To, y: 0, size: 5},{x: this.resultado.Tp, y: 0, size: 5}]}/>
          <LabelSeries animation allowOffsetToBeReversed 
          data={[{x: 0, y: this.resultado.qo, label: 'qo='+this.resultado.qo, size: 10},
          {x: this.resultado.Tp, y: topey, label: 'sm='+this.resultado.sm, size: 10},
          {x: To, y: -50, label: 'To='+To, size: 10},
          {x: this.resultado.Tp, y: 0, label: 'Tp='+this.resultado.Tp, size: 10}]}
          labelAnchorX="start" />
          <XAxis title="tiempo" />
          <YAxis />
          {items}
          <DiscreteColorLegend style={{position: 'absolute', left: '50px', top: '10px'}} 
          orientation="horizontal"
          items={[ { title: 'Utilizacion', color: '#7bc96f' },
          { title: 'Tiempo total', color: 'Red' },
          { title: 'Utilizacion y fabricacion', color: '#12939A' },
          { title: 'sm', color: 'brown', strokeStyle: "dashed" },
          { title: 'To', color: 'blue', strokeStyle: "dashed" },
          { title: 'Tp', color: 'green', strokeStyle: "dashed" },
          { title: 'qo', color: 'black', strokeStyle: "dashed" } ]} />
        </FlexibleGraph>
      );
    }
  }

  mostrarResultados = () => {
    var { demanda, tiempoTotal, costoAlm, costoPrep, costoProd, demandaUnit, velocidadProd } = this.model;

    const variables = { demanda, tiempoTotal, costoAlm, costoPrep, costoProd, demandaUnit, velocidadProd };

    let valido = validar(variables);

    if (valido !== true) return valido;

    var { demanda, tiempoTotal, costoAlm, costoPrep, costoProd, demandaUnit, velocidadProd } = variables;

    this.resultado = modeloTriangular(demanda, costoPrep, costoProd, velocidadProd, tiempoTotal, costoAlm, demandaUnit);

    const { qo, n, ctprep, ctprod, ctalm, cte, To, Tp, sm } = this.resultado;
    
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
        <hr class="my-2"></hr>
        <h3>Cantidad de stock en función del tiempo</h3>
        {this.plotearGrafico()}
      </>
    );
  }
}

export default Presentation;
