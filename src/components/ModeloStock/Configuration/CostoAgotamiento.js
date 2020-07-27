import React from 'react';
import { Input} from 'reactstrap'


const CostoAgotamiento = props => {
    return (
        <Input
            placeholder="Costo de Agotamiento"
            aria-label="Descripcion"
            aria-describedby="costo"
            onChange={props.handleCostoAgotamiento}
        />
    )
}

export default CostoAgotamiento;