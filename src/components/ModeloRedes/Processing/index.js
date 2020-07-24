import React from "react";
import { Container, Row, Card, CardBody, CardHeader, CardTitle, Alert } from "reactstrap";
import Aristas from "./Aristas";
import CantidadNodos from "./CantidadNodos";

class Processing extends React.Component {
  constructor(props) {
    super(props);
    this.state = { faltaCoe: "" };
  }

  isValidated() {
    //Verificando si los coeficientes de las variables y las restricciones no son nulos
    let verifQty = this.props.status.variables
      .filter(va => va.descripcion !== "")
      .every(va => va.coeficiente !== "");
    let veriResQty = this.props.status.restricciones
      .filter(re => re.descripcion !== "")
      .every(re => re.coeficientes.every(co => co !== "") && re.derecha !== "");
    if (verifQty && veriResQty) {
      console.log(verifQty + 'dff:' + veriResQty);

      this.props.lastStep(2);
      this.setState({ faltaCoe: "" });
      return true;
    } else {
      let faltaCoe;
      faltaCoe = veriResQty
        ? "Falta algun coeficiente del Funcional"
        : "Falta algun coeficiente en las Restricciones";
      this.setState({ faltaCoe });
      return false;
    }
  }

  handleCantidadNodos = event => {
    let { value } = event.target;
    if (value) {
      console.log('Cambiando Objetivo');
      this.props.status.cantidadNodos = value;
      this.props.setModel(this.props.status);
    }
  }

  handleAristas = event => {
    let { value , name } = event.target;
    if (value) {
      console.log('Cambiando Arista');
      this.props.status.aristas[name] = value;
      this.props.setModel(this.props.status);
    }
  }

  render() {
    //Generamos el renderizado para cada una de los elementos de los arreglos obtenidos anteriormente.

    return (
      <>
        <h3>Cargamos los datos de nuestro modelo</h3>
        <Container>
          <Row>
            <Card outline color="secondary" className="w-100 mt-3">
              <CardHeader>
                <CardTitle className="text-left">
                  <h4>Cantidad de nodos</h4>
                </CardTitle>
              </CardHeader>
              <CardBody className="mx-auto">
                <CantidadNodos
                  handleCantidadNodos={this.handleCantidadNodos}
                />
              </CardBody>
            </Card>
          </Row>
          <Row>
            <Card outline color="secondary" className="w-100 mt-3">
              <CardHeader>
                <CardTitle className="text-left">
                  <h4>Aristas</h4>
                </CardTitle>
              </CardHeader>
              <CardBody>
                <Aristas
                  aristas={this.props.status.aristas}
                  handleAristas = {this.props.handleAristas}
                /></CardBody>
            </Card>
          </Row>
          {this.state.faltaCoe !== "" && (
            <Row className="mt-3">
              <Alert className="mx-auto" color="danger">
                {this.state.faltaCoe}
              </Alert>
            </Row>
          )}
        </Container>
      </>
    );
  }
}

export default Processing;
