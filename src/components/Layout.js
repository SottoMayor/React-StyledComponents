import React from 'react';

import Toolbar from './Toolbar';

import Footer from './Footer';

import MainContainer from '../styled-components/MainContainer';

const Layout = (props) => (
    <React.Fragment>

        <Toolbar/>

        <MainContainer>
            {props.children}
        </MainContainer>

        <Footer/>

    </React.Fragment>
)

export default Layout;
