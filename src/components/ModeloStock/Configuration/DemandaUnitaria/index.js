import React from 'react';
import Demanda from './Demanda';

const DemandaUnitaria = props => {
    
    let {demandaunitaria} = props;
    
    const deleteRes = ri => {
        demandaunitaria.splice(ri, 1)
        demandaunitaria.forEach( (restri,index) => restri.ri = index )
    }
    //Función que se encarga de manejar las modificaciones de restricciones.
    const handleChangeDem = (ri,desc) => {
        //Si el cambio es dejarla vacia entonces eliminamos la restriccion Sino, Almacenamos el valor
        if (desc === '') { deleteRes(ri) }else{ demandaunitaria[ri].descripcion = desc }
        //pedimos al padre que almacene los cambios
        props.handleDemandaUnitaria(demandaunitaria);
        handleNewDem();
    };
    //Función que se encarga de Añadir una restriccion si es necesario.
    const handleNewDem = () => {
        //Agregamos Tope de Restricciones
        if(demandaunitaria.length < 1 ){
        //Contador de Rescciones sin descripciones.
        let counterWitheRes = demandaunitaria.filter(element => element.descripcion.length === 0).length;
        //Si el contador de restricciones vacias es igual a 0 entonces agregamos una restriccion mas.
            if (counterWitheRes === 0) {
            demandaunitaria.push({
                ri: demandaunitaria.length,
                descripcion: "",
                coeficientes: [],
                eq: ">=",
                derecha: ""
            });
            props.handleDemandaUnitaria(demandaunitaria);
            }
        }
        };
    handleNewDem();
    return demandaunitaria.map( restri => <Demanda key={'RES-'+restri.ri} handleChange={handleChangeDem} demanda={restri}/>)
}

export default DemandaUnitaria;