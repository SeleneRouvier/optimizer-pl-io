import React from 'react';
import {InputGroup, InputGroupAddon, InputGroupText, Input, UncontrolledTooltip } from 'reactstrap'


const StockProteccion = props => {
    return(
            <InputGroup className="mt-1" id={"TTR"} key={"RTD"}>

            <Input
              placeholder="Stock de Proteccion"
              aria-label="Descripcion"
              aria-describedby="stock"
              onChange={ props.handleStockProteccion }
              />
    
          </InputGroup>
    ) 
}

export default StockProteccion;