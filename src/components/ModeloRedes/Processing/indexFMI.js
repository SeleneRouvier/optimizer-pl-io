import React from "react";
import { Container, Row, Card, CardBody, CardHeader, CardTitle } from "reactstrap";
import AristaFMI from "./AristasFMI";
import CantidadNodos from "./CantidadNodos";
import CantidadVertices from "./CantidadVertices";
import Cantidadindex from "./CantidadV";


//ESTO ES DE FLUJO MINIMO

class Processing extends React.Component {

  handleCantidadNodos = event => {
    let { value } = event.target;
    if (value) {
      console.log('Cambiando Objetivo');
      this.props.status.cantidadNodos = value;
      this.props.setModel(this.props.status);
    }
  }

  handleAristas = aristas => {
    this.props.status.aristas = aristas;
    this.props.setModel(this.props.status);
  };

  handleVertice = vertices => {
    this.props.status.vertices = vertices;
    this.props.setModel(this.props.status);
  };
  
  handleCantidadVertices = event => {
    let { value } = event.target;
    if (value) {
      console.log('Cambiando Objetivo');
      this.props.status.CantidadVertices = value;
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
                  <h4>Cantidad de vertices</h4>
                </CardTitle>
              </CardHeader>
              <CardBody className="mx-auto">
                <CantidadVertices
                  handleCantidadVertices={this.handleCantidadVertices}
                />
              </CardBody>
            </Card>
          </Row>
          <Row>
            <Card outline color="secondary" className="w-100 mt-3">
              <CardHeader>
                <CardTitle className="text-left">
                  <h4>Ingrese oferta y demanda</h4>
                </CardTitle>
              </CardHeader>
              <CardBody>
                <Cantidadindex
                  vertices={this.props.status.vertices}
                  cant={this.props.status.CantidadVertices}
                  handleVertice = {this.handleVertice}
                /></CardBody>
            </Card>
          </Row>


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
          <Row>
            <Card outline color="secondary" className="w-100 mt-3">
              <CardHeader>
                <CardTitle className="text-left">
                  <h4>Arcos</h4>
                </CardTitle>
              </CardHeader>
              <CardBody>
                <AristaFMI
                  aristas={this.props.status.aristas}
                  cantN={this.props.status.cantidadNodos}
                  handleAristas = {this.handleAristas}
                /></CardBody>
            </Card>
          </Row>
        </Container>
      </>
    );
  }
}

export default Processing;