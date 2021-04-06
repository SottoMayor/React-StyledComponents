import React from 'react';

import Layout from './components/Layout';

import Banner from './components/Banner';

const App = () => {

  return(
    <div>
        <Layout>

            <Banner/>

            <div>
              Holder 1
            </div>

            <div>
              Mosaic Container -- 4 Mosaic (2 normal and 2 reverse)
            </div>

            <div>
              Holder 2
            </div>

        </Layout>
    </div>
  )

}

export default App;

