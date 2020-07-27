import React from 'react';
import { Input } from 'reactstrap'


const StockProteccion = props => {
    return (
        <Input
            placeholder="Stock de Proteccion"
            aria-label="Descripcion"
            aria-describedby="stock"
            onChange={props.handleStockProteccion}
        />
    )
}

export default StockProteccion;