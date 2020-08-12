import React from 'react';
import { Input, } from 'reactstrap';


const NodoInicial = props => {
    return (
        <Input
            placeholder="Nodo inicial del camino"
            aria-label="Descripcion"
            aria-describedby="cantidad"
            onChange={props.handleNodoInicial}
        />
    )
}

export default NodoInicial;