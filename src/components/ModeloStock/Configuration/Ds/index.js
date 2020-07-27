import React from 'react';
import ComponentD from './d';

const ds = props => {
    let { ds } = props;

    //Función que se encarga de manejar las modificaciones en las ds.
    const deleteD = xi => {
        if (ds.length > 2) {
            ds.splice(xi, 1)
        }
    };
    //Función que se encarga de manejar las modificaciones de ds.
    const handleChangesD = (e) => {
        const { name, value } = e.target;
        ds[name] = value;
        //pedimos al padre que almacene los cambios
        props.handleDs(ds);
    };
    //Función que se encarga de Añadir una d si es necesario.
    const handleNewsVar = () => {
        if (ds.length < 20) {

            var dsSinValores = 0;
            ds.forEach(d => {
                if (d.length === 0)
                    dsSinValores++;
            })

            //Si la cantidad de ds Libres es igual a 0 se agrega una más.
            if (dsSinValores === 0) {
                ds.push('');
                props.handleDs(ds);
            }

            if (dsSinValores > 1) {
                deleteD(ds.length - 1);
            }
        }
    };
    handleNewsVar();
    return ds.map(function callback(currentValue, index, array) { return <ComponentD handleChanges={handleChangesD} d={index} /> })
}

export default ds;