import React from "react";
import { render } from 'react-dom';
import {Link} from 'react-router-dom';
import { Button, Container, Col, Row, Jumbotron, Card, CardBody, CardHeader, CardTitle } from "reactstrap";

class RedesTeoria extends React.Component {
	
  render() {
    return (
	
      <Container fluid className="App">

        <Row>
          <Col xs={12} md={6} className="my-4 mx-auto ">
            <Row>
              <Jumbotron className='w-100'>
                <h2 className="mx-auto">Modelos de Redes</h2>
              </Jumbotron>
            </Row>
            <Row>
              <Jumbotron className='w-100'>
                <Card outline color="secondary" className="w-100 mt-3">
                  <CardHeader>
                    <CardTitle className="text-left">
                      <h4>Temas</h4>
                    </CardTitle>
                  </CardHeader>
                  <CardBody className="mx-auto text-justify">
                  <ul>
                    <li>Ruta más corta</li>
                    <li>Árbol de expansión mínima</li>
                    <li>Flujo máximo</li>
                  </ul>
                  </CardBody>
                </Card>
              </Jumbotron>
            </Row>
            <Row>
              <Jumbotron className='w-100'>
                <Card outline color="secondary" className="w-100 mt-3">
                  <CardHeader>
                    <CardTitle className="text-left">
                      <h4>Ruta más corta</h4>
                    </CardTitle>
                  </CardHeader>
                  <CardBody className="mx-auto text-justify">
                    Considere una red conexa y no dirigida con dos nodos especiales llamados origen y destino. A cada ligadura (arco no dirigido) se asocia una distancia no negativa. El objetivo es encontrar la ruta más corta —la trayectoria con la mínima distancia total del origen al destino. 
					<p></p><ul>
					<li>Objetivo de la n-ésima iteración: encontrar el n-ésimo nodo más cercano al origen. (Este paso se  repetirá para n=1,2,... hasta que el n-ésimo nodo más cercano sea el nodo destino.)</li>
					<li>Datos de la n-ésima iteración: n-1 nodos más cercanos al origen que se encontró en las iteraciones previas, incluida su ruta más corta y la distancia desde el origen. (Estos nodos y el origen se llaman nodos resueltos; el resto son nodos no resueltos.)</li>
					<li>Candidatos para n-ésimo nodo más cercano: cada nodo resuelto que tiene conexión directa por una ligadura con uno o más nodos no resueltos proporciona un candidato, esto es, el nodo no resuelto que tiene la ligadura más corta. (Los empates proporcionan candidatos adicionales.)</li>
					<li>Cálculo del n-ésimo nodo más cercano: para cada nodo resuelto y sus candidatos, se suma la distancia entre ellos y la distancia de la ruta más corta desde el origen a este nodo resuelto. El candidato con la distancia total más pequeña es el n-ésimo nodo más cercano -los empates proporcionan nodos resueltos adicionales, y su ruta más corta es la que genera esta distancia.</li>
					</ul>
                  </CardBody>
                </Card>
                <Card outline color="secondary" className="w-100 mt-3">
                  <CardHeader>
                    <CardTitle className="text-left">
                      <h4>Algoritmo de Dijkstra</h4>
                    </CardTitle>
                  </CardHeader>
                  <CardBody className="mx-auto text-justify">
                    Sea ui la distancia más corta del nodo fuente 1 hasta el nodo i, y se define dij (>= 0) como la longitud del arco (i, j). Entonces el algoritmo define la etiqueta de un nodo inmediato posterior j como:
					<i><p></p>[ui, j] = [ui + dij,i], dij >= 0</i><p></p>
					La etiqueta del nodo de inicio es [0, ––], que indica que el nodo no tiene predecesor.
					<p></p>Las etiquetas de nodos en el algoritmo de Dijkstra son de dos clases: temporales y permanentes. Una etiqueta temporal se modifica si se puede encontrar una ruta más corta a un nodo. Cuando se ve que no se pueden encontrar rutas mejores, cambia el estado de la etiqueta temporal a permanente.

                  </CardBody>
                </Card>
                <Card outline color="secondary" className="w-100 mt-3">
                  <CardHeader>
                    <CardTitle className="text-left">
                      <h4>Paso 0</h4>
                    </CardTitle>
                  </CardHeader>
                  <CardBody className="mx-auto text-justify">
                    Etiquetar el nodo fuente (nodo 1) con la etiqueta permanente [0,––]. Igualar i = 1.
                  </CardBody>
                </Card>
                <Card outline color="secondary" className="w-100 mt-3">
                  <CardHeader>
                    <CardTitle className="text-left">
                      <h4>Paso i</h4>
                    </CardTitle>
                  </CardHeader>
				  
                  <CardBody className="mx-auto text-justify">
                    <ul>
					<li>Calcular las etiquetas temporales {/*[ui + dij, i] para cada nodo j al que pueda llegarse desde el nodo i, siempre y cuando, j no tenga etiqueta permanente. Si el nodo j ya está etiquetado con [uj , k] por otro nodo k, y si ui + dij < uj , sustituir [uj , k] por [uj + dij, i]  */}.</li>
					<li>Si todos los nodos tienen etiquetas permanentes, detenerse. En caso contrario, seleccionar la etiqueta [ur, s] que tenga la distancia más corta (=ur) entre todas las etiquetas temporales (los empates se rompen en forma arbitraria). Hacer que i = r, y <b>repetir el paso i</b>.</li>
					</ul>
                  </CardBody>
				

                </Card>
              </Jumbotron>
            </Row>
			<Row>
              <Jumbotron className='w-100'>
                <Card outline color="secondary" className="w-100 mt-3">
                  <CardHeader>
                    <CardTitle className="text-left">
                      <h4>Expansión mínima</h4>
                    </CardTitle>
                  </CardHeader>
                  <CardBody className="mx-auto text-justify">
                   Se considera una red no dirigida y conexa, en la que la información dada incluye alguna medida de longitud positiva (distancia, costo, tiempo, etc.), asociada con cada ligadura. Consiste en seleccionar un conjunto de ligaduras con la longitud total más corta entre todos los conjuntos de ligaduras que satisfacen cierta propiedad. Para el árbol de expansión mínima la propiedad que se requiere es que las ligaduras seleccionadas deben proporcionar una trayectoria entre cada par de nodos. 
					<p></p>El problema del árbol de expansión mínima se puede resumir de la siguiente manera: 
					<p></p><ul>
					<li>Se tienen los nodos de una red pero no las ligaduras. En su lugar se proporcionan las ligaduras potenciales y la longitud positiva de cada una si se insertan en la red. (Las medidas alternativas para la longitud de una ligadura incluyen distancia, costo y tiempo.)</li>
					<li>Se desea diseñar la red con suficientes ligaduras para satisfacer el requisito de que haya un camino entre cada par de nodos. </li>
					<li>El objetivo es satisfacer este requisito de manera que se minimice la longitud total de las ligaduras insertadas en la red. </li>
					</ul>
					Una red con n nodos requiere de sólo (n-1) ligaduras para proporcionar una trayectoria entre cada par de nodos. No deben usarse más ligaduras puesto que ello aumentaría, sin necesidad, la longitud total de las ligaduras seleccionadas. Las (n − 1) ligaduras deben elegirse de tal manera que la red resultante, con sólo las ligaduras seleccionadas, forme un árbol de expansión. Por lo tanto, el problema es encontrar el árbol de expansión con la longitud total mínima de sus ligaduras. 
                  </CardBody>
                </Card>
                <Card outline color="secondary" className="w-100 mt-3">
                  <CardHeader>
                    <CardTitle className="text-left">
                      <h4>Algoritmo del árbol de expansión mínima</h4>
                    </CardTitle>
                  </CardHeader>
                  <CardBody className="mx-auto text-justify">
					<ol>
                    <li>Se selecciona, de manera arbitraria, cualquier nodo y se conecta, es decir, se agrega una ligadura al nodo distinto más cercano. </li>
					<li>Se identifica el nodo no conectado más cercano a un nodo conectado y se conectan estos dos nodos, esto es, se agrega una ligadura entre ellos. Este paso se repite hasta que todos los nodos están conectados. </li>
					<li>Rompimiento de empates: los empates del nodo más cercano distinto (paso 1) o del nodo no conectado más cercano (paso 2), se pueden romper en forma arbitraria, pero el algoritmo debe llegar a una solución óptima. No obstante, estos empates son señal de que pueden existir (pero no necesariamente) soluciones óptimas múltiples. Todas esas soluciones se pueden identificar si se trabaja con las demás formas de romper los empates al final. </li>
					</ol>

                  </CardBody>
                </Card>
              </Jumbotron>
            </Row>
			<Row>
              <Jumbotron className='w-100'>
                <Card outline color="secondary" className="w-100 mt-3">
                  <CardHeader>
                    <CardTitle className="text-left">
                      <h4>Flujo máximo</h4>
                    </CardTitle>
                  </CardHeader>
                  <CardBody className="mx-auto text-justify">
                    En términos generales, el problema de flujo máximo se puede describir de la siguiente manera.<p></p>
					<ul>
					<li>Todo flujo a través de una red conexa dirigida se origina en un nodo, llamado origen, y termina en otro nodo llamado destino.</li>
					<li>Los nodos restantes son nodos de trasbordo.</li>
					<li>Se permite el flujo a través de un arco sólo en la dirección indicada por la flecha, donde la cantidad máxima de flujo está dada por la capacidad del arco. En el origen, todos los arcos señalan hacia afuera. En el destino, todos señalan hacia el nodo. </li>
					<li>El objetivo es maximizar la cantidad total de flujo del origen al destino. Esta cantidad se mide en cualquiera de las dos maneras equivalentes, esto es, la cantidad que sale del origen o la cantidad que entra al destino.</li>
					</ul>

                  </CardBody>
                </Card>
                <Card outline color="secondary" className="w-100 mt-3">
                  <CardHeader>
                    <CardTitle className="text-left">
                      <h4>Algoritmo de flujo máximo</h4>
                    </CardTitle>
                  </CardHeader>
                  <CardBody className="mx-auto text-justify">
                    El algoritmo de flujo máximo se basa en determinar rutas de irrupción que tengan flujo neto positivo entre los nodos fuente y sumidero. Cada ruta comunica parte o todas las capacidades de sus arcos al flujo total en la red. Considérese el arco (i, j) con capacidades iniciales . A medida que partes de esas capacidades contribuyen al flujo en el arco, se actualizan los residuales (o capacidades remanentes). La red con los residuales actualizados se llama red residual. Se usará la notación (cij, cji) para representar esos residuales. Para un nodo j que recibe flujo del nodo i, se define una etiqueta [aj , i], donde aj es el flujo del nodo i al nodo j.
                  </CardBody>
                </Card>
                <Card outline color="secondary" className="w-100 mt-3">
                  <CardHeader>
                    <CardTitle className="text-left">
                      <h4>Pasos</h4>
                    </CardTitle>
                  </CardHeader>
                  <CardBody className="mx-auto text-justify">
                    Cada iteración del algoritmo de flujo máximo consiste en tres pasos:<p></p>
					<ol>
					<li>Se identifica una trayectoria de aumento cuando se encuentra alguna trayectoria dirigida del origen al destino en la red residual, tal que cada arco sobre ella tenga capacidad residual estrictamente positiva.</li>
					<li>Cuando se encuentra el mínimo de las capacidades residuales de los arcos sobre esta trayectoria se identifica la capacidad residual c* de esta trayectoria de aumento. Se aumenta en c* el flujo de esta trayectoria.</li>
					<li>Se disminuye en c* la capacidad residual de cada arco en esta trayectoria de aumento. Se aumenta en c* la capacidad residual de cada arco en la dirección opuesta en esta trayectoria. Se regresa al paso 1.</li>
                  </ol>
				  </CardBody>
                </Card>
               
              </Jumbotron>
            </Row>
			<Row>
              <Jumbotron className='w-100'>
                <Link to={"/ModeloRedes/"}>
                  <Button size='lg' outline color="success">VOLVER</Button>
                </Link>
              </Jumbotron>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }

  }


export default RedesTeoria;