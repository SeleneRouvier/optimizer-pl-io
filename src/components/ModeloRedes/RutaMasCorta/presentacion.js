import React from "react";
import { Card, CardTitle, CardHeader, CardBody } from "reactstrap";
import rutaMasCorta from "../Functions/RutaMasCorta";

class Presentation extends React.Component {
  constructor(props) {
    super(props);
    this.model = props.model;
    this.resultado = null;
  }

  mostrarResultados = () => {
    let { aristas, cantidadNodos, nodoInicial } = this.model;
    cantidadNodos = parseInt(cantidadNodos);
    nodoInicial = parseInt(nodoInicial);
    var errorDatos;
    var error = false;
    var numeroArista;

    if (cantidadNodos <= 1) {
      return <h3>Deben existir al menos 2 nodos</h3>
    }

    if (nodoInicial < 0 || nodoInicial > cantidadNodos) {
      return <h3>El nodo inicial debe tener valores entre 0 y {cantidadNodos - 1}</h3>
    }

    // El simbolo || actua como OR y el simbolo && actua como AND
    let aristasConverted = [];
    aristas.forEach(function callback(arista, index, array) {

      if (arista.values['nodoInicial'].length > 0 && arista.values['nodoFinal'].length > 0 && arista.values['peso'] > 0) {
        const nodoInicial = Number(arista.values['nodoInicial']);
        const nodoFinal = Number(arista.values['nodoFinal']);
        const peso = Number(arista.values['peso']);

        console.log(nodoFinal, nodoInicial, peso);
        if (nodoInicial >= cantidadNodos || nodoInicial < 0 || nodoFinal >= cantidadNodos || nodoFinal < 0 || Number.isNaN(nodoInicial) || Number.isNaN(nodoFinal) || Number.isNaN(peso)) {
          error = true;
          errorDatos = 'Los valores de los nodos pueden ir desde 0 hasta ' + (cantidadNodos - 1);
          numeroArista = index;
          console.log(errorDatos)
        }
        if (nodoInicial === nodoFinal) {
          error = true;
          errorDatos = 'Un nodo no puede apuntarse a sí mismo';
        }
        console.log(errorDatos)
        const aristaConverted = [nodoInicial, nodoFinal, peso];

        aristasConverted.push(aristaConverted);
      }
    });

    if (error) return <Card> <h3>Error en arista A{numeroArista}:</h3><p>{errorDatos}</p></Card>

    console.log('Aristas del modelo: ', aristasConverted);
    console.log('Cantidad de nodos: ', cantidadNodos);

    if (cantidadNodos > 0 && aristasConverted.length > 0 && nodoInicial >= 0) {
      var { g, dijkstra } = rutaMasCorta(cantidadNodos, aristasConverted, nodoInicial);
    } else {
      return <h3>Modelo incompleto</h3>
    }

    let mostrar = [];
    let flagNoHayCamino = true;

    for (var v = 0; v < g.V; ++v) {
      if (dijkstra.hasPathTo(v)) {
        const path = dijkstra.pathTo(v);

        if (v !== nodoInicial) {
          mostrar.push(<h4>{`Ruta mas corta desde ${nodoInicial} a ${v}`}</h4>);

          for (var i = 0; i < path.length; ++i) {
            const e = path[i];
            console.log(e.from() + ' => ' + e.to() + ': ' + e.weight);
            mostrar.push(<p>{`(${e.from()} => ${e.to()}): Distancia de ${e.weight}`}</p>);
          }

          mostrar.push(<p>{`Distancia Total del Camino: ${dijkstra.distanceTo(v)}`}</p>);
          mostrar.push(<br></br>);

          flagNoHayCamino = false;
        }
      }
    }

    if (flagNoHayCamino) {
      return <h3>El nodo no tiene caminos posibles</h3>
    }

    if (mostrar.length > 0) {
      return <Card outline color="secondary" className="w-100 mt-3 mx-auto">
        <CardHeader>
          <CardTitle className="text-left">
            <h4>Resultados</h4>
          </CardTitle>
        </CardHeader>
        <CardBody className="mx-auto">
          {mostrar}
        </CardBody>
      </Card>
    }
  }

  render() {

    return (
      <>
        <Card outline color="info" className="w-100 mt-3 mx-auto">
          <CardHeader>
            <CardTitle>
              {this.mostrarResultados()}
            </CardTitle>
          </CardHeader>
        </Card>
      </>
    );
  }
}

export default Presentation;
