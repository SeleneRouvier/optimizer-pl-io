import React from 'react';
import {InputGroup, InputGroupAddon, InputGroupText, Input, UncontrolledTooltip } from 'reactstrap'


const PorcAplicaCostoProd = props => {
    return(
            <InputGroup className="mt-1" id={"TTR"} key={"RTD"}>

            <Input
              placeholder="Porcentaje Aplicado a Costo de Producto"
              aria-label="Descripcion"
              aria-describedby="porcentaje"
              onChange={ props.handlePorcAplicaCostoProd }
              />
    
          </InputGroup>
    ) 
}

export default PorcAplicaCostoProd;