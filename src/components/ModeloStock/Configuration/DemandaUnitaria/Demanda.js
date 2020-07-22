import React from 'react';
import {InputGroupText,InputGroup, Input,InputGroupAddon,UncontrolledPopover,PopoverBody} from 'reactstrap';

const Demanda = props => {
    let {ri,descripcion} = props.demanda
    
    const handleChange = e => props.handleChange(ri,e.target.value)
    return(
        <InputGroup className="mt-1" id={"TTR" + ri} key={"RTD" + ri}>

        <InputGroupAddon addonType="prepend">
          <InputGroupText name="ri" id="demanda">{"d"}</InputGroupText>
        </InputGroupAddon>

        <Input
          name="d"
          placeholder="Descripcion de la Demanda"
          aria-label="Descripcion"
          aria-describedby="demanda"
          onChange={handleChange}
          value={descripcion}/>

        <UncontrolledPopover flip={false} trigger="focus hover" placement="auto" target={"TTR" + ri}>
          <PopoverBody>Aquí debes ingresar qué representa la restricción en el modelo.</PopoverBody>
        </UncontrolledPopover>

      </InputGroup>)
    
}

export default Demanda;