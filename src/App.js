import React from 'react';

import Layout from './components/Layout';

import Banner from './components/Banner';

import HolderUP from './components/HolderUP';

import Mosaic from './components/Mosaic';

const App = () => {

  return(
    <React.Fragment>
        <Layout>

            <Banner/>

            <HolderUP/>

            <MosaicContainer/>

            <div>
              Holder 2
            </div>

        </Layout>
    </React.Fragment>
  )

}

export default App;

