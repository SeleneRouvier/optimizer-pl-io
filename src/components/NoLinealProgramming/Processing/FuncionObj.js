import React from 'react';
import {InputGroup, InputGroupText, Input } from 'reactstrap'


const FuncionObj = props => {
    return(
            <InputGroup className="mt-1">
    
            <InputGroupText className='mx-1'> Z = </InputGroupText>
            <Input
              placeholder="Funcion objetivo"
              aria-label="Descripcion"
              aria-describedby="funcion"
              onChange={ e => props.handleObjectiveFunction(e)}
              />
            <InputGroupText className='mx-1'>{' => '+props.objective.toUpperCase()}</InputGroupText>
    
          </InputGroup>
    ) 
}

export default FuncionObj;