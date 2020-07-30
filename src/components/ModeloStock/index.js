import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Jumbotron, Container, Row, Col, UncontrolledPopover, PopoverBody, PopoverHeader } from "reactstrap";



const ModelosStock = () => {
  useEffect(() => {
    document.title = "Modelos de stock"
  }, []);
  return (
    <Container fluid className="App">
      <Row className="">
        <Col xs={12} md={6} className="mx-auto my-5">
          <Jumbotron>
            <Row>
              <h2 className="mx-auto">Modelos de stock / Modelos de inventario</h2>
            </Row>
            <Row >
              <Col sm="12" md={{ size: 6, offset: 3 }}>
                <Link to={"/ModeloStock/Teoria"}>
                  <Button id="Popover" size='lg' outline color="primary">Ayuda socio-teórica</Button>
                </Link>
              </Col>
            </Row>
            <Row className="mt-3 mx-auto">
              <Col>
                <Link to={"/ModeloStock/ModeloWilson"}>
                  <Button id="Popover1" size='lg' outline color="success">Modelo de Wilson</Button>
                  <UncontrolledPopover placement="right" target="Popover1" trigger="hover">
                    <PopoverHeader>Otras denominaciones:</PopoverHeader>
                    <PopoverBody>
                      <p>Modelo Simple sin agotamiento con demanda determinística y constante.</p>
                      <p>Modelo EOQ clásico.</p>
                      <p>Modelo EOQ básico.</p>
                    </PopoverBody>
                  </UncontrolledPopover>
                </Link>

              </Col>
            </Row>
            <Row className="mt-3 mx-auto">
              <Col>
                <Link to={"/ModeloStock/Modelo2"} >
                  <Button id="Popover2" size='lg' outline color="success">Modelo Simple Sin Agotamiento y con stock de proteccion</Button>
                  <UncontrolledPopover placement="right" target="Popover2" trigger="hover">
                    <PopoverHeader>Otras denominaciones:</PopoverHeader>
                    <PopoverBody>
                      <p>Modelo Simple sin agotamiento con demanda determinística y constante con stock de protección.</p>
                      <p>Modelo de Demanda constante con inventario de contingencia.</p>
                      <p>Modelo EOQ clásico con stock de protección.</p>
                    </PopoverBody>
                  </UncontrolledPopover>
                </Link>
              </Col>
            </Row>

            <Row className="mt-3 mx-auto">
              <Col>
                <Link to={"/ModeloStock/ModeloSimpleConAgotamiento"} >
                  <Button id="Popover3" size='lg' outline color="success">Modelo Simple Con Agotamiento</Button>
                  <UncontrolledPopover placement="right" target="Popover3" trigger="hover">
                    <PopoverHeader>Otras denominaciones:</PopoverHeader>
                    <PopoverBody>
                      <p>Modelo de Demanda constante con agotamiento.</p>
                      <p>Modelo Simple con Escasez.</p>
                      <p>Modelo EOQ con faltantes planeados.</p>
                    </PopoverBody>
                  </UncontrolledPopover>
                </Link>
              </Col>
            </Row>

            <Row className="mt-3 mx-auto">
              <Col>
                <Link to={"/ModeloStock/ModeloTriangular"} >
                  <Button id="Popover4" size='lg' outline color="success">Modelo triangular</Button>
                  <UncontrolledPopover placement="right" target="Popover4" trigger="hover">
                    <PopoverHeader>Otras denominaciones:</PopoverHeader>
                    <PopoverBody>
                      <p>Modelo de Stock con producción y demanda conjunta.</p>
                    </PopoverBody>
                  </UncontrolledPopover>
                </Link>
              </Col>
            </Row>

            <Row className="mt-3 mx-auto">
              <Col>
                <Link to={"/ModeloStock/ModeloSimpleSinAgotamientoPorLote"} >
                  <Button id="Popover5" size='lg' outline color="success">Modelo Simple Sin Agotamiento Por Lote</Button>
                  <UncontrolledPopover placement="right" target="Popover5" trigger="hover">
                    <PopoverHeader>Otras denominaciones:</PopoverHeader>
                    <PopoverBody>
                      <p>Modelo de Stock sin agotamiento con costos de compra variables de acuerdo al tamaño del lote ordenado.</p>
                      <p>Modelo de Stock sin agotamiento con Descuento por cantidad.</p>
                      <p>Modelo EOQ con reducciones de precios.</p>
                      <p>Modelo EOQ con Descuento por cantidad.</p>
                    </PopoverBody>
                  </UncontrolledPopover>
                </Link>
              </Col>
            </Row>

          </Jumbotron>
        </Col>
      </Row>
    </Container>
  )
};

export default ModelosStock;