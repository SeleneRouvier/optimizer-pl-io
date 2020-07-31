import React from "react";
import { Container, Row, Col, Card, CardBody, CardHeader, CardTitle, UncontrolledPopover, PopoverBody } from "reactstrap";
import ComponentsD from "./Ds";
import ComponentsQ from "./Qs";
import CampoUnitario from './CampoUnitarioBase';
import TiempoTotal from './TiempoTotal';

class Configuration extends React.Component {

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

  handlePorcAplicaCostoProd = e => this.handleGeneral(e, 'porcAplicaCostoProd');

  handlePorcInteres = e => this.handleGeneral(e, 'porcInteres');

  handleCostoPropioMercaderia = e => this.handleGeneral(e, 'costoPropioMercaderia');

  handleUnidadTiempoTotal = e => this.handleGeneral(e, 'unidadTiempo');

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
      return this.columnaGenerica('Stock de protección (sp)', 'Stock de protección', this.handleStockProteccion)
    }
  }

  demandaUnit() {
    if (this.props.modeloTriangular) {
      return this.columnaGenerica('Demanda Unitaria (d) [días]', 'Demanda Unitaria', this.handleDemandaUnitaria)
    }
  }

  costoAgotamiento() {
    if (this.props.agotamientoSimple) {
      return this.columnaGenerica('Costo de Agotamiento (C2)', 'Costo de Agotamiento', this.handleCostoAgotamiento)
    }
  }

  qsyds() {
    if (this.props.simpleSinAgot) {
      return (
        <Col>
          <Row>
            <Card outline color="secondary" className="w-100 mt-3" id="B">
              <CardHeader>
                <CardTitle className="text-left">
                  <h4>Costo de producto</h4>
                </CardTitle>
              </CardHeader>
              <CardBody>
                <ComponentsD
                  ds={this.props.status.ds}
                  handleDs={this.handleDs}
                /></CardBody>
            </Card>
            <UncontrolledPopover placement="right" target="B" trigger="hover">
              <PopoverBody>
                <p>Los valores de los costos de producto deben estar ordenados ascendentemente.</p>
              </PopoverBody>
            </UncontrolledPopover>
          </Row>
          <Row>
            <Card outline color="secondary" className="w-100 mt-3" id="Q">
              <CardHeader>
                <CardTitle className="text-left">
                  <h4>Limite de lotes</h4>
                </CardTitle>
              </CardHeader>
              <CardBody>
                <ComponentsQ
                  qs={this.props.status.qs}
                  handleQs={this.handleQs}
                /></CardBody>
            </Card>
            <UncontrolledPopover placement="right" target="Q" trigger="hover">
              <PopoverBody>
                <p>Los valores de los limites de lotes deben estar ordenados descendentemente.</p>
              </PopoverBody>
            </UncontrolledPopover>
          </Row>
        </Col>
      )
    }
  }


  velocidadProd() {
    if (this.props.modeloTriangular) {
      return this.columnaGenerica('Velocidad de Producción (p) [días]', 'Velocidad de Producción', this.handleVelocidadProduccion)
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
      return this.columnaGenerica("Costo propio de la mercadería (C1')", 'Costo propio de la mercadería', this.handleCostoPropioMercaderia)
    }
  }

  costoDeProducto() {
    if (!this.props.simpleSinAgot) {
      return this.columnaGenerica("Costo de Producto (b)", 'Costo de Producto', this.handleCostoProd)
    }
  }

  render() {
    return (
      <>
        <h3>Cargamos los datos de nuestro modelo</h3>
        <Container>
          <Row>
            {this.columnaGenerica("Demanda (D)", 'Demanda', this.handleDemanda)}

            <Col xs={12} md={6} className="my-4 mx-auto ">
              <Card outline color="secondary" className="w-100 mt-3">
                <CardHeader>
                  <CardTitle className="text-left">
                    <h4>Tiempo Total (T)</h4>
                  </CardTitle>
                </CardHeader>
                <CardBody className="mx-auto">
                  <TiempoTotal
                    nombre="Tiempo Total (T)"
                    handleChange={this.handleTiempoTotal}
                    handleChangeUnit={this.handleUnidadTiempoTotal}
                    selected={this.props.status.unidadTiempo}
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            {this.costoAlm()}

            {this.columnaGenerica("Costo de Preparación (K)", 'Costo de Preparación', this.handleCostoPrep)}
          </Row>

          <Row>
            {this.costoDeProducto()}

            {this.sp()}
            {this.demandaUnit()}
            {this.velocidadProd()}
            {this.costoAgotamiento()}

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

export default Configuration;
