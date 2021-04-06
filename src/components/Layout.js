import React from 'react';

import Toolbar from './Toolbar';

import Footer from './Footer';

const Layout = (props) => (
    <React.Fragment>

        <Toolbar/>

        <main>
            {props.children}
        </main>

        <Footer/>

    </React.Fragment>
)

export default Layout;
