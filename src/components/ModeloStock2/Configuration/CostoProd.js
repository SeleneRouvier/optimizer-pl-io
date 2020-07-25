import React from 'react';
import {InputGroup, InputGroupAddon, InputGroupText, Input, UncontrolledTooltip } from 'reactstrap'


const CostoProd = props => {
    return(
            <InputGroup className="mt-1" id={"TTR"} key={"RTD"}>

            <Input
              placeholder="Costo de Producto"
              aria-label="Descripcion"
              aria-describedby="costo"
              onChange={ props.handleCostoProd }
              />
    
          </InputGroup>
    ) 
}

export default CostoProd;