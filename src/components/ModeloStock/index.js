import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, UncontrolledTooltip, ButtonGroup, Jumbotron, Container, Row, Col, UncontrolledPopover, PopoverBody, PopoverHeader } from "reactstrap";



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
                  <Button id="Popover" size='lg' outline color="primary">Teoría</Button>
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
                      <p>Modelo simple sin agotamiento con demanda determinística y constante.</p>
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
                  <Button id="Popover2" size='lg' outline color="success">Modelo simple sin agotamiento y con stock de protección</Button>
                  <UncontrolledPopover placement="right" target="Popover2" trigger="hover">
                    <PopoverHeader>Otras denominaciones:</PopoverHeader>
                    <PopoverBody>
                      <p>Modelo simple sin agotamiento con demanda determinística y constante con stock de protección.</p>
                      <p>Modelo de demanda constante con inventario de contingencia.</p>
                      <p>Modelo EOQ clásico con stock de protección.</p>
                    </PopoverBody>
                  </UncontrolledPopover>
                </Link>
              </Col>
            </Row>

            <Row className="mt-3 mx-auto">
              <Col>
                <Link to={"/ModeloStock/ModeloSimpleConAgotamiento"} >
                  <Button id="Popover3" size='lg' outline color="success">Modelo simple con agotamiento</Button>
                  <UncontrolledPopover placement="right" target="Popover3" trigger="hover">
                    <PopoverHeader>Otras denominaciones:</PopoverHeader>
                    <PopoverBody>
                      <p>Modelo de demanda constante con agotamiento.</p>
                      <p>Modelo simple con escasez.</p>
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
                      <p>Modelo de stock con producción y demanda conjunta.</p>
                    </PopoverBody>
                  </UncontrolledPopover>
                </Link>
              </Col>
            </Row>

            <Row className="mt-3 mx-auto">
              <Col>
                <Link to={"/ModeloStock/ModeloSimpleSinAgotamientoPorLote"} >
                  <Button id="Popover5" size='lg' outline color="success">Modelo simple sin agotamiento por lote</Button>
                  <UncontrolledPopover placement="right" target="Popover5" trigger="hover">
                    <PopoverHeader>Otras denominaciones:</PopoverHeader>
                    <PopoverBody>
                      <p>Modelo de stock sin agotamiento con costos de compra variables de acuerdo al tamaño del lote ordenado.</p>
                      <p>Modelo de stock sin agotamiento con Descuento por cantidad.</p>
                      <p>Modelo EOQ con reducciones de precios.</p>
                      <p>Modelo EOQ con descuento por cantidad.</p>
                    </PopoverBody>
                  </UncontrolledPopover>
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

export default ModelosStock;