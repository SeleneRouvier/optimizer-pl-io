import React from 'react';
import {InputGroupText,InputGroup, Input,InputGroupAddon,UncontrolledPopover,PopoverBody} from 'reactstrap';

const Arista = props => {
    let {xi,descripcion} = props.arista;
    // const handleChange = e => props.handleChanges(e);
    return(
        <InputGroup className="mt-1" id={"XTT" + xi} key={"VTD" + xi}>
        <InputGroupAddon addonType="prepend">
          <InputGroupText name="xi" id="arista">
            {"A" + xi}
          </InputGroupText>
        </InputGroupAddon>
        <Input
          name={[xi, "nodoInicial"]}
          placeholder="Nodo inicial"
          aria-label="Nodo inicial"
          aria-describedby="arista"
          onChange={props.handleChanges}
          // value={descripcion}
        />
        <Input
          name={[xi, "nodoFinal"]}
          placeholder="Nodo final"
          aria-label="Nodo final"
          aria-describedby="arista"
          onChange={props.handleChanges}
          // value={descripcion}
        />
        <Input
          name={[xi, "peso"]}
          placeholder="Peso"
          aria-label="Peso"
          aria-describedby="arista"
          onChange={props.handleChanges}
          // value={descripcion}
        />

      </InputGroup>)
    
}

export default Arista;