import React from 'react';

import styled from 'styled-components';

import Container from '../styled-components/Container';

import GrayStripe from '../styled-components/GrayStripe';

import StandardParagraph from '../styled-components/StandartParagraph';

import Input from './Input';

const FormContainer = styled.main`

    height: 100%;
    width: 100%;
    max-width: 375px;
    background-color: rgba(221,221,221, 0.75);

`;




const Form = () => {
    return (
        
        <FormContainer>
            
            <GrayStripe>

                <StandardParagraph>
                    PODE ACREDITAR, POR DENTRO É AINDA MAIS BONITO!
                </StandardParagraph>
                
            </GrayStripe>

            <Container>

                <Input/>

                <Input/>

                <Input/>

                <p>
                    Button!
                </p>

            </Container>

        </FormContainer>

    )
}

export default Form;
