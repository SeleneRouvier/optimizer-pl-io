import React from 'react';
import {InputGroup, InputGroupAddon, InputGroupText, Input, UncontrolledTooltip } from 'reactstrap'


const CostoPrep = props => {
    return(
            <InputGroup className="mt-1" id={"TTR"} key={"RTD"}>

            <Input
              placeholder="Costo de Preparacion"
              aria-label="Descripcion"
              aria-describedby="costo"
              onChange={ props.handleCostoPrep }
              />
    
          </InputGroup>
    ) 
}

export default CostoPrep;