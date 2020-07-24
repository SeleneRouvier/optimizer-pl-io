import React from "react";
import { Container, Row, Col, Card, CardBody, CardHeader, CardTitle, Alert } from "reactstrap";
import DemandaUnit from "./DemandaUnit";
import TiempoTotal from "./TiempoTotal";
import CostoAlm from "./CostoAlm";
import CostoPrep from "./CostoPrep";
import CostoProd from "./CostoProd";

class Processing extends React.Component {
  constructor(props) {
    super(props);
  }

  //Esta función maneja el cambio en las restricciones
  handleDemanda = e => {
    const model = this.props.status;
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
                  <DemandaUnit
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
          </Row>
        </Container>
      </>
    );
  }
}

export default Processing;
