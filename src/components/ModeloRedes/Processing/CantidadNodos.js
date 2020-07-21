import React from 'react';
import {InputGroup, InputGroupAddon, InputGroupText, Input, UncontrolledTooltip } from 'reactstrap'


const CantidadNodos = props => {
    return(
            <InputGroup className="mt-1" id={"TTR"} key={"RTD"}>

            <Input
              placeholder="Cantidad de nodos"
              aria-label="Descripcion"
              aria-describedby="cantidad"
              onChange={ e => props.handleCantidadNodos(e)}
              />
    
          </InputGroup>
    ) 
}

export default CantidadNodos;