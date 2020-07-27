import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input, UncontrolledTooltip } from 'reactstrap'


const StockRealAlmacenado = props => {
    return (
        <Input
            placeholder="Stock Real Almacenado"
            aria-label="Descripcion"
            aria-describedby="stock"
            onChange={props.handleStockRealAlmacenado}
        />
    )
}

export default StockRealAlmacenado;