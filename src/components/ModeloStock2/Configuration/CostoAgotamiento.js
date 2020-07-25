import React from 'react';
import {InputGroup, InputGroupAddon, InputGroupText, Input, UncontrolledTooltip } from 'reactstrap'


const CostoAgotamiento = props => {
    return(
            <InputGroup className="mt-1" id={"TTR"} key={"RTD"}>

            <Input
              placeholder="Costo de Agotamiento"
              aria-label="Descripcion"
              aria-describedby="costo"
              onChange={ props.handleCostoAgotamiento }
              />
    
          </InputGroup>
    ) 
}

export default CostoAgotamiento;