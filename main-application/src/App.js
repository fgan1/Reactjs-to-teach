import React, { Component } from 'react';

import BurguerBuilder from './containers/BurgerBuilder/BurguerBuilder'
import Layout from './components/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurguerBuilder>
          </BurguerBuilder>
        </Layout>
      </div>
    );
  }
}

export default App;
