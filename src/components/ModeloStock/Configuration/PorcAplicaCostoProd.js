import React from 'react';
import { Input } from 'reactstrap'


const PorcAplicaCostoProd = props => {
    return (
        <Input
            placeholder="Porcentaje Aplicado a Costo de Producto"
            aria-label="Descripcion"
            aria-describedby="porcentaje"
            onChange={props.handlePorcAplicaCostoProd}
        />
    )
}

export default PorcAplicaCostoProd;