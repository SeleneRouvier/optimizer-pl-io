import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import { Button, Jumbotron, Container, Row, Col, UncontrolledTooltip, ButtonGroup } from "reactstrap";

const ModeloRedes = () =>{
    useEffect(() => {
        document.title = "Modelos de redes"
      }, []);
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
                            <Link to={"/ModeloRedes/ArbolMinimaExpansion"}>
                                <Button size='lg' outline color="success">Árbol de mínima expansión</Button>
                            </Link>
                                
                        </Col>
                    </Row>
                    <Row className="mt-3 mx-auto">
                        <Col>
                            <Link to={"/ModeloRedes/RutaMasCorta"} >
                                <Button size='lg' outline color="success">Ruta más corta</Button>
                            </Link>
                        </Col>
                    </Row>
                    <Row className="mt-3 mx-auto">
                        <Col>
                            <Link to={"/ModeloRedes/FlujoMaximo"} >
                                <Button size='lg' outline color="success">Flujo Máximo</Button>
                            </Link>
                        </Col>
                    </Row>
                    <Row className="mt-3 mx-auto">
                        <Col>
                            <Link to={"/ModeloRedes/FlujoCapacitadoCM"} >
                                <Button size='lg' outline color="success">Flujo Capacitado con Costo Mínimo</Button>
                            </Link>
                        </Col>
                    </Row>
                
                    <Row className="mt-5 mx-auto">
                        <h5>Colaboradores: Modelos de Redes</h5>
                    </Row>
                    <Row>
                        <ButtonGroup className="mt-3 mx-auto">
                            <UncontrolledTooltip target='btnnd'>Diaz Duarte, Nicolas</UncontrolledTooltip>
                                <Button id='btnnd' outline tag="a" href="https://github.com/NicolasDiazDuarte">
                                    NDD
                                </Button>
                            <UncontrolledTooltip target='btnml'>Luján, María del Pilar</UncontrolledTooltip>
                                <Button id='btnml' outline tag="a" href="https://github.com/marialujan019">                                    
                                    ML
                                </Button>
                            <UncontrolledTooltip target='btnsr'>Rouvier, Selene Susana</UncontrolledTooltip>
                                <Button id='btnsr' outline tag="a" href="https://github.com/SeleneRouvier">
                                    SR
                                </Button>
                            <UncontrolledTooltip target='btnvg'>Velázquez, Gregorio</UncontrolledTooltip>
                                <Button id='btnvg' outline tag="a" href="https://github.com/velazquezgreg">
                                    GV
                                </Button>
                        </ButtonGroup>
                    </Row>
                </Jumbotron>
            </Col>
        </Row>
    </Container>
  )
};

export default ModeloRedes;