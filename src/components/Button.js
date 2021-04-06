import React from 'react';

import StyledButton from '../styled-components/StyledButton';



const Button = (props) => {
    return (
        <StyledButton>
            <button onClick={props.clicked}>ENVIAR</button>
        </StyledButton>
    )
}

export default Button;
