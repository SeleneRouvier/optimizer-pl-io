import React from 'react';
import {InputGroupText,InputGroup, Input,InputGroupAddon,UncontrolledPopover,PopoverBody} from 'reactstrap';

const Q = props => {
    const numero = props.q;
    // const handleChange = e => props.handleChanges(e);
    return(
        <InputGroup className="mt-1" id={"XTT" + numero} key={"VTD" + numero}>
        <InputGroupAddon addonType="prepend">
          <InputGroupText name="xi" id="q">
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