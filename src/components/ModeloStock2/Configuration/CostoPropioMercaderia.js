import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input, UncontrolledTooltip } from 'reactstrap'


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