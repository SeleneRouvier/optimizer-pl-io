import React from 'react';
import {InputGroup, InputGroupAddon, InputGroupText, Input, UncontrolledTooltip } from 'reactstrap'


const Demanda = props => {
    return(
            <InputGroup className="mt-1" id={"TTR"} key={"RTD"}>

            <Input
              placeholder="Demanda"
              aria-label="Descripcion"
              aria-describedby="cantidad"
              onChange={ props.handleDemanda }
              />
    
          </InputGroup>
    ) 
}

export default Demanda;