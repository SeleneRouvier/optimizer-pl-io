import React from "react";
import { Container, Row, Col, Card, CardBody, CardHeader, CardTitle } from "reactstrap";
import ComponentsD from "./Ds";
import ComponentsQ from "./Qs";
import CampoUnitario from './CampoUnitarioBase';

class Processing extends React.Component {


  handleGeneral(e, atributo) {
    const model = this.props.status;
    model[atributo] = e.target.value;
    this.props.setModel(model);
  }

  handleDemanda = e => this.handleGeneral(e, 'demanda');

  handleTiempoTotal = e => this.handleGeneral(e, 'tiempoTotal');

  handleCostoAlm = e => this.handleGeneral(e, 'costoAlm');

  handleCostoPrep = e => this.handleGeneral(e, 'costoPrep');

  handleCostoProd = e => this.handleGeneral(e, 'costoProd');

  handleStockProteccion = e => this.handleGeneral(e, 'stockProt');

  handleDemandaUnitaria = e => this.handleGeneral(e, 'demandaUnit');

  handleVelocidadProduccion = e => this.handleGeneral(e, 'velocidadProd');

  handleCostoAgotamiento = e => this.handleGeneral(e, 'costoAgotamiento');

  handleStockRealAlmacenado = e => this.handleGeneral(e, 'stockRealAlmacenado');

  handlePorcAplicaCostoProd = e => this.handleGeneral(e, 'porcAplicaCostoProd');

  handlePorcInteres = e => this.handleGeneral(e, 'porcInteres');

  handleCostoPropioMercaderia = e => this.handleGeneral(e, 'costoPropioMercaderia');

  handleDs = ds => {
    const model = this.props.status;
    model.d = ds;
    this.props.setModel(model);
  }

  handleQs = qs => {
    const model = this.props.status;
    model.q = qs;
    this.props.setModel(model);
  }

  columnaGenerica(titulo, nombre, handle) {
    return (
      <Col xs={12} md={6} className="my-4 mx-auto ">
        <Card outline color="secondary" className="w-100 mt-3">
          <CardHeader>
            <CardTitle className="text-left">
              <h4>{titulo}</h4>
            </CardTitle>
          </CardHeader>
          <CardBody className="mx-auto">
            <CampoUnitario
              nombre={nombre}
              handleChange={handle}
            />
          </CardBody>
        </Card>
      </Col>
    )
  }

  sp() {
    if (this.props.modelo2) {
      return this.columnaGenerica('Stock de proteccion (sp)', 'Stock de proteccion', this.handleStockProteccion)
    }
  }

  demandaUnit() {
    if (this.props.modeloTriangular) {
      return this.columnaGenerica('Demanda Unitaria (d)', 'Demanda Unitaria', this.handleDemandaUnitaria)
    }
  }

  costoAgotamiento() {
    if (this.props.agotamientoSimple) {
      return this.columnaGenerica('Costo de Agotamiento (C2)', 'Costo de Agotamiento', this.handleCostoAgotamiento)
    }
  }

  stockRealAlmacenado() {
    if (this.props.agotamientoSimple) {
      return this.columnaGenerica('Stock Real Almacenado (s)', 'Stock Real Almacenado', this.handleStockRealAlmacenado)
    }
  }

  qsyds() {
    if (this.props.simpleSinAgot) {
      return (
        <Col>
          <Row>
            <Card outline color="secondary" className="w-100 mt-3">
              <CardHeader>
                <CardTitle className="text-left">
                  <h4>b</h4>
                </CardTitle>
              </CardHeader>
              <CardBody>
                <ComponentsD
                  ds={this.props.status.ds}
                  handleDs={this.handleDs}
                /></CardBody>
            </Card>
          </Row>
          <Row>
            <Card outline color="secondary" className="w-100 mt-3">
              <CardHeader>
                <CardTitle className="text-left">
                  <h4>q</h4>
                </CardTitle>
              </CardHeader>
              <CardBody>
                <ComponentsQ
                  qs={this.props.status.qs}
                  handleQs={this.handleQs}
                /></CardBody>
            </Card>
          </Row>
        </Col>
      )
    }
  }


  velocidadProd() {
    if (this.props.modeloTriangular) {
      return this.columnaGenerica('Velocidad de Produccion (p)', 'Velocidad de Produccion', this.handleVelocidadProduccion)
    }
  }

  costoAlm() {
    if (!this.props.simpleSinAgot) {
      return this.columnaGenerica('Costo de Almacenamiento (C1)', 'Costo de Almacenamiento', this.handleCostoAlm)
    }
  }

  porcInteres() {
    if (this.props.simpleSinAgot) {
      return this.columnaGenerica('Porcentaje de interés que se produciría con el dinero inmovilizado (p)', 'Porcentaje de interés', this.handlePorcInteres)
    }
  }

  porcAplicaCostoProd() {
    if (this.props.simpleSinAgot) {
      return this.columnaGenerica('Porcentaje Aplicado a Costo de Producto', 'Porcentaje Aplicado a Costo de Producto', this.handlePorcAplicaCostoProd)
    }
  }

  costoPropioMercaderia() {
    if (this.props.simpleSinAgot) {
      return this.columnaGenerica("Costo propio de la mercaderia (C1')", 'Costo propio de la mercaderia', this.handleCostoPropioMercaderia)
    }
  }

  render() {
    return (
      <>
        <h3>Cargamos los datos de nuestro modelo</h3>
        <Container>
          <Row>
            {this.columnaGenerica("Demanda (D)", 'Demanda', this.handleDemanda)}

            {this.columnaGenerica("Tiempo Total (T)", 'Tiempo Total', this.handleTiempoTotal)}
          </Row>

          <Row>
            {this.costoAlm()}

            {this.columnaGenerica("Costo de Preparacion (K)", 'Costo de Preparacion', this.handleCostoPrep)}
          </Row>

          <Row>
            {this.columnaGenerica("Costo de Producto (b)", 'DemanCosto de Productoda', this.handleCostoProd)}

            {this.sp()}
            {this.demandaUnit()}
            {this.velocidadProd()}
            {this.costoAgotamiento()}
            {this.stockRealAlmacenado()}

            {this.porcInteres()}
            {this.porcAplicaCostoProd()}
            {this.costoPropioMercaderia()}

          </Row>
          <Row>
            {this.qsyds()}
          </Row>
        </Container>
      </>
    );
  }
}

export default Processing;
