import React, {useState} from "react";
import { Button, Container, Col, Row, Jumbotron } from "reactstrap";
import ProcessingFM from "../Processing/indexFM";
import Presentation from "./presentacion";
import logo from "../logo.svg";
import GrafosFM  from "../Processing/Grafos/GrafosFM";

class FlujoMaximo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            model: {
                aristas: [{ xi: 0, values: { nodoInicial: "", nodoFinal: "", peso: "" } }, { xi: 1, values: { nodoInicial: "", nodoFinal: "", peso: "" } }],
                cantidadNodos: "0",
                nodoInicial: "",
                nodoFinal: ""
            }
        };
    }

    setModel = model => this.setState({ model, changes: true });

    //ejecutarGrafo() {
     //   this.setState({show: true});
   // }
    //noEjecutarGrafo() {
     //   this.setState({show: false});
    //}

    render() {

       // let button;

        //if (this.state.show) {
         //   button = <Button onClick={ this.noEjecutarGrafo}>Mostrar Grafo, es true</Button>;
        //} else {
          //  button = <Button onClick={ this.ejecutarGrafo}>Mostrar Grafo, es false</Button>;
        //}

        return (
            <Container fluid className="App">
                <Row className="">
                    <Col xs={12} md={6} className="mx-auto">
                        <img src={logo} className="App-logo" alt="logo" height="200" />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} className="my-4 mx-auto ">
                        <Row>
                            <Jumbotron className='w-100'>
                                <h2>Modelos de redes:</h2>
                                <h2>Flujo Máximo</h2>
                            </Jumbotron>
                        </Row>
                        <Row>
                            <Jumbotron className='w-100'>
                                <ProcessingFM status={this.state.model} handleAristas={this.handleAristas}
                                    setModel={this.setModel} FlujoMaximo={true} />
                            </Jumbotron>
                        </Row>
                        
                        <Row>
                            <Jumbotron className='w-100'>
                                <Presentation model={this.state.model} />
                                <br/>
                                <div>
                                    <GrafosFM />                                   
                                </div>
                            </Jumbotron>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default FlujoMaximo;