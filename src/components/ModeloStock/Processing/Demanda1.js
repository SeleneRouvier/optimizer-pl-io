import React from 'react';
import {InputGroup, InputGroupAddon, InputGroupText, Input, UncontrolledTooltip } from 'reactstrap'


const Demanda = props => {
    let {demandaunitaria} = props
    let setValorDemanda = demandaunitaria
    .filter(vari => vari.descripcion !== '')
    .map( (vari,index) => 
        <React.Fragment key={'divIF'+index}>
            <UncontrolledTooltip flip={false} key={'TTV'+index} placement='auto' target={'IF'+index}>
            {'Aqui debes ingresar el valor de '+vari.descripcion}
            </UncontrolledTooltip>
            <Input key={'IF'+index}
                    id={'IF'+index}
                        type='number'
                        placeholder="Valor"
                        onChange={ e => props.handleDem(e)}
                        value={vari.val}
                        />
            <InputGroupAddon key={'ADDIF'+index} addonType="append">
            </InputGroupAddon>
        </React.Fragment>) 
    return(
            <InputGroup key={'INPUTFUNCIONAL'}>
                {setValorDemanda}
            </InputGroup>
    
    ) 
}

export default Demanda;