import React from 'react';
import { Input } from 'reactstrap'


const CampoUnitario = props => {
    return (
        <Input
            placeholder={props.nombre}
            onChange={props.handleChange}
        />
    )
}

export default CampoUnitario;