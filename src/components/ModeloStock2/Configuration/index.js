import React from "react";
import { Container, Row, Col, Card, CardBody, CardHeader, CardTitle, Alert } from "reactstrap";
import Demanda from "./Demanda";
import DemandaUnitaria from "./DemandaUnitaria";
import TiempoTotal from "./TiempoTotal";
import CostoAlm from "./CostoAlm";
import CostoPrep from "./CostoPrep";
import CostoProd from "./CostoProd";
import StockProteccion from "./StockProteccion";
import VelocidadProd from "./VelocidadProd";
import StockRealAlmacenado from "./StockRealAlmacenado";
import CostoAgotamiento from "./CostoAgotamiento";
import ComponentsD from "./Ds";
import ComponentsQ from "./Qs";
import PorcAplicaCostoProd from "./PorcAplicaCostoProd";
import PorcInteres from "./PorcInteres";
import CostoPropioMercaderia from "./CostoPropioMercaderia";

class Processing extends React.Component {
  constructor(props) {
    super(props);
  }

  handleDemanda = e => {
    const model = this.props.status;
    model.demanda = e.target.value;
    this.props.setModel(model);
  };

  handleTiempoTotal = e => {
    const model = this.props.status;
    model.tiempoTotal = e.target.value;
    this.props.setModel(model);
  };

  handleCostoAlm = e => {
    const model = this.props.status;
    model.costoAlm = e.target.value;
    this.props.setModel(model);
  };

  handleCostoPrep = e => {
    const model = this.props.status;
    model.costoPrep = e.target.value;
    this.props.setModel(model);
  };

  handleCostoProd = e => {
    const model = this.props.status;
    model.costoProd = e.target.value;
    this.props.setModel(model);
  };

  handleStockProteccion = e => {
    const model = this.props.status;
    model.stockProt = e.target.value;
    this.props.setModel(model);
  };

  handleDemandaUnitaria = e => {
    const model = this.props.status;
    model.demandaUnit = e.target.value;
    this.props.setModel(model);
  }

  handleVelocidadProduccion = e => {
    const model = this.props.status;
    model.velocidadProd = e.target.value;
    this.props.setModel(model);
  }

  handleCostoAgotamiento = e => {
    const model = this.props.status;
    model.costoAgotamiento = e.target.value;
    this.props.setModel(model);
  }

  handleStockRealAlmacenado = e => {
    const model = this.props.status;
    model.stockRealAlmacenado = e.target.value;
    this.props.setModel(model);
  }

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

  handlePorcAplicaCostoProd = e => {
    const model = this.props.status;
    model.porcAplicaCostoProd = e.target.value;
    this.props.setModel(model);
  }

  handlePorcInteres = e => {
    const model = this.props.status;
    model.porcInteres = e.target.value;
    this.props.setModel(model);
  }

  handleCostoPropioMercaderia = e => {
    const model = this.props.status;
    model.costoPropioMercaderia = e.target.value;
    this.props.setModel(model);
  }

  sp() {
    if (this.props.modelo2) {
      return <Col xs={12} md={6} className="my-4 mx-auto ">
        <Card outline color="secondary" className="w-100 mt-3">
          <CardHeader>
            <CardTitle className="text-left">
              <h4>Stock de proteccion (sp)</h4>
            </CardTitle>
          </CardHeader>
          <CardBody className="mx-auto">
            <StockProteccion
              handleStockProteccion={this.handleStockProteccion}
            />
          </CardBody>
        </Card>
      </Col>
    }
  }

  demandaUnit() {
    if (this.props.modeloTriangular) {
      return (
        <Col xs={12} md={6} className="my-4 mx-auto ">
          <Card outline color="secondary" className="w-100 mt-3">
            <CardHeader>
              <CardTitle className="text-left">
                <h4>Demanda Unitaria (d)</h4>
              </CardTitle>
            </CardHeader>
            <CardBody className="mx-auto">
              <DemandaUnitaria
                handleDemandaUnitaria={this.handleDemandaUnitaria}
              />
            </CardBody>
          </Card>
        </Col>)
    }
  }

  costoAgotamiento() {
    if (this.props.agotamientoSimple) {
      return (
        <Col xs={12} md={6} className="my-4 mx-auto ">
          <Card outline color="secondary" className="w-100 mt-3">
            <CardHeader>
              <CardTitle className="text-left">
                <h4>Costo de Agotamiento (C2)</h4>
              </CardTitle>
            </CardHeader>
            <CardBody className="mx-auto">
              <CostoAgotamiento
                handleCostoAgotamiento={this.handleCostoAgotamiento}
              />
            </CardBody>
          </Card>
        </Col>)
    }
  }

  stockRealAlmacenado() {
    if (this.props.agotamientoSimple) {
      return (
        <Col xs={12} md={6} className="my-4 mx-auto ">
          <Card outline color="secondary" className="w-100 mt-3">
            <CardHeader>
              <CardTitle className="text-left">
                <h4>Stock Real Almacenado (s)</h4>
              </CardTitle>
            </CardHeader>
            <CardBody className="mx-auto">
              <StockRealAlmacenado
                handleStockRealAlmacenado={this.handleStockRealAlmacenado}
              />
            </CardBody>
          </Card>
        </Col>)
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
      return (
        <Col xs={12} md={6} className="my-4 mx-auto ">
          <Card outline color="secondary" className="w-100 mt-3">
            <CardHeader>
              <CardTitle className="text-left">
                <h4>Velocidad de Produccion (p)</h4>
              </CardTitle>
            </CardHeader>
            <CardBody className="mx-auto">
              <VelocidadProd
                handleVelocidadProduccion={this.handleVelocidadProduccion}
              />
            </CardBody>
          </Card>
        </Col>)
    }
  }

  costoAlm() {
    if (!this.props.simpleSinAgot) {
      return <Col xs={12} md={6} className="my-4 mx-auto ">
        <Card outline color="secondary" className="w-100 mt-3">
          <CardHeader>
            <CardTitle className="text-left">
              <h4>Costo de Almacenamiento (C1)</h4>
            </CardTitle>
          </CardHeader>
          <CardBody className="mx-auto">
            <CostoAlm
              handleCostoAlm={this.handleCostoAlm}
            />
          </CardBody>
        </Card>
      </Col>
    }
  }

  porcInteres() {
    if (this.props.simpleSinAgot) {
      return ( 
          <Col xs={12} md={6} className="my-4 mx-auto ">
            <Card outline color="secondary" className="w-100 mt-3">
              <CardHeader>
                <CardTitle className="text-left">
                  <h4>Porcentaje de interés que se produciría con el dinero inmovilizado (p)</h4>
                </CardTitle>
              </CardHeader>
              <CardBody className="mx-auto">
                <PorcInteres
                  handlePorcInteres={this.handlePorcInteres}
                />
              </CardBody>
            </Card>
          </Col>)
    }
  }

  porcAplicaCostoProd() {
    if (this.props.simpleSinAgot) {
      return ( 
          <Col xs={12} md={6} className="my-4 mx-auto ">
          <Card outline color="secondary" className="w-100 mt-3">
            <CardHeader>
              <CardTitle className="text-left">
                <h4>Porcentaje Aplicado a Costo de Producto</h4>
              </CardTitle>
            </CardHeader>
            <CardBody className="mx-auto">
              <PorcAplicaCostoProd
                handlePorcAplicaCostoProd={this.handlePorcAplicaCostoProd}
              />
            </CardBody>
          </Card>
        </Col>)
    }
  }

  costoPropioMercaderia() {
    if (this.props.simpleSinAgot) {
      return ( 
        <Col xs={12} md={6} className="my-4 mx-auto ">
        <Card outline color="secondary" className="w-100 mt-3">
          <CardHeader>
            <CardTitle className="text-left">
              <h4>Costo propio de la mercaderia (C1')</h4>
            </CardTitle>
          </CardHeader>
          <CardBody className="mx-auto">
            <CostoPropioMercaderia
              handleCostoPropioMercaderia={this.handleCostoPropioMercaderia}
            />
          </CardBody>
        </Card>
        </Col>)
    }
  }


  



  render() {
    //Generamos el renderizado para cada una de los elementos de los arreglos obtenidos anteriormente.

    return (
      <>
        <h3>Cargamos los datos de nuestro modelo</h3>
        <Container>
          <Row>
            <Col xs={12} md={6} className="my-4 mx-auto ">
              <Card outline color="secondary" className="w-100 mt-3">
                <CardHeader>
                  <CardTitle className="text-left">
                    <h4>Demanda (D)</h4>
                  </CardTitle>
                </CardHeader>
                <CardBody className="mx-auto">
                  <Demanda
                    handleDemanda={this.handleDemanda}
                  />
                </CardBody>
              </Card>
            </Col>

            <Col xs={12} md={6} className="my-4 mx-auto ">
              <Card outline color="secondary" className="w-100 mt-3">
                <CardHeader>
                  <CardTitle className="text-left">
                    <h4>Tiempo Total (T)</h4>
                  </CardTitle>
                </CardHeader>
                <CardBody className="mx-auto">
                  <TiempoTotal
                    handleTiempoTotal={this.handleTiempoTotal}
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            {this.costoAlm()}

            <Col xs={12} md={6} className="my-4 mx-auto ">
              <Card outline color="secondary" className="w-100 mt-3">
                <CardHeader>
                  <CardTitle className="text-left">
                    <h4>Costo de Preparacion (K)</h4>
                  </CardTitle>
                </CardHeader>
                <CardBody className="mx-auto">
                  <CostoPrep
                    handleCostoPrep={this.handleCostoPrep}
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={6} className="my-4 mx-auto ">
              <Card outline color="secondary" className="w-100 mt-3">
                <CardHeader>
                  <CardTitle className="text-left">
                    <h4>Costo de Producto (b)</h4>
                  </CardTitle>
                </CardHeader>
                <CardBody className="mx-auto">
                  <CostoProd
                    handleCostoProd={this.handleCostoProd}
                  />
                </CardBody>
              </Card>
            </Col>
            {this.sp()}
            {this.demandaUnit()}
            {this.velocidadProd()}
            {this.costoAgotamiento()}
            {this.stockRealAlmacenado()}
            
            {this.porcInteres()}
            {this.porcAplicaCostoProd()}
            {this.costoPropioMercaderia()}
            
          </Row>
          {this.qsyds()}
        </Container>
      </>
    );
  }
}

export default Processing;
