import React from 'react';
import { Input } from 'reactstrap'


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