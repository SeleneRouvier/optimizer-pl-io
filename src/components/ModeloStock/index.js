import React from 'react';
import {Link} from 'react-router-dom';
import { Button, Jumbotron, Container, Row, Col } from "reactstrap";

const ModeloStock = () =>{
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
                            <Link to={"/ModeloStock/ModeloWilson"}>
                                <Button size='lg' outline color="success">Modelo 1 - Modelo de Wilson</Button>
                            </Link>
                                
                        </Col>
                    </Row>
                    <Row className="mt-3 mx-auto">
                        <Col>
                            <Link to={"/LinealProgramming/SinglePage"} >
                                <Button size='lg' outline color="success">Dos</Button>

                            </Link>
                        </Col>
                    </Row>
                </Jumbotron>
            </Col>
        </Row>
    </Container>
  )
};

export default ModeloStock;