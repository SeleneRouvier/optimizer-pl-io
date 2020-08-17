import React, { Component } from 'react';

const jsgraphs = require('js-graph-algorithms');

//const cantNodos = 5;
//const aristas = [[0, 1, 5], [0, 2, 5], [1, 2, 5], [1, 3, 5], [2, 3, 5]];

function flujoMaximo(cantidadNodos, aristas, source, target) {
    // g es la cantidad de nodos ingresada        
    const g = new jsgraphs.FlowNetwork(cantidadNodos);

    aristas.forEach(arista => {
        g.addEdge(new jsgraphs.FlowEdge(arista[0], arista[1], arista[2]));
    });

    const ff = new jsgraphs.FordFulkerson(g, source, target);
    let resultado = ('Flujo Máximo: ' + ff.value);

    const minCut = ff.minCut(g);
    
    var resultadoEC = [];
    
    for (var i = 0; i < minCut.length; ++i) {
        const e = minCut[i];            
        resultadoEC.push('(' + e.from() + ", " + e.to() + ')');
    }    

    return(
        <>
            <h3>{resultado}</h3>
            <hr/>
            <h3>Enumeracion de cortes:</h3>
            <h3>{resultadoEC}</h3>
            
        </>
    );
}

export default flujoMaximo;