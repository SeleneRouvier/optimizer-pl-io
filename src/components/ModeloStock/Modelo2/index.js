import React from "react";
import { Container, Col, Row, Jumbotron } from "reactstrap";
import Configuration from "../Configuration";
import Presentation from "./presentacion";
import logo from "../logo.svg";

class Modelo2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      model: {
        demanda: "",
        tiempoTotal: '',
        costoAlm: '',
        costoPrep: '',
        costoProd: '',
        stockProt: ''
      },
      result: true,
      modelsOpen: false
    };
  }

  setModel = model => this.setState({ model, changes: true });

  render() {
    let { model } = this.state

    return (
      <Container fluid className="App">
        <Row className="">
          <Col xs={12} md={6} className="mx-auto">
            <img src={logo} className="App-logo" alt="logo" height="200" />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} className="my-4 mx-auto ">
            <Row>
              <Jumbotron className='w-100'>
                <h2>Modelos de stock:</h2>
                <h2>Modelo 2</h2>
              </Jumbotron>
            </Row>
            <Row>
              <Jumbotron className='w-100'>
                <Configuration status={model}
                  handleRestricciones={this.handleRestricciones} setModel={this.setModel}
                  modelo2={true} />
              </Jumbotron>
            </Row>
            <Row>
              <Jumbotron className='w-100'>
                <Presentation model={model} />
              </Jumbotron>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Modelo2;
