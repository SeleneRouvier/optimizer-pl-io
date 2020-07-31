import React from "react";
import { Card, CardTitle, CardHeader, CardBody } from "reactstrap";
import modelo5 from "../Functions/ModeloSimpleSinAgotamientoPorLote";
import validar from "../Functions/Validar";
import {
  makeVisFlexible, LabelSeries,
  LineSeriesCanvas, XYPlot, XAxis, YAxis,
  HorizontalGridLines, LineSeries, AreaSeries,
  VerticalGridLines, MarkSeries, DiscreteColorLegend
} from 'react-vis';

class Presentation extends React.Component {
  constructor(props) {
    super(props);
    this.model = props.model;
    /*this.model.demanda=4800;
    this.model.tiempoTotal=1;
    this.model.porcAplicaCostoProd=0;
    this.model.costoPrep=3000;
    this.model.ds=[300,350,400];
    this.model.qs=[500,200,0];
    this.model.costoPropioMercaderia=36;
    this.model.porcInteres=2;
    this.model.unidadTiempo = "Años";*/
  }
  state = {
    useCanvas: false
  };
  plotearGraficoCostoPorLimite = () => {
    if (this.resultado) {
      const FlexibleGraph = makeVisFlexible(XYPlot);
      const { useCanvas } = this.state;
      const Line = useCanvas ? LineSeriesCanvas : LineSeries;
      //ver lo de tiempo
      let unidad;
      if (this.model.unidadTiempo === "Meses") {
        unidad = 30;
      } else {
        unidad = 360;
      }
      const items = [];
      let iniciox;
      let finx;
      const bi = this.resultado.bTransformado;
      const qi = this.resultado.qTransformado;
      for (var i = (this.resultado.bTransformado.length) - 1; i >= 0; i--) {
        iniciox = qi[i];
        if (i - 1 >= 0) {
          finx = qi[i - 1];
        } else {
          finx = qi[i] * 2;
        }
        items.push(<Line
          className="costoproducto"
          color="#12939A"
          data={[{ x: iniciox, y: bi[i] }, { x: finx, y: bi[i] }]}
        />);
        items.push(<Line
          className="linea"
          color="#7bc96f"
          strokeDasharray={useCanvas ? [7, 3] : '7, 3'}
          data={[{ x: finx, y: 0 }, { x: finx, y: bi[i] }]}
        />);
        items.push(<AreaSeries
          className="area-series-example"
          opacity={0.25}
          color="orange"
          data={[{ x: iniciox, y: bi[i] }, { x: finx, y: bi[i] }]}
        />);
        items.push(<MarkSeries
          className="mark-series-example"
          strokeWidth={2}
          sizeRange={[5, 15]}
          data={[{ x: iniciox, y: 0, size: 5 }]} />);
        items.push(<LabelSeries animation allowOffsetToBeReversed
          data={[{ x: iniciox, y: 0, label: 'qi=' + iniciox, size: 10 }]}
          labelAnchorX="start" />);
      }
      return (
        <Card outline color="secondary" className="w-100 mt-3 mx-auto">
          <CardHeader>
            <CardTitle className="text-left">
              <h4>Cantidad de stock en función del tiempo</h4>
            </CardTitle>
          </CardHeader>
          <FlexibleGraph
            height={500}
            margin={{ bottom: 80, left: 50, right: 10, top: 75 }}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis title="q" />
            <YAxis />
            <MarkSeries
              className="mark-series-example"
              strokeWidth={2}
              sizeRange={[5, 15]}
              data={[{ x: this.resultado.qo, y: 0, size: 5 }]} />
            <LabelSeries animation allowOffsetToBeReversed
              data={[{ x: this.resultado.qo, y: 0, label: 'qo=' + this.resultado.qo, size: 10 }]}
              labelAnchorX="start" />
            {items}
            <DiscreteColorLegend style={{ position: 'absolute', left: '50px', top: '10px' }}
              orientation="horizontal"
              items={[{ title: 'limite', color: '#7bc96f' },
              { title: 'Costo del producto', color: '#12939A' }]} />
          </FlexibleGraph>
        </Card>
      );
    }
  }
  mostrarResultados = () => {

    this.resultado = null;

    var { demanda, tiempoTotal, porcAplicaCostoProd, costoPrep, ds, qs, costoPropioMercaderia, porcInteres } = this.model;

    const variables = { demanda, tiempoTotal, porcAplicaCostoProd, costoPrep, costoPropioMercaderia, porcInteres };

    let valido = validar(variables);

    if (valido !== true) return valido;

    var { demanda, tiempoTotal, porcAplicaCostoProd, costoPrep, costoPropioMercaderia, porcInteres } = variables;

    console.log(variables);

    porcAplicaCostoProd = porcAplicaCostoProd / 100;
    porcInteres = porcInteres / 100;

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
    this.resultado = modelo5(demanda, qTransformado, costoPrep, porcAplicaCostoProd, tiempoTotal, porcInteres, bTransformado, costoPropioMercaderia);
    this.resultado["bTransformado"] = bTransformado;
    this.resultado["qTransformado"] = qTransformado;
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
        {this.plotearGraficoCostoPorLimite()}
      </>
    );
  }
}

export default Presentation;
