import React from 'react';

import StyledInput from '../styled-components/StyledInput';


const Input = (props) => {

    let inputType = null;

    switch (props.type) {
        case "text":
            inputType = <input type="text" />
            break;
    
        case "email":
            case "text":
            inputType = <input type="email" />
            break;

        default:
            inputType = <input type="text" />
            break;
    }


    return (

        <StyledInput>

            <label >*{props.label}</label>

            {inputType}

        </StyledInput>
    )
}

export default Input
