import React from "react";
import { Container, Col, Row, Jumbotron } from "reactstrap";
import Processing from "../Processing";
import Presentation from "./presentacion";
import logo from "../logo.svg";

class ArbolMinimaExpansion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      model: {
        aristas: [{ xi: 0, values: { nodoInicial: "", nodoFinal: "", peso: "" } }, { xi: 1, values: { nodoInicial: "", nodoFinal: "", peso: "0" } }],
        cantidadNodos: "0",
        integer: false
      },
      result: true
    };
  }

  handleAristas = aristas => {
    let { model } = this.state;
    model.aristas = aristas;
    this.setState({ model, changes: true });
  };

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
                <Processing status={model} handleAristas={this.handleAristas}
                  handleRestricciones={this.handleRestricciones} setModel={this.setModel} />
              </Jumbotron>

            </Row>
            <Row>
              <Presentation model={model} />
            </Row>

          </Col>
        </Row>

      </Container>
    );
  }
}

export default ArbolMinimaExpansion;
