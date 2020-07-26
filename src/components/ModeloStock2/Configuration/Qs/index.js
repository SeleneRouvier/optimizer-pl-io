import React from 'react';
import ComponentQ from './q';

const qs = props => {
    let { qs } = props;

    //Función que se encarga de manejar las modificaciones en las qs.
    const deleteD = xi => {
        if (qs.length > 2) {
            qs.splice(xi, 1)
        } /*else {
            qs[xi].values = { nodoInicial: "", nodoFinal: "", peso: "0" };
        }*/
    };
    //Función que se encarga de manejar las modificaciones de qs.
    const handleChangesQ = (e) => {
        const { name, value } = e.target;
        qs[name] = value;
        //pedimos al padre que almacene los cambios
        props.handleQs(qs);
    };
    //Función que se encarga de Añadir una d si es necesario.
    const handleNewsVar = () => {
        if (qs.length < 20) {

            var qsSinValores = 0;
            qs.forEach(q => {
                if (q.length === 0)
                    qsSinValores++;
            })

            //Si la cantidad de qs Libres es igual a 0 se agrega una más.
            if (qsSinValores === 0) {
                qs.push('');
                props.handleQs(qs);
            }

            if (qsSinValores > 1) {
                deleteD(qs.length - 1);
            }
        }
    };
    handleNewsVar();
    return qs.map(function callback(currentValue, index, array) { return <ComponentQ handleChanges={handleChangesQ} q={index} /> })
}

export default qs;