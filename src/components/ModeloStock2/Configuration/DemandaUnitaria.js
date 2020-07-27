import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input, UncontrolledTooltip } from 'reactstrap'


const DemandaUnitaria = props => {
    return (
        <Input
            placeholder="Demanda Unitaria"
            aria-label="Descripcion"
            aria-describedby="cantidad"
            onChange={props.handleDemandaUnitaria}
        />
    )
}

export default DemandaUnitaria;