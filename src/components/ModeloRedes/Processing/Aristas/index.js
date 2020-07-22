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
            aristas[xi].values = { nodoInicial: "", nodoFinal: "", peso: "0" };
        }
    };
    //Función que se encarga de manejar las modificaciones de aristas.
    const handleChangesArista = (e) => {
        const { name, value } = e.target;
        const xi = name.split(',')[0];;
        const variable = name.split(',')[1];
        if (value === '') { deleteVar(xi) } else { (aristas[xi]).values[variable] = value }
        //pedimos al padre que almacene los cambios
        props.handleAristas(aristas);
    };
    //Función que se encarga de Añadir una arista si es necesario.
    const handleNewsVar = () => {
        if (aristas.length < 20) {

            var aristasSinValores = 0;
            aristas.forEach(arista => {
                if (arista.values['nodoInicial'].length === 0 || arista.values['nodoFinal'].length === 0)
                    aristasSinValores++;
            })

            //Si la cantidad de aristas Libres es igual a 0 se agrega una más.
            if (aristasSinValores === 0) {
                aristas.push({ xi: aristas.length, values: { nodoInicial: "", nodoFinal: "", peso: "0" } });
                props.handleAristas(aristas);
            }
        }
    };
    handleNewsVar();
    return aristas.map(arista => <Arista key={'VAR-' + arista.xi} handleChanges={handleChangesArista} arista={arista} />)
}

export default Aristas;