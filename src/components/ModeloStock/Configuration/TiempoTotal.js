import React from 'react';
import { Input, UncontrolledDropdown, Dropdown, DropdownMenu, DropdownItem, InputGroup, DropdownToggle, FormGroup, Label } from 'reactstrap'


const TiempoTotal = props => {
    var isOpen = false;

    return (
        <InputGroup>
            <Input
                placeholder="Tiempo Total"
                onChange={props.handleChange}
            />
            <FormGroup>
                <Input type="select" name="select" onChange={props.handleChangeUnit}>
                    <option>Meses</option>
                    <option>Años</option>
                </Input>
            </FormGroup>
        </InputGroup>
    )
}

export default TiempoTotal;