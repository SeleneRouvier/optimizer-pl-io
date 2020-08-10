import React from "react";
import { Container, Col, Row, Jumbotron } from "reactstrap";
import Processing from "../Processing";
import Presentation from "./presentacion";
import logo from "../logo.svg";


class FlujoCapacitadoCM extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {

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
                            <h2>Flujo Capacitado de Costo Mínimo</h2>
                            </Jumbotron>
                        </Row>
                        <Row>
                            <Jumbotron className='w-100'>
                                <Processing status={model} handleAristas={this.handleAristas}
                                setModel={this.setModel} rutaMasCorta={true} />
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

export default FlujoCapacitadoCM;