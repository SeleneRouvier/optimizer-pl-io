import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input, UncontrolledTooltip } from 'reactstrap'


const Demanda = props => {
    return (
        <Input
            placeholder="Demanda"
            aria-label="Descripcion"
            aria-describedby="cantidad"
            onChange={props.handleDemanda}
        />
    )
}

export default Demanda;