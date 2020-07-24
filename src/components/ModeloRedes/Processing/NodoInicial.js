import React from 'react';
import {InputGroup, InputGroupAddon, InputGroupText, Input, UncontrolledTooltip } from 'reactstrap'


const NodoInicial = props => {
    return(
            <InputGroup className="mt-1" id={"TTR"} key={"RTD"}>

            <Input
              placeholder="Nodo inicial del camino"
              aria-label="Descripcion"
              aria-describedby="cantidad"
              onChange={ props.handleNodoInicial }
              />
    
          </InputGroup>
    ) 
}

export default NodoInicial;