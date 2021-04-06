import React from 'react';

import styled from 'styled-components';

import Container from '../styled-components/Container';

import GrayStripe from '../styled-components/GrayStripe';

import StandardParagraph from '../styled-components/StandartParagraph';

import Button from './Button';

import Input from './Input';

const FormContainer = styled.main`

    height: 100%;
    width: 100%;
    max-width: 375px;
    background-color: rgba(221,221,221, 0.75);

`;

const FormObs = styled(StandardParagraph)`
    box-sizing: border-box;
    padding: 0 2%;
    color: #464b51;
    margin-top: 22px;

`


const Form = () => {

    //Convert this to Class Based Components, create a state, and create a button method.

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

                <Button/>

                <FormObs>
                    *Campos obrigatórios
                </FormObs>

            </Container>

        </FormContainer>

    )
}

export default Form;
