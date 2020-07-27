import React from 'react';
import {InputGroup, InputGroupAddon, InputGroupText, Input, UncontrolledTooltip } from 'reactstrap'


const PorcInteres = props => {
    return(
            <InputGroup className="mt-1" id={"TTR"} key={"RTD"}>

            <Input
              placeholder="Porcentaje de interés que se produciría con el dinero inmovilizado"
              aria-label="Descripcion"
              aria-describedby="porcentaje"
              onChange={ props.handlePorcInteres }
              />
    
          </InputGroup>
    ) 
}

export default PorcInteres;