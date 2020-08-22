import React from 'react';
import { InputGroupText, InputGroup, Input, InputGroupAddon } from 'reactstrap';

//ESTO ES DE FLUJO MINIMO

const AristaFMI = props => {
  let { xi } = props.arista;
  // const handleChange = e => props.handleChanges(e);
  return (
    <InputGroup className="mt-1">
      <InputGroupAddon addonType="prepend">
        <InputGroupText>
          {"A" + xi}
        </InputGroupText>
      </InputGroupAddon>
      <Input
        name={[xi, "nodoInicial"]}
        placeholder="Nodo inicial"
        aria-label="Nodo inicial"
        aria-describedby="aristaFMI"
        onChange={props.handleChanges}
      />
      <Input
        name={[xi, "nodoFinal"]}
        placeholder="Nodo final"
        aria-label="Nodo final"
        aria-describedby="aristaFMI"
        onChange={props.handleChanges}
      />
      <Input
        name={[xi, "capacidad"]}
        placeholder="Capacidad"
        aria-label="Capacidad"
        aria-describedby="aristaFMI"
        onChange={props.handleChanges}
      />
      <Input
        name={[xi, "costo"]}
        placeholder="Costo"
        aria-label="Costo"
        aria-describedby="aristaFMI"
        onChange={props.handleChanges}
      />
    </InputGroup>)

}

export default AristaFMI;