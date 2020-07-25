import React from 'react';
import {InputGroup, InputGroupAddon, InputGroupText, Input, UncontrolledTooltip } from 'reactstrap'


const StockRealAlmacenado = props => {
    return(
            <InputGroup className="mt-1" id={"TTR"} key={"RTD"}>

            <Input
              placeholder="Stock Real Almacenado"
              aria-label="Descripcion"
              aria-describedby="stock"
              onChange={ props.handleStockRealAlmacenado }
              />
    
          </InputGroup>
    ) 
}

export default StockRealAlmacenado;