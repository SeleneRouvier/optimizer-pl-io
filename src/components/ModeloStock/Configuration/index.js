import React from "react";
import { ButtonGroup, Button, Container, Row, Col, Card, CardBody, CardHeader, CardTitle } from "reactstrap";
import { Alert, UncontrolledPopover, PopoverBody, PopoverHeader } from "reactstrap";
import Restrictions from "./Restrictions";
import DemandaUnitaria from "./DemandaUnitaria";
import TiempoTotal from "./TiempoTotal";
import Variables from "./Variables";

class Configuration extends React.Component {
  constructor(props) {
    super(props);
    this.state = { faltaDescrip: "" };
  }

  //Función que permite validar si se ingresaron todos los cambios correspondientes en la etapa
  isValidated() {
    let { variables, restricciones, demandaunitaria, tiempototal } = this.props.status;
    let variablesDescriptionsMin = variables.filter(va => va.descripcion !== "");
    let restriccionesDescriptionsMin = restricciones.filter(re => re.descripcion !== "");
    if ((variablesDescriptionsMin.length > 1) & (restriccionesDescriptionsMin.length > 0)) {
      this.props.lastStep(1);
      this.setState({ faltaDescrip: "" });
      return true;
    } else if (variablesDescriptionsMin.length < 2) {
      this.setState({ faltaDescrip: "Se necesitan como mínimo dos variables" });
    } else if (restriccionesDescriptionsMin.length < 1) {
      this.setState({ faltaDescrip: "Se necesita como mínimo una restricción" });
    }
    return false;
  }
  
  //Funcion que se encarga de traspasar los cambios al padre
  handleRestrictions = restricciones => this.props.handleRestricciones(restricciones)

  //Funcion que se encarga de traspasar los cambios al padre
  handleDemandaUnitaria = demandaunitaria => this.props.handleDemandaUnitaria(demandaunitaria)
  //Funcion que se encarga de traspasar los cambios al padre
  handleTiempoTotal = tiempototal => this.props.handleTiempoTotal(tiempototal)
  
  //Funcion que se encarga de traspasar los cambios al padre
  handleVariables = variables => this.props.handleVariables(variables)
  
  //Modelos
  showModels = () => this.props.showModels()

  render() {
    //Obtenemos de las props, las variables y restricciones.
    let {variables,restricciones,demandaunitaria,tiempototal,method } = this.props.status;

    let buttonsMethods = (
      <ButtonGroup id="ButtUtil">
        <Button
          outline
          onClick={ () => this.props.handleMethod("graph")}
          active={this.props.status.method === "graph"}
          color="primary">
          Gráfico
        </Button>
        <Button
          outline
          onClick={ () => this.props.handleMethod("simplex")}
          active={this.props.status.method === "simplex"}
          color="primary">
          Simplex
        </Button>
      </ButtonGroup>
    );
    let buttonsOptType = (
      <ButtonGroup>
        <Button
          outline
          onClick={() => this.props.handleObjective("max")}
          active={this.props.status.objective === "max"}
          color="primary"
        >
          Maximizar
        </Button>
        <Button
          outline
          onClick={() => this.props.handleObjective("min")}
          active={this.props.status.objective === "min"}
          color="primary"
        >
          Minimizar
        </Button>
      </ButtonGroup>
    );

    return (
      <>
        <h3>Comenzamos configurando nuestro modelo</h3>
        <Container>
          <Row>
            <UncontrolledPopover flip={false} trigger="hover" placement="top" target="CardT">
              <PopoverHeader>Tiempo total</PopoverHeader>
              <PopoverBody>
                Aquí debes ingresar las variables que formarán parte.
              </PopoverBody>
            </UncontrolledPopover>
            <Card outline color="secondary" id="CardT" className="w-100 mt-3 mx-auto">
              <CardHeader>
                <CardTitle className="text-left">
                  <h4>Tiempo total</h4>
                </CardTitle>
              </CardHeader>
              <CardBody><TiempoTotal handleTiempoTotal={this.handleTiempoTotal} tiempototal={tiempototal}/></CardBody>
            </Card>
          </Row>
          <Row>
            <UncontrolledPopover flip={false} trigger="hover" placement="top" target="Cardd">
              <PopoverHeader>Demanda unitaria</PopoverHeader>
              <PopoverBody>
                Aquí debes ingresar las restricciones que formarán parte del modelo, éstas también son de
                carga dinámica.
              </PopoverBody>
            </UncontrolledPopover>
            <Card outline color="secondary" id="Cardd" className="w-100 mt-3 mx-auto">
              <CardHeader>
                <CardTitle className="text-left">
                  <h4>Demanda unitaria</h4>
                </CardTitle>
              </CardHeader>
              <CardBody><DemandaUnitaria handleDemandaUnitaria={this.handleDemandaUnitaria} demandaunitaria={demandaunitaria}/></CardBody>
            </Card>
          </Row>
          <Row>
            <UncontrolledPopover flip={false} trigger="hover" placement="top" target="CardK">
              <PopoverHeader>Costo de preparacion</PopoverHeader>
              <PopoverBody>
                Aquí debes ingresar las variables que formarán parte.
              </PopoverBody>
            </UncontrolledPopover>
            <Card outline color="secondary" id="CardK" className="w-100 mt-3 mx-auto">
              <CardHeader>
                <CardTitle className="text-left">
                  <h4>Costo de preparacion</h4>
                </CardTitle>
              </CardHeader>
              <CardBody><Variables method={method} handleVariables={this.handleVariables} variables={variables}/></CardBody>
            </Card>
          </Row>
          <Row>
            <UncontrolledPopover flip={false} trigger="hover" placement="top" target="CardC1">
              <PopoverHeader>Costo de almacenamiento</PopoverHeader>
              <PopoverBody>
                Aquí debes ingresar las variables que formarán parte.
              </PopoverBody>
            </UncontrolledPopover>
            <Card outline color="secondary" id="CardC1" className="w-100 mt-3 mx-auto">
              <CardHeader>
                <CardTitle className="text-left">
                  <h4>Costo de almacenamiento</h4>
                </CardTitle>
              </CardHeader>
              <CardBody><Variables method={method} handleVariables={this.handleVariables} variables={variables}/></CardBody>
            </Card>
          </Row>
          {this.state.faltaDescrip !== "" && (
            <Row className="mt-3">
              <Alert className="mx-auto" color="danger">
                {this.state.faltaDescrip}
              </Alert>
            </Row>
          )}
        </Container>
      </>
    );
  }
}

export default Configuration;
