import React from 'react';
import {InputGroup, InputGroupAddon, InputGroupText, Input, UncontrolledTooltip } from 'reactstrap'


const FuncionObj = props => {
    return(
            <InputGroup className="mt-1" id={"TTR"} key={"RTD"}>
    
            <InputGroupText className='mx-1' key='IFOPT'> Z = </InputGroupText>
            <Input
              placeholder="Funcion objetivo"
              aria-label="Descripcion"
              aria-describedby="funcion"
              onChange={ e => props.handleObjectiveFunction(e)}
              />
            <InputGroupText className='mx-1' key='IFOPT'>{' => '+props.objective.toUpperCase()}</InputGroupText>
    
          </InputGroup>
    ) 
}

export default FuncionObj;