import React from 'react';
import { Input } from 'reactstrap'

//ESTO ES DE FLUJO MINIMO
const CantidadVertices = props => {
    return (
            <Input
                placeholder="Cantidad de Vertices"
                aria-label="Descripcion"
                aria-describedby="cantidadV"
                onChange={e => props.handleCantidadVertices(e)}
            />
    )
}

export default CantidadVertices;