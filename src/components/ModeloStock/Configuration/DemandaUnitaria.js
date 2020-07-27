import React from 'react';
import { Input } from 'reactstrap'


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