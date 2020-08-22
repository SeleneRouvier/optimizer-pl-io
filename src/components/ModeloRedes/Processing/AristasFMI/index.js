import React from 'react';
import AristaFMI from './AristaFMI';


//ESTO ES DE FLUJO MINIMO
const AristasFMI = props => {
    console.log(props)
    let { aristas } = props;
    let { cantN } = props;

    //Función que se encarga de manejar las modificaciones en las aristas.
    //esto está al pedo
    const deleteArista = xi => {
        if (aristas.length > 2) {
            aristas.splice(xi, 1)
            aristas.forEach((vari, index) => vari.xi = index)
        } /*else {
            aristas[xi].values = { nodoInicial: "", nodoFinal: "", peso: "0" };
        }*/
    };

    const myDeleteArista = n => {
        for (let index = 0; index < n; index++) {
            aristas.pop();
            
        }
        //aristas.splice(aristas.length-1,n);
    }

    //Función que se encarga de manejar las modificaciones de aristas.
    const handleChangesArista = (e) => {
        const { name, value } = e.target;
        const xi = name.split(',')[0];;
        const variable = name.split(',')[1];
        (aristas[xi]).values[variable] = value;
        //pedimos al padre que almacene los cambios
        props.handleAristas(aristas);
    };

    //Función que se encarga de Añadir una arista si es necesario.
    const handleNewsVar = () => {
        console.log(cantN);
        if (cantN && aristas.length < cantN) {

            var aristasSinValores = 0;
            aristas.forEach(arista => {
                if (arista.values['nodoInicial'].length === 0 || arista.values['nodoFinal'].length === 0 || arista.values['capacidad'].length === 0 || arista.values['costo'].length === 0) {
                    //console.log("Hola");
                    //aristasSinValores++;
                }
                   
            })

            //Si la cantidad de aristas Libres es igual a 0 se agrega una más.
            if (aristasSinValores === 0) {
                aristas.push({ xi: aristas.length, values: { nodoInicial: "", nodoFinal: "", capacidad: "0", costo: "0" } });
                props.handleAristas(aristas);
            }

            if(aristasSinValores > 1) {
                deleteArista(aristas.length - 1);
            }
        }
        if (cantN && aristas.length > cantN) {
            console.log("Hola")
            console.log((aristas.length - cantN))
            myDeleteArista((aristas.length - cantN));
        }
    };
    handleNewsVar();
    return aristas.map(arista => <AristaFMI key={'VAR-' + arista.xi} handleChanges={handleChangesArista} arista={arista} />)
}

export default AristasFMI;