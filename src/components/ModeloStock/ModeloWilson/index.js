import React from "react";
import { Container, Col, Row, Jumbotron} from "reactstrap";
import ModalModels from "../../Models"
import Configuration from "../Configuration";
import Processing from "../Processing";
import Presentation from "../Presentation";
import logo from "../logo.svg";

class ModeloWilson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      model:{
        restricciones: [{ ri: 0, descripcion: "", coeficientes: [], eq: ">=", derecha: "" }],
        demandaunitaria: [{ ri: 0, descripcion: "", coeficientes: [], eq: ">=", derecha: "" }],
        tiempototal: [{ ri: 0, descripcion: "", coeficientes: [], eq: ">=", derecha: "" }],
        method: "graph",
        objective: "max",
        integer: false
      },
      result: true,
      modelsOpen:false
    };
  }

  //Esta función maneja el cambio en las restricciones
  handleRestricciones = restricciones => {
    let { model } = this.state;
    model.restricciones = restricciones;
    this.setState({ model, changes: true });
  };
  //Esta función maneja el cambio en las restricciones
  handleDemandaUnitaria = demandaunitaria => {
    let { model } = this.state;
    model.demandaunitaria = demandaunitaria;
    this.setState({ model, changes: true });
  };
  //Esta función maneja el cambio en las restricciones
  handleTiempoTotal = tiempototal => {
    let { model } = this.state;
    model.tiempototal = tiempototal;
    this.setState({ model, changes: true });
  };

  setModel = model => this.setState({ model, changes:true });

  render() {
    let { modelsOpen, model, result } = this.state
    console.log('PRESENTATION:'+result);
    
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
                    <Configuration   status={model}
                    handleMethod={this.handleMethod}
                    handleRestricciones={this.handleRestricciones}
                    handleDemandaUnitaria={this.handleDemandaUnitaria}
                    handleTiempoTotal={this.handleTiempoTotal}
                    lastStep={this.lastStep}
                    toggleInteger={this.toggleInteger}
                    handleObjective={this.handleObjective}
                    showModels={this.showModels}/>
                </Jumbotron>  
            </Row>

            <Row>
                <Jumbotron className='w-100'>
                    <Processing status={model}
                    handleRestricciones={this.handleRestricciones} handleDemandaUnitaria={this.handleDemandaUnitaria} 
                    handleTiempoTotal={this.handleTiempoTotal} lastStep={this.lastStep}/>
                </Jumbotron>
                
            </Row>

            <Row>
                <Jumbotron className='w-100'>
                    <Presentation status={model} handleResult={this.handleResult} lastStep={this.lastStep}/>
                </Jumbotron>
            </Row>
          
          </Col>
        </Row>
        <Row><ModalModels open={modelsOpen} model={model} setModel={this.setModel} handleClose={this.showModels}/></Row>
      </Container>
    );
  }
}

export default ModeloWilson;
