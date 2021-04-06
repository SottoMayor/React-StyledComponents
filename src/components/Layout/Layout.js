import React from 'react';

import Toolbar from '../Toolbar/Toolbar';

const Layout = (props) => (
    <React.Fragment>

        <Toolbar/>

        <main>
            {props.children}
        </main>

        <div> Footer</div>

    </React.Fragment>
)

export default Layout;
