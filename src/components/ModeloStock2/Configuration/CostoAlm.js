import React from 'react';
import {InputGroup, InputGroupAddon, InputGroupText, Input, UncontrolledTooltip } from 'reactstrap'


const CostoAlm = props => {
    return(
            <InputGroup className="mt-1" id={"TTR"} key={"RTD"}>

            <Input
              placeholder="Costo de Almacenamiento"
              aria-label="Descripcion"
              aria-describedby="costo"
              onChange={ props.handleCostoAlm }
              />
    
          </InputGroup>
    ) 
}

export default CostoAlm;