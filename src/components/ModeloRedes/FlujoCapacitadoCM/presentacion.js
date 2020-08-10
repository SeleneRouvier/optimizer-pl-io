import React from "react";
import { Card, CardTitle, CardHeader, CardBody } from "reactstrap";

class Presentation extends React.Component {
  constructor(props) {
    super(props);

  }

  mostrarResultados = () => {
    
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
