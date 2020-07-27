import React from 'react';
import { Input } from 'reactstrap'


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