import React from 'react';
import { InputGroupText, InputGroup, Input, InputGroupAddon } from 'reactstrap';

const Arista = props => {
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
        aria-describedby="arista"
        onChange={props.handleChanges}
      />
      <Input
        name={[xi, "nodoFinal"]}
        placeholder="Nodo final"
        aria-label="Nodo final"
        aria-describedby="arista"
        onChange={props.handleChanges}
      />
      <Input
        name={[xi, "peso"]}
        placeholder="Peso"
        aria-label="Peso"
        aria-describedby="arista"
        onChange={props.handleChanges}
      />

    </InputGroup>)

}

export default Arista;