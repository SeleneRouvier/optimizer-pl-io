import React from 'react';
import { Input } from 'reactstrap'


const TiempoTotal = props => {
    return (
        <Input
            placeholder="Tiempo Total"
            aria-label="Descripcion"
            aria-describedby="tiempo"
            onChange={props.handleTiempoTotal}
        />
    )
}

export default TiempoTotal;