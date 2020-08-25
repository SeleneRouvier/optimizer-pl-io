import React from 'react';
import { Network, Node, Edge } from 'react-vis-network';

 
const GrafosFM = props => {
    let{cantN}= props;
    
    let nodos=[];
    console.log(cantN)
    for (var i = 0; i < cantN; ++i){
        nodos.push({id:{i} ,label:{i}})
    }
    console.log(nodos) 
  
        
        return (
            <Network>
                
                <Node id="1" label="Nodo 1" />
                <Node id="2" label="Nodo 2" />
                <Node id="3" label="Nodo 3" />
                <Edge id="1" from="1" to="2" />
                <Edge id="2" from="2" to="3" />
            </Network>
        );
    
}

export default GrafosFM;