import React from 'react';
import {InputGroup, InputGroupAddon, InputGroupText, Input, UncontrolledTooltip } from 'reactstrap'


const TiempoTotal = props => {
    return(
            <InputGroup className="mt-1" id={"TTR"} key={"RTD"}>

            <Input
              placeholder="Tiempo Total"
              aria-label="Descripcion"
              aria-describedby="tiempo"
              onChange={ props.handleTiempoTotal }
              />
    
          </InputGroup>
    ) 
}

export default TiempoTotal;