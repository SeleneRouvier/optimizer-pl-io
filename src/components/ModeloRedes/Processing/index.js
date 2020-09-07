import React from "react";
import { Container, Button, Row, Card, CardBody, CardHeader, CardTitle } from "reactstrap";
import Aristas from "./Aristas";
import CantidadNodos from "./CantidadNodos";
import NodoInicial from "./NodoInicial";
import GrafosRMC from './Grafos/GrafosRMC';

class Processing extends React.Component {

  constructor(props) {
    super(props);
    this.state = {show:false}
  }

  handleCantidadNodos = event => {
    let { value } = event.target;
    if (value) {
      console.log('Cambiando Objetivo');
      this.props.status.cantidadNodos = value;
      this.props.setModel(this.props.status);
    }
  }

  handleNodoInicial = event => {
    let { value } = event.target;
    if (value) {
      console.log('Cambiando Nodo Inicial');
      this.props.status.nodoInicial = value;
      this.props.setModel(this.props.status);
    }
  }

  handleAristas = aristas => {
    this.props.status.aristas = aristas;
    this.props.setModel(this.props.status);
  };
  
  cambiarEstado = () => {  
    this.setState({show:!this.state.show})
    console.log("entre")
    console.log(this.state.show)
  };

  rutaMasCorta() {
    if (this.props.rutaMasCorta){
    return <Row>
    <Card outline color="secondary" className="w-100 mt-3">
      <CardHeader>
        <CardTitle className="text-left">
          <h4>Nodo Inicial</h4>
        </CardTitle>
      </CardHeader>
      <CardBody className="mx-auto">
        <NodoInicial
          handleNodoInicial={this.handleNodoInicial}
        />
      </CardBody>
    </Card>
  </Row>
        
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
                  <h4>Cantidad de relaciones</h4>
                </CardTitle>
              </CardHeader>
              <CardBody className="mx-auto">
                <CantidadNodos
                  handleCantidadNodos={this.handleCantidadNodos}
                />
              </CardBody>
            </Card>
          </Row>
          {this.rutaMasCorta()}
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
                  cantN={this.props.status.cantidadNodos}
                  handleAristas = {this.handleAristas}
                /></CardBody>
            </Card>
          </Row>
        </Container>
        <Card>
          <div class="mh-100">
            <br/>
            <Button outline color="success"
              onClick={this.cambiarEstado}>Mostrar/Ocultar Grafo</Button>
            <br/>
            <br/>
            {this.state.show && <GrafosRMC cantN={this.props.status.cantidadNodos} aristas={this.props.status.aristas} /> }  
            <br/>                                
          </div>
        </Card>
      </>
    );
  }
}

export default Processing;
