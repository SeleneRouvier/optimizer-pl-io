import React from "react";
import { Container, Row, Card, CardBody, CardHeader, CardTitle } from "reactstrap";
import AristaFMI from "./AristasFMI";
import CantidadNodos from "./CantidadNodos";
import CantidadVertices from "./CantidadVertices";
import Cantidadindex from "./CantidadV";
import Button from 'react-bootstrap/Button';


//ESTO ES DE FLUJO MINIMO

class Processing extends React.Component {

  handleCantidadNodos = event => {
    let { value } = event.target;
    if (value) {
      console.log('Cambiando Objetivo');
      this.props.status.cantidadNodos = value;
      this.props.setModel(this.props.status);
    }
  }

  handleAristas = aristas => {
    this.props.status.aristas = aristas;
    this.props.setModel(this.props.status);
  };

  handleVertice = vertices => {
    this.props.status.vertices = vertices;
    this.props.setModel(this.props.status);
  };
  
  handleCantidadVertices = event => {
    let { value } = event.target;
    if (value) {
      console.log('Cambiando Objetivo');
      this.props.status.CantidadVertices = value;
      this.props.setModel(this.props.status);
    }
  }

  handleResolver = event => {
    //console.log('hola');
    //console.log(this.props.status.aristas);
    //console.log(this.props.status.vertices);
    var supplies = [];
    this.props.status.vertices.forEach(element => {
      supplies.push(Number(element.values.supplie));
    });
    //console.log(supplies);

    var capacidades = [];
    var nodosIniciales = [];
    var nodosFinales = [];
    var costos = [];

    this.props.status.aristas.forEach(element => {
      capacidades.push(Number(element.values.capacidad));
      nodosIniciales.push(Number(element.values.nodoInicial));
      nodosFinales.push(Number(element.values.nodoFinal));
      costos.push(Number(element.values.costo));
    });
    //console.log(capacidades);
    //console.log(nodosIniciales);
    //console.log(nodosFinales);
    //console.log(costos);

    fetch('https://io-optimizer3.herokuapp.com/flujominimo', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type':'application/json',
      },
      body: JSON.stringify({
          "nodosIniciales": nodosIniciales, 
          "nodosFinales": nodosFinales,
          "capacidades": capacidades,
          "costos": costos,
          "supplies": supplies 
      })
    })
    .then(
      (result) => {
        //var r = result.json();
        //console.log(r);
        return result.json();
        
      },
      (error) => {
        console.log(error)
      }
    )
    .then(
      (res) => {
        console.log(res);
        var r = res.resultado;
        if (r["status"] != 'OPTIMAL')
          //console.log('ERROR');
          this.props.status.error = r["error"]
        else
          this.props.status.error = null;
        this.props.status.minimumCost = r["Minimum cost"];
        this.props.status.arcs = r["arcos"];
        this.props.status.nodosI = r["NodosI"];
        this.props.status.nodosF = r["NodosF"];
        this.props.status.f = r["f"];
        this.props.status.ca = r["ca"];
        this.props.status.co = r["co"];
        this.props.status.status = r.status;
        this.props.setModel(this.props.status);
      }
    )

  }

  createTable = (long) => {
    let table = [];
    for (let i = 0; i < long; i++) {
       table.push(<tr>
         <td style={{borderColor: "darkgray", borderStyle: "solid", borderWidth: "medium"}}>{this.props.status.nodosI[i]}</td>
         <td style={{borderColor: "darkgray", borderStyle: "solid", borderWidth: "medium"}}>{this.props.status.nodosF[i]}</td>
         <td style={{borderColor: "darkgray", borderStyle: "solid", borderWidth: "medium"}}>{this.props.status.f[i]}</td>
         <td style={{borderColor: "darkgray", borderStyle: "solid", borderWidth: "medium"}}>{this.props.status.ca[i]}</td>
         <td style={{borderColor: "darkgray", borderStyle: "solid", borderWidth: "medium"}}>{this.props.status.co[i]}</td>
       </tr>)
    }
    return table;
  }

  

  render() {
    //Generamos el renderizado para cada una de los elementos de los arreglos obtenidos anteriormente.

    return (
      <>
        <h3>Cargamos los datos de nuestro modelo</h3>
        <Container>

          <Row>
            <Card outline color="secondary" className="w-100 mt-3">
              <CardHeader>
                <CardTitle className="text-left">
                  <h4>Cantidad de vertices</h4>
                </CardTitle>
              </CardHeader>
              <CardBody className="mx-auto">
                <CantidadVertices
                  handleCantidadVertices={this.handleCantidadVertices}
                />
              </CardBody>
            </Card>
          </Row>
          <Row>
            <Card outline color="secondary" className="w-100 mt-3">
              <CardHeader>
                <CardTitle className="text-left">
                  <h4>Ingrese oferta y demanda</h4>
                </CardTitle>
              </CardHeader>
              <CardBody>
                <Cantidadindex
                  vertices={this.props.status.vertices}
                  cant={this.props.status.CantidadVertices}
                  handleVertice = {this.handleVertice}
                /></CardBody>
            </Card>
          </Row>


          <Row>
            <Card outline color="secondary" className="w-100 mt-3">
              <CardHeader>
                <CardTitle className="text-left">
                  <h4>Cantidad de relaciones</h4>
                </CardTitle>
              </CardHeader>
              <CardBody className="mx-auto">
                <CantidadNodos
                  handleCantidadNodos={this.handleCantidadNodos}
                />
              </CardBody>
            </Card>
          </Row>
          <Row>
            <Card outline color="secondary" className="w-100 mt-3">
              <CardHeader>
                <CardTitle className="text-left">
                  <h4>Arcos</h4>
                </CardTitle>
              </CardHeader>
              <CardBody>
                <AristaFMI
                  aristas={this.props.status.aristas}
                  cantN={this.props.status.cantidadNodos}
                  handleAristas = {this.handleAristas}
                /></CardBody>
            </Card>
          </Row>
          <Row>
            <div style={{textAlign:"center", margin:"auto", paddingTop:"20px"}}>
              <Button variant="danger" onClick={this.handleResolver}>Resolver</Button>
            </div>
          </Row>
        </Container>
          <div style={{paddingTop:"20px"}}>
            {this.props.status.minimumCost > 0 &&
              <h4>El Mínimo es: {this.props.status.minimumCost}</h4>
            }
            <br></br>
            <table style={{width: "100%"}}>
              <thead>
                {this.props.status.nodosI?.length > 0 && 
                  <tr>
                    <th style={{borderColor: "darkgray", borderStyle: "solid", borderWidth: "medium"}}>Nodo Inicial</th>
                    <th style={{borderColor: "darkgray", borderStyle: "solid", borderWidth: "medium"}}>Nodo Final</th>
                    <th style={{borderColor: "darkgray", borderStyle: "solid", borderWidth: "medium"}}>Flow</th>
                    <th style={{borderColor: "darkgray", borderStyle: "solid", borderWidth: "medium"}}>Capacidad</th>
                    <th style={{borderColor: "darkgray", borderStyle: "solid", borderWidth: "medium"}}>Costo</th>
                  </tr> 
                }

              </thead>
              <tbody>
                  {this.props.status.nodosI?.length > 0 && 
                    this.createTable(this.props.status.nodosI.length) 
                  }
                    {/* {this.props.status.arcs?.map((arc,index) => {
                      console.log(index)
                      return <tr><td>{this.props.status.nodosI[index+1]}</td><td>{this.props.status.nodosF[index+1]}</td>
                      <td>{this.props.status.f[index+1]}</td>
                      <td>{this.props.status.ca[index+1]}</td>
                      <td>{this.props.status.co[index+1]}</td></tr>
                  })} */}
              </tbody>
            </table>
            <p>{this.props.status.error}</p>
            {/* {this.props.status.status} */}
          </div>
        
      </>
    );
  }
}

export default Processing;