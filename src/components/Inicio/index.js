import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Jumbotron, Container, Row, Col, ButtonGroup, UncontrolledTooltip } from "reactstrap";

const Inicio = () => {
    useEffect(() => {
        document.title = "Inicio"
    }, []);
    return (
        <Container fluid className="App">
            <Row className="">
                <Col xs={12} md={6} className="mx-auto my-5">
                    <Jumbotron>
                        <Row>
                            <h2 className="mx-auto">¡Bienvenido! Seleccione una opción.</h2>
                        </Row>
                        <Row className="mt-3 mx-auto">
                            <Col>
                                <Link to={"/LinealProgramming"}>
                                    <Button size='lg' outline color="success">Programación Lineal </Button>
                                </Link>
                            </Col>
                        </Row>

                        <Row className="mt-3 mx-auto">
                            <Col>
                                <Link to={"/NoLinealProgramming"}>
                                    <Button size='lg' outline color="success">Programación No Lineal </Button>
                                </Link>
                            </Col>
                        </Row>

                        <Row className="mt-3 mx-auto">
                            <Col>
                                <Link to={"/ModeloRedes"}>
                                    <Button size='lg' outline color="success">Modelos de Redes </Button>
                                </Link>
                            </Col>
                        </Row>

                        <Row className="mt-3 mx-auto">
                            <Col>
                                <Link to={"/ModeloStock"}>
                                    <Button size='lg' outline color="success">Modelos de Stock </Button>
                                </Link>
                            </Col>
                        </Row>

                        <Row className="mt-3">
                            <Col>
                                <Button href="https://github.com/santinozaracho/optimizer-pl-io/issues"
                                    outline>
                                    <img height='25px' src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="" />
                                Report Issues
                            </Button>
                            </Col>
                            <Col>
                                <Button href="mailto:carlosszaracho@gmail.com" outline>Contact Us</Button>
                            </Col>
                        </Row>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    )
};

export default Inicio;