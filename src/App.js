import React from 'react';

import Layout from './components/Layout';

import Banner from './components/Banner';

import HolderUP from './components/HolderUP';

import MosaicContainer from './containers/MosaicContainer';

import HolderDOWN from './components/HolderDOWN';

const App = () => {

  return(
    <React.Fragment>
        <Layout>

            <Banner/>

            <HolderUP/>

            <MosaicContainer/>

            <HolderDOWN/>

        </Layout>
    </React.Fragment>
  )

}

export default App;

