import React from 'react';
import {InputGroupText,InputGroup, Input,InputGroupAddon,UncontrolledPopover,PopoverBody} from 'reactstrap';

const Arista = props => {
    let {xi,descripcion} = props.arista
    const handleChange = e => props.handleChanges(xi,e.target.value) 
    return(
        <InputGroup className="mt-1" id={"XTT" + xi} key={"VTD" + xi}>
        <InputGroupAddon addonType="prepend">
          <InputGroupText name="xi" id="arista">
            {"A" + xi}
          </InputGroupText>
        </InputGroupAddon>
        <Input
          name={xi}
          placeholder="Descripcion de la arista"
          aria-label="Descripcion"
          aria-describedby="arista"
          onChange={handleChange}
          // value={descripcion}
        />
        <UncontrolledPopover flip={false} trigger="focus hover" placement="auto" target={"XTT" + xi}>
          <PopoverBody>Aquí debes ingresar qué representa la arista en el modelo.</PopoverBody>
        </UncontrolledPopover>
      </InputGroup>)
    
}

export default Arista;