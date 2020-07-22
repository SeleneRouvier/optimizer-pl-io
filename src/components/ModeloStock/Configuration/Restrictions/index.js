import React from 'react';
import Restriction from './Restriction';

const Restrictions = props => {
    
    let {restricciones} = props;
    
    const deleteRes = ri => {
        restricciones.splice(ri, 1)
        restricciones.forEach( (restri,index) => restri.ri = index )
    }
    //Función que se encarga de manejar las modificaciones de restricciones.
    const handleChangeRes = (ri,desc) => {
        //Si el cambio es dejarla vacia entonces eliminamos la restriccion Sino, Almacenamos el valor
        if (desc === '') { deleteRes(ri) }else{ restricciones[ri].descripcion = desc }
        //pedimos al padre que almacene los cambios
        props.handleRestrictions(restricciones);
    };
    return restricciones.map( restri => <Restriction key={'RES-'+restri.ri} handleChange={handleChangeRes} restriccion={restri}/>)
}

export default Restrictions;