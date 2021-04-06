import React from 'react';
import styled from 'styled-components';

import Logo1 from '../assets/images/logo1.png';

import Logo2 from '../assets/images/logo2.png';

import GrayStripe from '../styled-components/GrayStripe';

import Logo from '../styled-components/Logo';

import MainContainer from '../styled-components/MainContainer';

const MainContainerToolBar = styled(MainContainer)`

    display: flex;
    justify-content: space-between;
    padding: 15px;

    @media screen and (max-width: 768px){

        flex-direction: column;
        justify-content: center;
        align-items: center;

    }

`

const Toolbar = () => {
    return (
        
        <GrayStripe>

            <MainContainerToolBar>

                <Logo>
                    <img src={Logo1} alt="Logo1" />
                </Logo>

                <Logo>
                    <img src={Logo2} alt="Logo2" />
                </Logo>

            </MainContainerToolBar>

        </GrayStripe>

    )
}

export default Toolbar
