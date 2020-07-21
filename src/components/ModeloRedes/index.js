import React from 'react';
import {Link} from 'react-router-dom';
import { Button, Jumbotron, Container, Row, Col } from "reactstrap";

const ModeloRedes = () =>{
    return(
        <Container fluid className="App">
        <Row className="">
            <Col xs={12} md={6} className="mx-auto my-5">
                <Jumbotron>
                    <Row>
                        <h2 className="mx-auto">¡Bien!, Ahora Seleccione un Modelo.</h2>
                    </Row>
                    <Row className="mt-3 mx-auto">
                        <Col>
                            <Link to={"/LinealProgramming/InSteps"}>
                                <Button size='lg' outline color="success">Arbol de minima expansion</Button>
                            </Link>
                                
                        </Col>
                    </Row>
                    <Row className="mt-3 mx-auto">
                        <Col>
                            <Link to={"/LinealProgramming/SinglePage"} >
                                <Button size='lg' outline color="success">Ruta mas corta</Button>

                            </Link>
                        </Col>
                    </Row>
                </Jumbotron>
            </Col>
        </Row>
    </Container>
  )
};

export default ModeloRedes;