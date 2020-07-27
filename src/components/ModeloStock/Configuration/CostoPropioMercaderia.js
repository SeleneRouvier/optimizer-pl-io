import React from 'react';
import { Input } from 'reactstrap'


const CostoPropioMercaderia = props => {
    return (
        <Input
            placeholder="Costo Propio de la Mercaderia"
            aria-label="Descripcion"
            aria-describedby="costo"
            onChange={props.handleCostoPropioMercaderia}
        />
    )
}

export default CostoPropioMercaderia;