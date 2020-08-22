import React from 'react';
import Cantidad from './CantidadV';


//ESTO ES DE FLUJO MINIMO
const Cantidadindex = props => {
    console.log(props)
    let { vertices } = props;
    let { cant } = props;

    //Función que se encarga de manejar las modificaciones en las vertices.
    //esto está al pedo
    const deletevertice = xj => {
        if (vertices.length > 2) {
            vertices.splice(xj, 1)
            vertices.forEach((vari, index) => vari.xj = index)
        } /*else {
            vertices[xj].values = { nodoInicial: "", nodoFinal: "", peso: "0" };
        }*/
    };

    const myDeletevertice = n => {
        for (let index = 0; index < n; index++) {
            vertices.pop();
            
        }
        //vertices.splice(vertices.length-1,n);
    }

    //Función que se encarga de manejar las modificaciones de vertices.
    const handleChangesvertice = (e) => {
        const { name, value } = e.target;
        const xj = name.split(',')[0];;
        const variable = name.split(',')[1];
        (vertices[xj]).values[variable] = value;
        //pedimos al padre que almacene los cambios
        props.handleVertice(vertices);
    };

    //Función que se encarga de Añadir una vertice si es necesario.
    const handleNewsVar = () => {
        console.log(cant);
        if (cant && vertices.length < cant) {

            var verticesSinValores = 0;
            vertices.forEach(vertice => {
                if (vertice.values['supplie'].length === 0) {
                    //console.log("Hola");
                    //verticesSinValores++;
                }
                   
            })

            //Si la cantidad de vertices Libres es igual a 0 se agrega una más.
           if (verticesSinValores === 0) {
               vertices.push({ xj: vertices.length, values: { supplie: "0"} });
              props.handleVertice(vertices);
         }

            if(verticesSinValores > 1) {
                deletevertice(vertices.length - 1);
            }
        }
        if (cant && vertices.length > cant) {
            console.log("Hola")
            console.log((vertices.length - cant))
            myDeletevertice((vertices.length - cant));
        }
    };
    handleNewsVar();
    return vertices.map(vertice => <Cantidad key={'VAR-' + vertice.xj} handleChanges={handleChangesvertice} vertice={vertice} />)
}

export default Cantidadindex;