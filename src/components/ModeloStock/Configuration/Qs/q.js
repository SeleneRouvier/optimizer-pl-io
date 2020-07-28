import React from 'react';
import { InputGroupText, InputGroup, Input, InputGroupAddon } from 'reactstrap';

const Q = props => {
  const numero = props.q;
  // const handleChange = e => props.handleChanges(e);
  return (
    <InputGroup className="mt-1">
      <InputGroupAddon addonType="prepend">
        <InputGroupText>
          {"q" + numero}
        </InputGroupText>
      </InputGroupAddon>
      <Input
        name={numero}
        placeholder="q"
        aria-label="q"
        aria-describedby="q"
        onChange={props.handleChanges}
      />

    </InputGroup>)

}

export default Q;