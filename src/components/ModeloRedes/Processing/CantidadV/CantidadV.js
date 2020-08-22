import React from 'react';
import { InputGroupText, InputGroup, Input, InputGroupAddon } from 'reactstrap';



//ESTO ES DE FLUJO MINIMO
const Cantidad = props => {
  let { xj } = props.vertice;
  // const handleChange = e => props.handleChanges(e);
  return (
    <InputGroup className="mt-1">
      <InputGroupAddon addonType="prepend">
        <InputGroupText>
          {"V" + xj}
        </InputGroupText>
      </InputGroupAddon>
      <Input
        name={[xj, "supplie"]}
        placeholder="Supplie"
        aria-label="Supplie"
        aria-describedby="vertice"
        onChange={props.handleChanges}
      />
    </InputGroup>)

}

export default Cantidad;