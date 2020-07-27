import React from 'react';
import { InputGroupText, InputGroup, Input, InputGroupAddon } from 'reactstrap';

const Arista = props => {
  const numero = props.d;
  // const handleChange = e => props.handleChanges(e);
  return (
    <InputGroup className="mt-1">
      <InputGroupAddon addonType="prepend">
        <InputGroupText>
          {"b" + numero}
        </InputGroupText>
      </InputGroupAddon>
      <Input
        name={numero}
        placeholder="b"
        aria-label="b"
        aria-describedby="b"
        onChange={props.handleChanges}
      />

    </InputGroup>)

}

export default Arista;