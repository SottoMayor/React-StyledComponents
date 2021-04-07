import React from 'react';

import Layout from './components/Layout';

import Banner from './components/Banner';
import HolderUP from './components/HolderUP';

const App = () => {

  return(
    <React.Fragment>
        <Layout>

            <Banner/>

            <HolderUP/>

            <div>
              Mosaic Container -- 4 Mosaic (2 normal and 2 reverse)
            </div>

            <div>
              Holder 2
            </div>

        </Layout>
    </React.Fragment>
  )

}

export default App;

