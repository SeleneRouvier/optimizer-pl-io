import React from "react";
import { Container, Col, Row, Jumbotron } from "reactstrap";
import ProcessingFMI from "../Processing/indexFMI";
import Presentation from "./presentacion";
import logo from "../logo.svg";


class FlujoMinimo extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            model: {
                vertices: [{ xj: 0, values: {supplie: ""} }, {xj: 1, values: {supplie: ""}}],
                aristas: [{ xi: 0, values: { nodoInicial: "", nodoFinal: "", capacidad: "", costo: "" } }, { xi: 1, values: { nodoInicial: "", nodoFinal: "", capacidad: "", costo: "" } }],
                cantidadNodos: "0",
                cantidadV: "0",
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
                                <h2>Flujo Capacitado con Costo Mínimo</h2>
                            </Jumbotron>
                        </Row>
                        <Row>
                            <Jumbotron className='w-100'>
                                <ProcessingFMI status={this.state.model} handleAristas={this.handleAristas}
                                    setModel={this.setModel} FlujoMinimo={true} />
                            </Jumbotron>
                        </Row>
                        {/* <Row>
                            <Presentation model={this.state.model} />
                        </Row> */}
                    </Col>
                </Row>
            </Container>
        );
    }


}

export default FlujoMinimo;