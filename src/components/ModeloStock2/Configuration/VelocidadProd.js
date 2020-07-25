import React from 'react';
import {InputGroup, InputGroupAddon, InputGroupText, Input, UncontrolledTooltip } from 'reactstrap'


const VelocidadProd = props => {
    return(
            <InputGroup className="mt-1" id={"TTR"} key={"RTD"}>

            <Input
              placeholder="Velocidad de Produccion"
              aria-label="Descripcion"
              aria-describedby="velocidad"
              onChange={ props.handleVelocidadProduccion }
              />
    
          </InputGroup>
    ) 
}

export default VelocidadProd;