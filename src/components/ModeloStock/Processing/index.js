import React from "react";
import { Container, Row, Card, CardBody, CardHeader, CardTitle, Alert } from "reactstrap";
import Restriccion from "./Restriccion";
import Demanda from "./Demanda1";
import FuncionObj from "./FuncionObj";
import ReferencesList from "../ReferencesList";

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
      console.log(verifQty+'dff:'+veriResQty);
      
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

  //En el siguiente handler, se toma del input de una variable en particular el coeficiente.
  handleCoefVar = event => {
    let { value, name } = event.target;
    if (value) {
      let { variables } = this.props.status;
      variables[name].coeficiente = parseInt(value);
      this.props.handleVariables(variables);
      console.log(this.props.status.variables);
    }
  };
  handleDem = event => {
    let { value} = event.target;
    if (value) {
      let { demandaunitaria } = this.props.status;
      demandaunitaria.val = parseInt(value);
      this.props.handleDemandaUnitaria(demandaunitaria);
      console.log(this.props.status.demandaunitaria);
    }
  };

  handleCoefRes = (event, ri) => {
    let { name, value } = event.target;
    let { restricciones } = this.props.status;
    console.log("En la Res:" + ri + ", en el campo:" + name + ",con el valor:" + value);

    switch (name) {
      case "derecha":
        restricciones[ri].derecha = Number(value);
        break;
      case "eq":
        restricciones[ri].eq = value;
        break;
      default:
        restricciones[ri].coeficientes[name] = Number(value);
        break;
    }
    console.log(restricciones);
    this.props.handleRestricciones(restricciones);
  };

  render() {
    //Obtenemos las propiedades del Super
    let { restricciones } = this.props.status;
    let { demandaunitaria } = this.props.status;

    //Generamos el renderizado para cada una de los elementos de los arreglos obtenidos anteriormente.
    let demandainput = restricciones
      .filter(item => item.descripcion !== "")
      .map((demandaunitaria, index) => (
        <Demanda
          className="mt-1"
          key={"R" + index}
          handleCoefRes={this.handleCoefRes}
          demandaunitaria={demandaunitaria}
        />
      ));

    let restriccionesInput = restricciones
      .filter(item => item.descripcion !== "")
      .map((restriccion, index) => (
        <Restriccion
          className="mt-1"
          key={"R" + index}
          handleCoefRes={this.handleCoefRes}
          restriccion={restriccion}
        />
      ));

    return (
      <>
        <h3>Cargamos los datos de nuestro modelo</h3>
        <Container>
          <Row>
            <Card outline color="secondary" className="w-100 mt-3">
              <CardHeader>
                <CardTitle className="text-left">
                  <h4>Función objetivo</h4>
                </CardTitle>
              </CardHeader>
              <CardBody className="mx-auto">
                <FuncionObj
                  handleCoefVar={this.handleCoefVar}
                  objective={this.props.status.objective}
                />
              </CardBody>
            </Card>
          </Row>
          <Row>
            <Card outline color="secondary" className="w-100 mt-3">
              <CardHeader>
                <CardTitle className="text-left">
                  <h4>Demanda unitaria</h4>
                </CardTitle>
              </CardHeader>
              <CardBody className="mx-auto">
                <Demanda
                  demandaunitaria={demandaunitaria}
                  handleDem={this.handleDem}
                />
              </CardBody>
            </Card>
          </Row>
          <Row>
            <Card outline color="secondary" className="w-100 mt-3">
              <CardHeader>
                <CardTitle className="text-left">
                  <h4>Restricciones</h4>
                </CardTitle>
              </CardHeader>
              <CardBody>{restriccionesInput}</CardBody>
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
