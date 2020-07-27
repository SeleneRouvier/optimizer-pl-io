import React from 'react';
import {InputGroupText,InputGroup, Input,InputGroupAddon,UncontrolledPopover,PopoverBody} from 'reactstrap';

const Arista = props => {
    const numero = props.d;
    // const handleChange = e => props.handleChanges(e);
    return(
        <InputGroup className="mt-1" id={"XTTt" + numero} key={"VTDd" + numero}>
        <InputGroupAddon addonType="prepend">
          <InputGroupText name="xii" id="d">
            {"d" + numero}
          </InputGroupText>
        </InputGroupAddon>
        <Input
          name={numero}
          placeholder="d"
          aria-label="d"
          aria-describedby="d"
          onChange={props.handleChanges}
        />

      </InputGroup>)
    
}

export default Arista;