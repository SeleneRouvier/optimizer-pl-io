import React from 'react';
import {InputGroup, InputGroupAddon, InputGroupText, Input, UncontrolledTooltip } from 'reactstrap'


const CostoPropioMercaderia  = props => {
    return(
            <InputGroup className="mt-1" id={"TTR"} key={"RTD"}>

            <Input
              placeholder="Costo Propio de la Mercaderia"
              aria-label="Descripcion"
              aria-describedby="costo"
              onChange={ props.handleCostoPropioMercaderia }
              />
    
          </InputGroup>
    ) 
}

export default CostoPropioMercaderia;