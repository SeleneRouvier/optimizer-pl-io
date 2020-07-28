import React from 'react';
import { Input } from 'reactstrap'


const CantidadNodos = props => {
    return (
            <Input
                placeholder="Cantidad de nodos"
                aria-label="Descripcion"
                aria-describedby="cantidad"
                onChange={e => props.handleCantidadNodos(e)}
            />
    )
}

export default CantidadNodos;