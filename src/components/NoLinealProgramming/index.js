import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, UncontrolledTooltip, ButtonGroup, Jumbotron, Container, Row, Col } from "reactstrap";

const NoLinealProgramming = () => {
    useEffect(() => {
        document.title = "Programacion no lineal"
    }, []);
    return (
        <Container fluid className="App">
            <Row className="">
                <Col xs={12} md={6} className="mx-auto my-5">
                    <Jumbotron>
                        <Row>
                            <h2 className="mx-auto">¡Bien!, Ahora Seleccione un Modelo.</h2>
                        </Row>
                        <Row className="mt-3 mx-auto">
                            <Col>
                                <Link to={"/NoLinealProgramming/Lagrange"}>
                                    <Button size='lg' outline color="success">Lagrange</Button>
                                </Link>

                            </Col>
                        </Row>
                        <Row className="mt-3 mx-auto">
                            <Col>
                                <Link to={"/NoLinealProgramming/Kuhn-Tucker"} >
                                    <Button size='lg' outline color="success">Kuhn y Tucker</Button>

                                </Link>
                            </Col>
                        </Row>
                        <Row className="mt-5">
                            <h5>Colaboradores: Modelos de Stock</h5>
                        </Row>
                        
                        <Row>
                            <ButtonGroup className="mx-auto">
                                <UncontrolledTooltip target='btnbj'>Bravin, Juan</UncontrolledTooltip>
                                <Button id='btnbj' outline tag="a" href="https://github.com/bravinjuan">
                                    BJ
                            </Button>
                                <UncontrolledTooltip target='btnjm'>Jaworski, Martin Ezequiel</UncontrolledTooltip>
                                <Button id='btnjm' outline tag="a" href="https://github.com/martinejaw">
                                    JM
                            </Button>
                                <UncontrolledTooltip target='btntj'>Teng, Jazmin</UncontrolledTooltip>
                                <Button id='btntj' outline tag="a" href="https://github.com/jazminteng">
                                    TJ
                            </Button>
                                <UncontrolledTooltip target='btnth'>Thouzeau, Edgardo Hernan</UncontrolledTooltip>
                                <Button id='btnth' outline tag="a" href="https://github.com/thouzeauhernan">
                                    TH
                            </Button>
                            </ButtonGroup>
                        </Row>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    )
};

export default NoLinealProgramming;