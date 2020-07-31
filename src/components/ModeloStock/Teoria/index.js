import React from "react";
import { Container, Col, Row, Jumbotron, Card, CardBody, CardHeader, CardTitle } from "reactstrap";

class StockTeoria extends React.Component {
  render() {
    return (
      <Container fluid className="App">

        <Row>
          <Col xs={12} md={6} className="my-4 mx-auto ">
            <Row>
              <Jumbotron className='w-100'>
                <h2 className="mx-auto">Modelos de stock / Modelos de inventario</h2>
              </Jumbotron>
            </Row>
            <Row>
              <Jumbotron className='w-100'>
                <Card outline color="secondary" className="w-100 mt-3">
                  <CardHeader>
                    <CardTitle className="text-left">
                      <h4>Objetivos</h4>
                    </CardTitle>
                  </CardHeader>
                  <CardBody className="mx-auto">
                    <Row>Determinar el lote óptimo de compra de una materia prima o producto a mantener para permitir un adecuado abastecimiento de los mismos para atender su demanda futura.</Row>
                    <Row>Determinar el costo total esperado</Row>
                    <Row>Determinar la duracion del lote</Row>
                    <Row>La cantidad de reaprovicionamiento requerido</Row>
                  </CardBody>
                </Card>
              </Jumbotron>
            </Row>
            <Row>
              <Jumbotron className='w-100'>
                <h4>Definición de variables de entrada a los modelos</h4>
                <Card outline color="secondary" className="w-100 mt-3">
                  <CardHeader>
                    <CardTitle className="text-left">
                      <h4>K</h4>
                    </CardTitle>
                  </CardHeader>
                  <CardBody className="mx-auto">
                    Costo de preparación, de lanzamiento o de emisión de la orden de compra. <hr></hr>
                    Es un costo que podemos considerar independiente de la cantidad ordenada. Son los costos de papelería, telefónicos, etc., así como de la mano de obra interviniente. También incluyen la parte de los costos de recepción e inspección que son independientes del tamaño del lote ordenado.
                    Si el sistema de inventario controla la planta donde se fabrica el ítem en cuestión, y si suponemos que el ítem se fabrica por lotes, los costos de preparar todo para fabricar ese conjunto también caerán en esta categoría.
                    Estos costos no dependen de la cantidad ordenada. Se incurre en ellos cada vez que se coloca una orden y se los puede considerar costos "fijos". Son los costos fijos de colocar una orden de compra.
                  </CardBody>
                </Card>
                <Card outline color="secondary" className="w-100 mt-3">
                  <CardHeader>
                    <CardTitle className="text-left">
                      <h4>b</h4>
                    </CardTitle>
                  </CardHeader>
                  <CardBody className="mx-auto">
                    Costo del producto, de adquisición o de producción. <hr></hr>
                    Supondremos que es el costo unitario, independiente (salvo para un modelo en especial) de la cantidad comprada.
                  </CardBody>
                </Card>
                <Card outline color="secondary" className="w-100 mt-3">
                  <CardHeader>
                    <CardTitle className="text-left">
                      <h4>C1</h4>
                    </CardTitle>
                  </CardHeader>
                  <CardBody className="mx-auto">
                    Costo de almacenamiento. <hr></hr>
                    Es el costo de mantener en el almacén una unidad del ítem en la unidad de tiempo. Comprende costos fijos y variables.
                  </CardBody>
                </Card>
                <Card outline color="secondary" className="w-100 mt-3">
                  <CardHeader>
                    <CardTitle className="text-left">
                      <h4>C2</h4>
                    </CardTitle>
                  </CardHeader>
                  <CardBody className="mx-auto">
                    Costo de escasez o agotamiento. <hr></hr>
                    Aparecerá en los modelos que admitan ruptura del stock. La ruptura del stock tiene dos perjuicios:
                    — inmediato: ingresos retrasados, llevar registros extra.
                    — mediato: pérdida del prestigio comercial.
                  </CardBody>
                </Card>
                <Card outline color="secondary" className="w-100 mt-3">
                  <CardHeader>
                    <CardTitle className="text-left">
                      <h4>T</h4>
                    </CardTitle>
                  </CardHeader>
                  <CardBody className="mx-auto">
                    Tiempo total o periodo total. Se debe ingresar con la unidad de tiempo maximo que se presenta en el enunciado
                  </CardBody>
                </Card>
                <Card outline color="secondary" className="w-100 mt-3">
                  <CardHeader>
                    <CardTitle className="text-left">
                      <h4>p</h4>
                    </CardTitle>
                  </CardHeader>
                  <CardBody className="mx-auto">
                    Velocidad de producción.
                  </CardBody>
                </Card>
                <Card outline color="secondary" className="w-100 mt-3">
                  <CardHeader>
                    <CardTitle className="text-left">
                      <h4>sp</h4>
                    </CardTitle>
                  </CardHeader>
                  <CardBody className="mx-auto">
                    Stock de protección, stock mínimo de reposición.
                  </CardBody>
                </Card>
                <Card outline color="secondary" className="w-100 mt-3">
                  <CardHeader>
                    <CardTitle className="text-left">
                      <h4>s</h4>
                    </CardTitle>
                  </CardHeader>
                  <CardBody className="mx-auto">
                    Stock real almacenado.
                  </CardBody>
                </Card>
                <Card outline color="secondary" className="w-100 mt-3">
                  <CardHeader>
                    <CardTitle className="text-left">
                      <h4>P</h4>
                    </CardTitle>
                  </CardHeader>
                  <CardBody className="mx-auto">
                    Porcentaje de interés que se produciría con el dinero inmovilizado.
                  </CardBody>
                </Card>
                <Card outline color="secondary" className="w-100 mt-3">
                  <CardHeader>
                    <CardTitle className="text-left">
                      <h4>C'i</h4>
                    </CardTitle>
                  </CardHeader>
                  <CardBody className="mx-auto">
                    Costo efectivo de almacenamiento del i-esimoproducto
                  </CardBody>
                </Card>
                <Card outline color="secondary" className="w-100 mt-3">
                  <CardHeader>
                    <CardTitle className="text-left">
                      <h4>bi</h4>
                    </CardTitle>
                  </CardHeader>
                  <CardBody className="mx-auto">
                    Costo del i-esimoproducto
                  </CardBody>
                </Card>
              </Jumbotron>
            </Row>
            <Row>
              <Jumbotron className='w-100'>
                <h4>Definición de variables de salida o resultado de los modelos</h4>
                <Card outline color="secondary" className="w-100 mt-3">
                  <CardHeader>
                    <CardTitle className="text-left">
                      <h4>qo</h4>
                    </CardTitle>
                  </CardHeader>
                  <CardBody className="mx-auto">
                    Tamaño de lote optimo
                  </CardBody>
                </Card>
                <Card outline color="secondary" className="w-100 mt-3">
                  <CardHeader>
                    <CardTitle className="text-left">
                      <h4>n</h4>
                    </CardTitle>
                  </CardHeader>
                  <CardBody className="mx-auto">
                    Es el número de veces que se emite una orden de compra en el período T
                  </CardBody>
                </Card>
                <Card outline color="secondary" className="w-100 mt-3">
                  <CardHeader>
                    <CardTitle className="text-left">
                      <h4>To</h4>
                    </CardTitle>
                  </CardHeader>
                  <CardBody className="mx-auto">
                    Duracion del lote, o tiempo optimo para la siguiente reaprovicionamiento, o duracion del ciclo de reaprovicionamiento.
                  </CardBody>
                </Card>
                <Card outline color="secondary" className="w-100 mt-3">
                  <CardHeader>
                    <CardTitle className="text-left">
                      <h4>CTAlm</h4>
                    </CardTitle>
                  </CardHeader>
                  <CardBody className="mx-auto">
                    Costo total de almacenamiento.
                  </CardBody>
                </Card>
                <Card outline color="secondary" className="w-100 mt-3">
                  <CardHeader>
                    <CardTitle className="text-left">
                      <h4>CTProd</h4>
                    </CardTitle>
                  </CardHeader>
                  <CardBody className="mx-auto">
                    Costo total de producto.
                  </CardBody>
                </Card>
                <Card outline color="secondary" className="w-100 mt-3">
                  <CardHeader>
                    <CardTitle className="text-left">
                      <h4>CTPre</h4>
                    </CardTitle>
                  </CardHeader>
                  <CardBody className="mx-auto">
                    Costo total de preparación.
                  </CardBody>
                </Card>
                <Card outline color="secondary" className="w-100 mt-3">
                  <CardHeader>
                    <CardTitle className="text-left">
                      <h4>CTE</h4>
                    </CardTitle>
                  </CardHeader>
                  <CardBody className="mx-auto">
                    Costo Total Esperado.
                  </CardBody>
                </Card>
                <Card outline color="secondary" className="w-100 mt-3">
                  <CardHeader>
                    <CardTitle className="text-left">
                      <h4>CTEo</h4>
                    </CardTitle>
                  </CardHeader>
                  <CardBody className="mx-auto">
                    Costo Total Esperado Óptimo.
                  </CardBody>
                </Card>
                <Card outline color="secondary" className="w-100 mt-3">
                  <CardHeader>
                    <CardTitle className="text-left">
                      <h4>sm</h4>
                    </CardTitle>
                  </CardHeader>
                  <CardBody className="mx-auto">
                    Costo de mantenimiento del sp.
                  </CardBody>
                </Card>
              </Jumbotron>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default StockTeoria;