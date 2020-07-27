import React from 'react';
import { Input } from 'reactstrap'


const PorcInteres = props => {
    return (
        <Input
            placeholder="Porcentaje de interés que se produciría con el dinero inmovilizado"
            aria-label="Descripcion"
            aria-describedby="porcentaje"
            onChange={props.handlePorcInteres}
        />
    )
}

export default PorcInteres;