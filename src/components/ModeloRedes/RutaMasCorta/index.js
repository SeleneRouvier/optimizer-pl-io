import React from "react";
import { Button, Container, Col, Row, Jumbotron } from "reactstrap";
import Processing from "../Processing";
import Presentation from "./presentacion";
import logo from "../logo.svg";
import {Link} from 'react-router-dom';

class RutaMasCorta extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            model: {
                aristas: [{ xi: 0, values: { nodoInicial: "", nodoFinal: "", peso: "" } }, { xi: 1, values: { nodoInicial: "", nodoFinal: "", peso: "" } }],
                cantidadNodos: "0",
                nodoInicial: ""
            }
        };
    }

    setModel = model => this.setState({ model, changes: true });

    render() {
        let { model } = this.state;

            return (
                <Container fluid className="App">
                   
                    <Row>
                        <Col xs={12} md={6} className="my-4 mx-auto ">
                            <Row>
                                <Jumbotron className='w-100'>
                                    <h2>Modelos de redes:</h2>
                                    <h2>Ruta Más Corta</h2>
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
					<Row>
					<Col xs={12} md={6} className="my-4 mx-auto ">
					<Row>
						<Jumbotron className='w-100'>
						<Link to={"/ModeloRedes/"}>
							<Button size='lg' outline color="success">VOLVER</Button>
						</Link>
					</Jumbotron>
			</Row>
		 </Col>
		 </Row>
                </Container>
            );
        }
    }

export default RutaMasCorta;