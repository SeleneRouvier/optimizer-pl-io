import React from "react";
import { Container, Col, Row, Jumbotron } from "reactstrap";
import ProcessingFM from "../Processing/indexFM";
import Presentation from "./presentacion";
import logo from "../logo.svg";


class FlujoMaximo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            model: {
                aristas: [{ xi: 0, values: { nodoInicial: "", nodoFinal: "", peso: "" } }, { xi: 1, values: { nodoInicial: "", nodoFinal: "", peso: "" } }],
                cantidadNodos: "0",
                nodoInicial: "",
                nodoFinal: ""
            }
        };
    }
    setModel = model => this.setState({ model, changes: true });

    render() {
        let {model} = this.setState;

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
                                <h2>Modelos de redes:</h2>
                                <h2>Flujo Maximo</h2>
                            </Jumbotron>
                        </Row>
                        <Row>
                            <Jumbotron className='w-100'>
                                <ProcessingFM status={this.state.model} handleAristas={this.handleAristas}
                                    setModel={this.setModel} FlujoMaximo={true} />
                            </Jumbotron>
                        </Row>
                        <Row>
                            <Presentation model={this.state.model} />
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }


}

export default FlujoMaximo;