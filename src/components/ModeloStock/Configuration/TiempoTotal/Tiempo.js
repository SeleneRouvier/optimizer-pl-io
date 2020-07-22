import React from 'react';
import {InputGroupText,InputGroup, Input,InputGroupAddon,UncontrolledPopover,PopoverBody} from 'reactstrap';

const Tiempo = props => {
    let {ri,descripcion} = props.tiempo
    
    const handleChange = e => props.handleChange(ri,e.target.value)
    return(
        <InputGroup className="mt-1" id={"TTR" + ri} key={"RTD" + ri}>

        <InputGroupAddon addonType="prepend">
          <InputGroupText name="ri" id="tiempo">{"T"}</InputGroupText>
        </InputGroupAddon>

        <Input
          name="T"
          placeholder="Descripcion del Tiempo total"
          aria-label="Descripcion"
          aria-describedby="Tiempo total"
          onChange={handleChange}
          value={descripcion}/>

        <UncontrolledPopover flip={false} trigger="focus hover" placement="auto" target={"TTR" + ri}>
          <PopoverBody>Aquí debes ingresar qué representa la restricción en el modelo.</PopoverBody>
        </UncontrolledPopover>

      </InputGroup>)
    
}

export default Tiempo;