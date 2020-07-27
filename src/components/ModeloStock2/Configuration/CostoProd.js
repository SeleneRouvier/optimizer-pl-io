import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input, UncontrolledTooltip } from 'reactstrap'


const CostoProd = props => {
    return (
        <Input
            placeholder="Costo de Producto"
            aria-label="Descripcion"
            aria-describedby="costo"
            onChange={props.handleCostoProd}
        />
    )
}

export default CostoProd;