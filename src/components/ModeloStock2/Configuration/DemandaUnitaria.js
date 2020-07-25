import React from 'react';
import {InputGroup, InputGroupAddon, InputGroupText, Input, UncontrolledTooltip } from 'reactstrap'


const DemandaUnitaria = props => {
    return(
            <InputGroup className="mt-1" id={"TTR"} key={"RTD"}>

            <Input
              placeholder="Demanda Unitaria"
              aria-label="Descripcion"
              aria-describedby="cantidad"
              onChange={ props.handleDemandaUnitaria }
              />
    
          </InputGroup>
    ) 
}

export default DemandaUnitaria;