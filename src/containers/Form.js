import React, { Component } from 'react';

import styled from 'styled-components';

import Container from '../styled-components/Container';

import GrayStripe from '../styled-components/GrayStripe';

import StandardParagraph from '../styled-components/StandartParagraph';

import Button from '../components/Button';

import Input from '../components/Input';

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


class Form extends Component {

    state = {
        inputController: [
            {
                type: 'text',
                label: 'Nome',
                key: 'name'
            },
            {
                type: 'email',
                label: 'E-mail',
                key: 'email'
            },
            {
                type: 'text',
                label: 'Fone',
                key: 'phone'
            }
        ]
    }

    sendHandler = () => {
        alert('You did it!');
    }

    render(){

        return (
        
            <FormContainer>
                
                <GrayStripe>
    
                    <StandardParagraph>
                        PODE ACREDITAR, POR DENTRO É AINDA MAIS BONITO!
                    </StandardParagraph>
                    
                </GrayStripe>
    
                <Container>
    
                    {
                        this.state.inputController.map( item => {
                            return <Input {...item} key={item.key}/>
                        } )
                    }
    
                    <Button clicked={this.sendHandler}/>
    
                    <FormObs>
                        *Campos obrigatórios
                    </FormObs>
    
                </Container>
    
            </FormContainer>
    
        )

    }

}

export default Form;
