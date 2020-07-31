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
                  <CardBody className="mx-auto text-justify">
                  <ul>
                    <li>Determinar el lote óptimo de compra de una materia prima o producto a mantener para permitir un adecuado abastecimiento de los mismos para atender su demanda futura.</li>
                    <li>Determinar la cantidad de reaprovicionamiento requerido en un período determinado.</li>
                    <li>Determinar el costo total esperado del lote.</li>
                    <li>Determinar la duración del lote.</li>
                  </ul>
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
                  <CardBody className="mx-auto text-justify">
                    Costo de preparación, de lanzamiento o de emisión de la orden de compra. <hr></hr>
                    Es un costo que podemos considerar independiente de la cantidad ordenada. Son los costos de papelería, telefónicos, etc., así como de la mano de obra interviniente. También incluyen la parte de los costos de recepción e inspección que son independientes del tamaño del lote ordenado.<p></p>
                    Si el sistema de inventario controla la planta donde se fabrica el ítem en cuestión, y si suponemos que el ítem se fabrica por lotes, los costos de preparar todo para fabricar ese conjunto también caerán en esta categoría.<p></p>
                    Estos costos no dependen de la cantidad ordenada. Se incurre en ellos cada vez que se coloca una orden y se los puede considerar costos "fijos". Son los costos fijos de colocar una orden de compra.
                  </CardBody>
                </Card>
                <Card outline color="secondary" className="w-100 mt-3">
                  <CardHeader>
                    <CardTitle className="text-left">
                      <h4>b</h4>
                    </CardTitle>
                  </CardHeader>
                  <CardBody className="mx-auto text-justify">
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
                  <CardBody className="mx-auto text-justify">
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
                  <CardBody className="mx-auto text-justify">
                    Costo de escasez o agotamiento. <hr></hr>
                    Aparecerá en los modelos que admitan ruptura del stock. 
                    La ruptura del stock tiene dos perjuicios:<p></p>
                    - inmediato: ingresos retrasados, llevar registros extra.<p></p>
                    - mediato: pérdida del prestigio comercial.
                  </CardBody>
                </Card>
                <Card outline color="secondary" className="w-100 mt-3">
                  <CardHeader>
                    <CardTitle className="text-left">
                      <h4>T</h4>
                    </CardTitle>
                  </CardHeader>
                  <CardBody className="mx-auto text-justify">
                    Tiempo total o período total. Se debe ingresar con la unidad de tiempo máximo que se presenta en el enunciado.
                  </CardBody>
                </Card>
                <Card outline color="secondary" className="w-100 mt-3">
                  <CardHeader>
                    <CardTitle className="text-left">
                      <h4>p</h4>
                    </CardTitle>
                  </CardHeader>
                  <CardBody className="mx-auto text-justify">
                    Velocidad de producción.
                  </CardBody>
                </Card>
                <Card outline color="secondary" className="w-100 mt-3">
                  <CardHeader>
                    <CardTitle className="text-left">
                      <h4>d</h4>
                    </CardTitle>
                  </CardHeader>
                  <CardBody className="mx-auto text-justify">
                    Demanda unitaria
                  </CardBody>
                </Card>
                <Card outline color="secondary" className="w-100 mt-3">
                  <CardHeader>
                    <CardTitle className="text-left">
                      <h4>D</h4>
                    </CardTitle>
                  </CardHeader>
                  <CardBody className="mx-auto text-justify">
                    Demanda total de un periodo dado (T).
                  </CardBody>
                </Card>
                <Card outline color="secondary" className="w-100 mt-3">
                  <CardHeader>
                    <CardTitle className="text-left">
                      <h4>sp</h4>
                    </CardTitle>
                  </CardHeader>
                  <CardBody className="mx-auto text-justify">
                    Stock de protección, stock mínimo de reposición, inventario de contingencia.
                  </CardBody>
                </Card>
                <Card outline color="secondary" className="w-100 mt-3">
                  <CardHeader>
                    <CardTitle className="text-left">
                      <h4>s</h4>
                    </CardTitle>
                  </CardHeader>
                  <CardBody className="mx-auto text-justify">
                    Stock real almacenado.
                  </CardBody>
                </Card>
                <Card outline color="secondary" className="w-100 mt-3">
                  <CardHeader>
                    <CardTitle className="text-left">
                      <h4>P</h4>
                    </CardTitle>
                  </CardHeader>
                  <CardBody className="mx-auto text-justify">
                    Porcentaje de interés que se produciría con el dinero inmovilizado o porcentaje aplicado al capital invertido.
                  </CardBody>
                </Card>
                <Card outline color="secondary" className="w-100 mt-3">
                  <CardHeader>
                    <CardTitle className="text-left">
                      <h4>C'i</h4>
                    </CardTitle>
                  </CardHeader>
                  <CardBody className="mx-auto text-justify">
                    Costo propio de la mercadería. Costo efectivo de almacenamiento.
                  </CardBody>
                </Card>
                <Card outline color="secondary" className="w-100 mt-3">
                  <CardHeader>
                    <CardTitle className="text-left">
                      <h4>Porcentaje aplicado a costo de producto</h4>
                    </CardTitle>
                  </CardHeader>
                  <CardBody className="mx-auto text-justify">
                    Forma parte del costo propio de la mercadería pero se solicita ingresar a parte para poder calcularlo segun el precio del producto.
                  </CardBody>
                </Card>
                <Card outline color="secondary" className="w-100 mt-3">
                  <CardHeader>
                    <CardTitle className="text-left">
                      <h4>bi - Costo de producto</h4>
                    </CardTitle>
                  </CardHeader>
                  <CardBody className="mx-auto text-justify">
                    Precios unitario del producto que varían segun la cantidad del producto que comprende el lote.
                    Costo del i-esimo producto.
                  </CardBody>
                </Card>
                <Card outline color="secondary" className="w-100 mt-3">
                  <CardHeader>
                    <CardTitle className="text-left">
                      <h4>Límite de lotes</h4>
                    </CardTitle>
                  </CardHeader>
                  <CardBody className="mx-auto text-justify">
                    Límite inferior de los intervalos de los diferentes tamaños de lotes que se presentan en el modelo.
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
                  <CardBody className="mx-auto text-justify">
                    Tamaño de lote óptimo
                  </CardBody>
                </Card>
                <Card outline color="secondary" className="w-100 mt-3">
                  <CardHeader>
                    <CardTitle className="text-left">
                      <h4>so</h4>
                    </CardTitle>
                  </CardHeader>
                  <CardBody className="mx-auto text-justify">
                    Stock óptimo
                  </CardBody>
                </Card>
                <Card outline color="secondary" className="w-100 mt-3">
                  <CardHeader>
                    <CardTitle className="text-left">
                      <h4>sm</h4>
                    </CardTitle>
                  </CardHeader>
                  <CardBody className="mx-auto text-justify">
                    Stock máximo
                  </CardBody>
                </Card>
                <Card outline color="secondary" className="w-100 mt-3">
                  <CardHeader>
                    <CardTitle className="text-left">
                      <h4>n</h4>
                    </CardTitle>
                  </CardHeader>
                  <CardBody className="mx-auto text-justify">
                    Es el número de veces que se emite una orden de compra o se solicita un reaprovisionamiento en el período T.
                  </CardBody>
                </Card>
                <Card outline color="secondary" className="w-100 mt-3">
                  <CardHeader>
                    <CardTitle className="text-left">
                      <h4>To</h4>
                    </CardTitle>
                  </CardHeader>
                  <CardBody className="mx-auto text-justify">
                    Duración del lote, o tiempo óptimo para la siguiente reaprovicionamiento, o duración del ciclo de reaprovicionamiento.
                  </CardBody>
                </Card>
                <Card outline color="secondary" className="w-100 mt-3">
                  <CardHeader>
                    <CardTitle className="text-left">
                      <h4>T1</h4>
                    </CardTitle>
                  </CardHeader>
                  <CardBody className="mx-auto text-justify">
                    Duración del lote, tiempo donde no existe agotamiento.
                  </CardBody>
                </Card>
                <Card outline color="secondary" className="w-100 mt-3">
                  <CardHeader>
                    <CardTitle className="text-left">
                      <h4>T2</h4>
                    </CardTitle>
                  </CardHeader>
                  <CardBody className="mx-auto text-justify">
                    Tiempo donde existe agotamiento.
                  </CardBody>
                </Card>
                <Card outline color="secondary" className="w-100 mt-3">
                  <CardHeader>
                    <CardTitle className="text-left">
                      <h4>Tp</h4>
                    </CardTitle>
                  </CardHeader>
                  <CardBody className="mx-auto text-justify">
                    Duración de la produccion, tiempo de producción.
                  </CardBody>
                </Card>
                <Card outline color="secondary" className="w-100 mt-3">
                  <CardHeader>
                    <CardTitle className="text-left">
                      <h4>CTAlm</h4>
                    </CardTitle>
                  </CardHeader>
                  <CardBody className="mx-auto text-justify">
                    Costo total de almacenamiento.
                  </CardBody>
                </Card>
                <Card outline color="secondary" className="w-100 mt-3">
                  <CardHeader>
                    <CardTitle className="text-left">
                      <h4>CTProd</h4>
                    </CardTitle>
                  </CardHeader>
                  <CardBody className="mx-auto text-justify">
                    Costo total de producto.
                  </CardBody>
                </Card>
                <Card outline color="secondary" className="w-100 mt-3">
                  <CardHeader>
                    <CardTitle className="text-left">
                      <h4>CTPre</h4>
                    </CardTitle>
                  </CardHeader>
                  <CardBody className="mx-auto text-justify">
                    Costo total de preparación.
                  </CardBody>
                </Card>
                <Card outline color="secondary" className="w-100 mt-3">
                  <CardHeader>
                    <CardTitle className="text-left">
                      <h4>CTE</h4>
                    </CardTitle>
                  </CardHeader>
                  <CardBody className="mx-auto text-justify">
                    Costo Total Esperado.
                  </CardBody>
                </Card>
                <Card outline color="secondary" className="w-100 mt-3">
                  <CardHeader>
                    <CardTitle className="text-left">
                      <h4>CTEo</h4>
                    </CardTitle>
                  </CardHeader>
                  <CardBody className="mx-auto text-justify">
                    Costo Total Esperado Óptimo.
                  </CardBody>
                </Card>
                <Card outline color="secondary" className="w-100 mt-3">
                  <CardHeader>
                    <CardTitle className="text-left">
                      <h4>cmsp</h4>
                    </CardTitle>
                  </CardHeader>
                  <CardBody className="mx-auto text-justify">
                    Costo de mantenimiento del stock de protección (sp).
                  </CardBody>
                </Card>
                <Card outline color="secondary" className="w-100 mt-3">
                  <CardHeader>
                    <CardTitle className="text-left">
                      <h4>casp</h4>
                    </CardTitle>
                  </CardHeader>
                  <CardBody className="mx-auto text-justify">
                    Costo de adquisición del stock de protección (sp).
                  </CardBody>
                </Card>
                <Card outline color="secondary" className="w-100 mt-3">
                  <CardHeader>
                    <CardTitle className="text-left">
                      <h4>ca</h4>
                    </CardTitle>
                  </CardHeader>
                  <CardBody className="mx-auto text-justify">
                    Costo total del agotamiento.
                  </CardBody>
                </Card>
                <Card outline color="secondary" className="w-100 mt-3">
                  <CardHeader>
                    <CardTitle className="text-left">
                      <h4>liminf</h4>
                    </CardTitle>
                  </CardHeader>
                  <CardBody className="mx-auto text-justify">
                    Límite inferior del intervalo del lote que se opto al final como óptimo, produciendo el menor costo total esperado.
                  </CardBody>
                </Card>
                <Card outline color="secondary" className="w-100 mt-3">
                  <CardHeader>
                    <CardTitle className="text-left">
                      <h4>cprod</h4>
                    </CardTitle>
                  </CardHeader>
                  <CardBody className="mx-auto text-justify">
                    Costo del producto por el que se optó al final con el tamaño del lote considerado como óptimo, produciendo el menor costo total esperado.
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