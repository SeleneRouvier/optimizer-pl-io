import React from 'react';
import Tiempo from './Tiempo';

const TiempoTotal = props => {
    
    let {tiempototal} = props;
    
    const deleteRes = ri => {
        tiempototal.splice(ri, 1)
        tiempototal.forEach( (restri,index) => restri.ri = index )
    }
    //Función que se encarga de manejar las modificaciones de restricciones.
    const handleChangeTT = (ri,desc) => {
        //Si el cambio es dejarla vacia entonces eliminamos la restriccion Sino, Almacenamos el valor
        if (desc === '') { deleteRes(ri) }else{ tiempototal[ri].descripcion = desc }
        //pedimos al padre que almacene los cambios
        props.handleTiempoTotal(tiempototal);
        handleNewTT();
    };
    //Función que se encarga de Añadir una restriccion si es necesario.
    const handleNewTT = () => {
        //Agregamos Tope de Restricciones
        if(tiempototal.length < 1 ){
        //Contador de Rescciones sin descripciones.
        let counterWitheRes = tiempototal.filter(element => element.descripcion.length === 0).length;
        //Si el contador de restricciones vacias es igual a 0 entonces agregamos una restriccion mas.
            if (counterWitheRes === 0) {
            tiempototal.push({
                ri: tiempototal.length,
                descripcion: "",
                coeficientes: [],
                eq: ">=",
                derecha: ""
            });
            props.handleTiempoTotal(tiempototal);
            }
        }
        };
    handleNewTT();
    return tiempototal.map( restri => <Tiempo key={'RES-'+restri.ri} handleChange={handleChangeTT} tiempo={restri}/>)
}

export default TiempoTotal;