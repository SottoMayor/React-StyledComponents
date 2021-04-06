import React from 'react';

import Logo from '../styled-components/Logo';

import Logo1 from '../assets/images/logo1.png'

import StandardParagraph from '../styled-components/StandartParagraph';

import styled from 'styled-components';


const StyledFooter = styled.footer`

    padding: 15px calc(2% + 7px);
    box-sizing: border-box;
    text-align: center;

`

const CenteredLogo = styled(Logo)`

    display: block;
    margin: 15px auto;

`


const Footer = () => {
    return (
        <StyledFooter>
            
            <StandardParagraph>
                Rodovia João Paulo, 2097 - João Paulo, Florianópolis - SC
            </StandardParagraph>

            <StandardParagraph>
                Contato: (99) 99999-9999
            </StandardParagraph>

            <CenteredLogo>
                <img src={Logo1} alt="Logo1" />
            </CenteredLogo>

        </StyledFooter>
    )
}

export default Footer;
