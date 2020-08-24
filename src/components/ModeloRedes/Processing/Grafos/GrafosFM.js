import React, { Component } from 'react';
import { Network, Node, Edge } from 'react-vis-network';
 
class GrafosFM extends Component {
    constructor(props) {
        super(props);
        this.model = props.model;
    }
    
    //cargarNodos = () =>{
        //let {cantNodos} = this.model.cantidadNodos;
        //cantNodos = parseInt(cantNodos)
        
        //for (let i = 0; i < cantNodos; i++) {
          //  <Node id= {i} label= {i} />
        //}
    
    //}
    render() {
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