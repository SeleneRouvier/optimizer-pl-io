import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import { Button, Jumbotron, Container, Row, Col } from "reactstrap";

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
                                <Button size='lg' outline color="success">Arbol de Minima Expansion</Button>
                            </Link>
                                
                        </Col>
                    </Row>
                    <Row className="mt-3 mx-auto">
                        <Col>
                            <Link to={"/ModeloRedes/RutaMasCorta"} >
                                <Button size='lg' outline color="success">Ruta Mas Corta</Button>

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