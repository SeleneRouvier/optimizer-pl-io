import React from 'react';
import {InputGroupText,InputGroup, Input,InputGroupAddon,UncontrolledPopover,PopoverBody} from 'reactstrap';

const Arista = props => {
    const numero = props.d;
    // const handleChange = e => props.handleChanges(e);
    return(
        <InputGroup className="mt-1" id={"XTTt" + numero} key={"VTDd" + numero}>
        <InputGroupAddon addonType="prepend">
          <InputGroupText name="xii" id="d">
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