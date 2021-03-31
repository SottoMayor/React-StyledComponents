import React from 'react'

const Layout = (props) => (
    <React.Fragment>

        <div> ToolBar</div>

        <main>
            {props.children}
        </main>

        <div> Footer</div>

    </React.Fragment>
)

export default Layout;
