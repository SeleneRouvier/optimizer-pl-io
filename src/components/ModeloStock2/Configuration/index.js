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

class Processing extends React.Component {
  constructor(props) {
    super(props);
  }

  //Esta función maneja el cambio en las restricciones
  handleDemanda = e => {
    const model = this.props.status;
    console.log('aaaaaaaaaaaa')
    model.demanda = e.target.value;
    this.props.setModel(model);
  };
  //Esta función maneja el cambio en las restricciones
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
      return(
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

  velocidadProd() {
    if (this.props.modeloTriangular) {
      return(
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
                    <h4>Demanda</h4>
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
            <Col xs={12} md={6} className="my-4 mx-auto ">
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
          </Row>
        </Container>
      </>
    );
  }
}

export default Processing;
