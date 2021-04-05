import React from 'react';
import { PageHeader} from 'antd';
import 'antd/dist/antd.css'
import View from './components/View/View';

function App() {
  return (
    <div className="App">
      <PageHeader className="site-page-header" title="Redux Shopping Cart" />
      <View />
      
    </div>
  );
}

export default App;
