import React from 'react';
import Arista from './Arista';

const Aristas = props => {
    let { aristas } = props;

    //Función que se encarga de manejar las modificaciones en las aristas.
    const deleteVar = xi => {
        if (aristas.length > 2) {
            aristas.splice(xi, 1)
            aristas.forEach((vari, index) => vari.xi = index)
        } else {
            aristas[xi].descripcion = ''
        }
    };
    //Función que se encarga de manejar las modificaciones de restricciones.
    const handleChangesArista = (xi, desc) => {
        //Si el cambio es dejarla vacia entonces eliminamos la restriccion Sino, Almacenamos el valor
        if (desc === '') { deleteVar(xi) } else { aristas[xi].descripcion = desc }
        //pedimos al padre que almacene los cambios
        props.handleAristas(aristas);
    };
    //Función que se encarga de Añadir una Variable si es necesario.
    const handleNewsVar = () => {
        if (aristas.length < 20) {
            //Si el metodo es Simplex, se permite agregar más de dos aristas.
            let counterWitheVar = aristas.filter(element => element.descripcion.length === 0).length;
            //Si la cantidad de aristas Libres es igual a 0 se agrega una más.
            if (counterWitheVar === 0) {
                aristas.push({ xi: aristas.length, descripcion: "", coeficiente: "" });
                props.handleAristas(aristas);
            }
        }
    };
    handleNewsVar();
    return aristas.map(arista => <Arista key={'VAR-' + arista.xi} handleChanges={handleChangesArista} arista={arista} />)
}

export default Aristas;