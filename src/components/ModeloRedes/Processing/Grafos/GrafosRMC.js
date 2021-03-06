import React from 'react';
import { Network, Node, Edge } from 'react-vis-network';

 
const GrafosRMC = props => {
    let{cantN} = props;
    let{aristas} = props;
    let nodos = [];
    let relaciones = [];
    

    for (var i = 0; i < cantN; ++i){
        nodos.push(i)

        relaciones.push({
            id: (aristas[i].xi),
            from: (aristas[i].values.nodoInicial),
            to: (aristas[i].values.nodoFinal),
            peso: (aristas[i].values.peso)
        })
    }
    console.log(relaciones)

    return(
        <Network style = {{height:"40vh"}}>
            {nodos.map((item) => <Node id={JSON.stringify(item)} label={JSON.stringify(item)} />) }
            {relaciones.map((item) => <Edge id={item.id} from={item.from} to={item.to} arrows={"to"} label={item.peso}/>) }
        </Network>
    ); 
}    

export default GrafosRMC;