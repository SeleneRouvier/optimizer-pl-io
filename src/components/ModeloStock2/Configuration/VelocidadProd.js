import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input, UncontrolledTooltip } from 'reactstrap'


const VelocidadProd = props => {
    return (
        <Input
            placeholder="Velocidad de Produccion"
            aria-label="Descripcion"
            aria-describedby="velocidad"
            onChange={props.handleVelocidadProduccion}
        />
    )
}

export default VelocidadProd;