import React from 'react';
import { Input } from 'reactstrap';


const NodoFinal = props => {
    return (
        <Input
            placeholder="Nodo final del camino"
            aria-label="Descripcion"
            aria-describedby="cantidad"
            onChange={props.handleNodoFinal}
        />
    )
}

export default NodoFinal;