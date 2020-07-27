import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input, UncontrolledTooltip } from 'reactstrap'


const CostoAlm = props => {
    return (
        <Input
            placeholder="Costo de Almacenamiento"
            aria-label="Descripcion"
            aria-describedby="costo"
            onChange={props.handleCostoAlm}
        />
    )
}

export default CostoAlm;