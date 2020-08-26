import React from "react";
import { Container, Row, Card, CardBody, CardHeader, CardTitle, Button } from "reactstrap";
import Aristas from "./Aristas";
import CantidadNodos from "./CantidadNodos";
import NodoInicial from "./NodoInicial";
import NodoFinal from './NodoFinal';
import GrafosFM  from "../Processing/Grafos/GrafosFM";

class ProcessingFM extends React.Component {
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

  handleNodoFinal = event => {
    let { value } = event.target;
    if (value) {
      console.log('Cambiando Nodo Final');
      this.props.status.nodoFinal = value;
      this.props.setModel(this.props.status);
    }
  }

  handleAristas = aristas => {
    this.props.status.aristas = aristas;
    console.log(this.props.status.aristas);
    this.props.setModel(this.props.status);
  };
  
  cambiarEstado = () => {  
    this.setState({show:!this.state.show})
    console.log("entre")
    console.log(this.state.show)
  };



  flujoMaximo() {
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
    <Card outline color="secondary" className="w-100 mt-3">
      <CardHeader>
        <CardTitle className="text-left">
          <h4>Nodo Final</h4>
        </CardTitle>
      </CardHeader>
      <CardBody className="mx-auto">
        <NodoFinal
          handleNodoFinal={this.handleNodoFinal}
        />
      </CardBody>
    </Card>
  </Row>
        
  //}
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
          {this.flujoMaximo()}
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
              onClick={this.cambiarEstado}>Mostrar Grafo</Button>
            <br/>
            <br/>
            {this.state.show && <GrafosFM cantN={this.props.status.cantidadNodos} aristas={this.props.status.aristas} /> }  
            <br/>                                
          </div>
        </Card>
      </>
    );
  }
}

export default ProcessingFM;
