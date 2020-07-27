import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input, UncontrolledTooltip } from 'reactstrap'


const CostoPrep = props => {
    return (
        <Input
            placeholder="Costo de Preparacion"
            aria-label="Descripcion"
            aria-describedby="costo"
            onChange={props.handleCostoPrep}
        />
    )
}

export default CostoPrep;