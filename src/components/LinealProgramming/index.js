import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, UncontrolledTooltip, ButtonGroup, Jumbotron, Container, Row, Col } from "reactstrap";

const LinealProgramming = () => {
    useEffect(() => {
        document.title = "Optimizer PL IO"
    }, []);
    return (
        <Container fluid className="App">
            <Row className="">
                <Col xs={12} md={6} className="mx-auto my-5">
                    <Jumbotron>
                        <Row>
                            <h2 className="mx-auto">¡Bien!, Ahora Seleccione una Modalidad de Trabajo.</h2>
                        </Row>
                        <Row className="mt-3 mx-auto">
                            <Col>
                                <Link to={"/LinealProgramming/InSteps"}>
                                    <Button size='lg' outline color="success">Guiado por Pasos</Button>
                                </Link>

                            </Col>
                        </Row>
                        <Row className="mt-3 mx-auto">
                            <Col>
                                <Link to={"/LinealProgramming/SinglePage"} >
                                    <Button size='lg' outline color="success">En Unica Pagina</Button>

                                </Link>
                            </Col>
                        </Row>

                        <Row className="mt-5">
                            <h5>Colaboradores: Programación Lineal</h5>
                        </Row>
                        <Row>
                            <ButtonGroup className="mx-auto">
                                <UncontrolledTooltip target='btnce'>Cardozo, Edgar</UncontrolledTooltip>
                                <Button id='btnce' outline tag="a" href="https://github.com/EdgarCardozo">
                                    CE
                            </Button>
                                <UncontrolledTooltip target='btndj'>Diaz, Julian</UncontrolledTooltip>
                                <Button id='btndj' outline tag="a" href="https://github.com/juliandiazok">
                                    DJ
                            </Button>
                                <UncontrolledTooltip target='btnge'>Garcia, Emmanuel</UncontrolledTooltip>
                                <Button id='btnge' outline tag="a" href="https://github.com/egarcia1997">
                                    GE
                            </Button>
                                <UncontrolledTooltip target='btnss'>Solis, Santiago</UncontrolledTooltip>
                                <Button id='btnss' outline tag="a" href="https://github.com/santisolis97">
                                    SS
                            </Button>
                                <UncontrolledTooltip target='btnvi'>Vaernet, Ian</UncontrolledTooltip>
                                <Button id='btnvi' outline tag="a" href="https://github.com/ianv97">
                                    VI
                            </Button>
                                <UncontrolledTooltip target='btnzs'>Zaracho Simonetto, Carlos Santino</UncontrolledTooltip>
                                <Button id='btnzs' outline tag="a" href="https://github.com/santinozaracho">
                                    ZS
                            </Button>
                            </ButtonGroup>
                        </Row>

                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    )
};

export default LinealProgramming;