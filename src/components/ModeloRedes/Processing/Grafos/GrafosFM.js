import React, { Component } from 'react';
import { Network, Node, Edge } from 'react-vis-network';
 
class GrafosFM extends Component {
    constructor(props) {
        super(props);
        this.model = props.model;
        this.resultado = null;
    }
    obtenerNodos= () => {
        let{cantidadNodos} = this.props.model.cantidadNodos;
        cantidadNodos = parseInt(cantidadNodos);
    }
  
    render() {
       
        
        let nodos=[];
        {this.obtenerNodos()}

        for (var i = 0; i < this.props.cantidadNodos; ++i){
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
}

export default GrafosFM;