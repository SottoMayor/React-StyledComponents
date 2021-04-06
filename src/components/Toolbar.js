import React from 'react';
import styled from 'styled-components';

import Logo1 from '../assets/images/logo1.png';

import Logo2 from '../assets/images/logo2.png';

import GrayStripe from '../styled-components/GrayStripe';

import Logo from '../styled-components/Logo';

const GrayStripeSB = styled(GrayStripe)`

    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 768px){

        flex-direction: column;
        justify-content: center;
        align-items: center;

    }

`

const Toolbar = () => {
    return (
        
        <GrayStripeSB>

            <Logo>
                <img src={Logo1} alt="Logo1" />
            </Logo>

            <Logo>
                <img src={Logo2} alt="Logo2" />
            </Logo>

        </GrayStripeSB>

    )
}

export default Toolbar
